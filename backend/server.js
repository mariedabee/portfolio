//server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { submitForm } = require("./routes/formSubmitController");
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
    app.post("/submit-form", submitForm);

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
