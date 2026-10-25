// formSubmitController.js
const nodemailer = require("nodemailer");
const { looksLikeBot } = require("./spamProtection");

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MAX_LENGTH = { firstName: 100, lastName: 100, senderEmail: 200, message: 5000 };

// Only create a transporter when SMTP credentials are configured in .env
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

async function submitForm(req, res) {
  // Pretend success so bots don't learn they were caught
  if (looksLikeBot(req.body)) {
    return res.status(200).json({ message: "Form submitted successfully" });
  }

  const errors = validate(req.body);
  if (errors.length) {
    return res.status(400).json({ message: "Invalid form data", errors });
  }

  const firstName = req.body.firstName.trim();
  const lastName = req.body.lastName.trim();
  const senderEmail = req.body.senderEmail.trim();
  const message = req.body.message.trim();

  // 1. Store the message so nothing is lost, even if email delivery fails
  try {
    await req.dbClient
      .db()
      .collection("messages")
      .insertOne({ firstName, lastName, senderEmail, message, createdAt: new Date() });
  } catch (error) {
    console.error("Error saving contact message:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }

  // 2. Notify by email when SMTP is configured
  const transporter = createTransporter();
  if (!transporter) {
    console.warn("EMAIL_USER/EMAIL_PASS not set: contact message saved but no email sent");
  } else {
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
    } catch (error) {
      // The message is already saved, so the visitor still gets a success response
      console.error("Error sending email:", error.message);
    }
  }

  res.status(200).json({ message: "Form submitted successfully" });
}

module.exports = { submitForm };
