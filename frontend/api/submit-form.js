// submit-form.js: contact form endpoint (POST /api/submit-form)
// Mounted by server.js in production (Railway) and by the CRA dev server
// locally (see src/setupProxy.js). Also works as a Vercel serverless function.
const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb");
const { isRateLimited, looksLikeBot } = require("./_spamProtection");

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MAX_LENGTH = { firstName: 100, lastName: 100, senderEmail: 200, message: 5000 };

// Reuse the database connection between requests (optional: only when MONGODB_URI is set)
let mongoClientPromise = null;
const getDb = () => {
  if (!process.env.MONGODB_URI) return null;
  if (!mongoClientPromise) mongoClientPromise = new MongoClient(process.env.MONGODB_URI).connect();
  return mongoClientPromise.then((client) => client.db());
};

// Only create a transporter when SMTP credentials are configured
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const validate = (body) => {
  const errors = [];
  for (const field of Object.keys(MAX_LENGTH)) {
    const value = body[field];
    if (typeof value !== "string" || !value.trim()) errors.push(`${field} is required`);
    else if (value.length > MAX_LENGTH[field]) errors.push(`${field} is too long`);
  }
  if (typeof body.senderEmail === "string" && !EMAIL_PATTERN.test(body.senderEmail)) {
    errors.push("senderEmail is invalid");
  }
  return errors;
};

module.exports = async function submitForm(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};

  if (isRateLimited(req)) {
    return res.status(429).json({ message: "Too many messages, please try again later" });
  }

  // Pretend success so bots don't learn they were caught
  if (looksLikeBot(body)) {
    return res.status(200).json({ message: "Form submitted successfully" });
  }

  const errors = validate(body);
  if (errors.length) {
    return res.status(400).json({ message: "Invalid form data", errors });
  }

  const firstName = body.firstName.trim();
  const lastName = body.lastName.trim();
  const senderEmail = body.senderEmail.trim();
  const message = body.message.trim();

  let saved = false;
  let emailed = false;

  // 1. Store the message when a database is configured
  try {
    const db = await getDb();
    if (db) {
      await db.collection("messages").insertOne({ firstName, lastName, senderEmail, message, createdAt: new Date() });
      saved = true;
    }
  } catch (error) {
    mongoClientPromise = null; // retry the connection next time
    console.error("Error saving contact message:", error.message);
  }

  // 2. Send the message by email
  const transporter = createTransporter();
  if (transporter) {
    try {
      // Strip line breaks so user input can't add email headers
      const safeName = `${firstName} ${lastName}`.replace(/[\r\n]+/g, " ");
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: senderEmail,
        subject: `Portfolio contact: ${safeName}`,
        text: `From: ${safeName} <${senderEmail}>\n\n${message}`,
      });
      emailed = true;
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  } else {
    console.warn("EMAIL_USER/EMAIL_PASS not set: no email sent");
  }

  // Success as long as the message reached at least one place
  if (!saved && !emailed) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "Form submitted successfully" });
};
