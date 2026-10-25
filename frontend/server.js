// server.js: production server (Railway or any Node host)
// Serves the built site and the contact form API from one process.
// Build first with `npm run build`, then run `node server.js`.
const path = require("path");
const express = require("express");
const submitForm = require("./api/submit-form");

const app = express();
const buildDir = path.join(__dirname, "build");

app.disable("x-powered-by");

app.all("/api/submit-form", express.json({ limit: "20kb" }), submitForm);

// Hashed static assets can be cached for a long time; index.html never
app.use(
  express.static(buildDir, {
    index: false,
    setHeaders: (res, filePath) => {
      if (filePath.includes(`${path.sep}static${path.sep}`)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  })
);

// Single-page app: every other route gets index.html (React Router handles it)
app.get("*", (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(buildDir, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Portfolio running on port ${PORT}`);
});
