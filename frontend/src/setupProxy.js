// Runs the serverless API functions inside the local dev server (npm start),
// so local development uses the same code as Vercel in production.
const express = require("express");
const submitForm = require("../api/submit-form");

module.exports = function setupApi(app) {
  app.post("/api/submit-form", express.json({ limit: "20kb" }), submitForm);
};
