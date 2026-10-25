// spamProtection.js: keeps bots away from the contact form

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 5;
const MIN_FILL_TIME_MS = 3000; // humans need more than 3 seconds to fill in the form

// In-memory rate limit per IP address (enough for a single server instance)
const hits = new Map();

function contactRateLimit(req, res, next) {
  const now = Date.now();
  const key = req.ip;
  const recent = (hits.get(key) || []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return res.status(429).json({ message: "Too many messages, please try again later" });
  }

  recent.push(now);
  hits.set(key, recent);
  next();
}

// Drop old entries so the map doesn't grow forever
setInterval(() => {
  const now = Date.now();
  for (const [key, times] of hits) {
    if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
  }
}, WINDOW_MS).unref();

// Honeypot field filled in, or form sent impossibly fast: almost certainly a bot
function looksLikeBot(body) {
  if (typeof body.website === "string" && body.website.trim() !== "") return true;
  const startedAt = Number(body.formStartedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_TIME_MS) return true;
  return false;
}

module.exports = { contactRateLimit, looksLikeBot };
