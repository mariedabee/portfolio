// formSubmitController.js
const nodemailer = require("nodemailer");

async function submitForm(req, res) {
  // Extract form data from request body
  const { senderEmail, firstName, lastName, message } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `
      Sender's Email: ${senderEmail}
      First Name: ${firstName}
      Last Name: ${lastName}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    // Respond with success message
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error sending email:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { submitForm };
