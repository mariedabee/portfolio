//server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Enable CORS for cross-origin resource sharing
app.use(cors());

// Parse JSON bodies of requests
app.use(bodyParser.json());

// Import MongoDB connection middleware
const { connectToMongoDB } = require("./mongoDB");

// Import routes
const postsRouter = require("./routes/postsRouter");
const authRouter = require("./routes/authRouter"); // Import authRouter

// Connect to MongoDB and start the server
connectToMongoDB()
  .then((client) => {
    // MongoDB connection successful, attach MongoDB client to the request object
    app.use((req, res, next) => {
      req.dbClient = client;
      next();
    });

    // Use routes
    app.use("/api/posts", postsRouter); // Attach postsRouter for /api/posts routes
    app.use("/api/auth", authRouter); // Attach authRouter for /api/auth routes

    // Endpoint to handle form submission
    app.post("/submit-form", async (req, res) => {
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
    });

    // Start the server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    // Error connecting to MongoDB
    console.error("Error connecting to MongoDB:", error);
  });
