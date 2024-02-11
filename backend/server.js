//Imports the Express.js moduleconst express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

//Creates an Express application instance.
const app = express();

/**
 * Configures Express to parse JSON requests using the body-parser middleware. 
 * This middleware is used to extract the body of 
 * incoming requests and make it available under the req.body property. 
 * */
app.use(bodyParser.json());

//Defines a POST endpoint at "/submit-form" where users can submit form data.
//Defines an asynchronous request handler function
app.post("/submit-form", async (req, res) => {
  //Destructures the form data
  const { firstName, lastName, email, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    //Creates a Nodemailer transporter with the SMTP settings for sending emails.
    //Here, it's configured to use Gmail SMTP server.
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Compose email
  let mailOptions = {
    from: "your-email@gmail.com",
    to: "your-personal-email@example.com", // Your personal email address
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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});