// _spamProtection.js: keeps bots away from the contact form
// (the leading underscore stops Vercel from exposing this file as an endpoint)

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 5;
const MIN_FILL_TIME_MS = 3000; // humans need more than 3 seconds to fill in the form

// In-memory rate limit per IP address. On Vercel each function instance keeps its
// own memory, so this is best effort; the honeypot and timing checks always apply.
const hits = new Map();

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(req) {
  const now = Date.now();
  const key = clientIp(req);
  const recent = (hits.get(key) || []).filter((time) => now - time < WINDOW_MS);
  const limited = recent.length >= MAX_PER_WINDOW;
  if (!limited) recent.push(now);
  hits.set(key, recent);

  // Drop old entries so the map doesn't grow forever
  if (hits.size > 1000) {
    for (const [ip, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(ip);
    }
  }
  return limited;
}

// Honeypot field filled in, or form sent impossibly fast: almost certainly a bot
function looksLikeBot(body) {
  if (typeof body.website === "string" && body.website.trim() !== "") return true;
  const startedAt = Number(body.formStartedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_TIME_MS) return true;
  return false;
}

module.exports = { isRateLimited, looksLikeBot };
