const express = require("express");
const cors = require("cors"); // Import the cors middleware
const bodyParser = require("body-parser"); // Import the body-parser middleware
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors()); // Enable CORS for all routes

/**
 * Configures Express to parse JSON requests using the body-parser middleware.
 * This middleware is used to extract the body of
 * incoming requests and make it available under the req.body property.
 * */
app.use(bodyParser.json());

// Defines a POST endpoint at "/submit-form" where users can submit form data.
// Defines an asynchronous request handler function
app.post("/submit-form", async (req, res) => {
  // Destructures the form data
  const { firstName, lastName, email, message } = req.body;

  // Create a nodemailer transporter
  /*let transporter = nodemailer.createTransport({
    // Creates a Nodemailer transporter with the SMTP settings for sending emails.
    // Here, it's configured to use Gmail SMTP server.
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  */
  // testing with mailtrap
  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ed97890ddd2cb1",
      pass: "a3e984d4830ff3",
    },
  });

  // Compose email
  let mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL_USER, //  personal email address
    subject: "New Contact Form Submission",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
