//server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { submitForm } = require("./routes/formSubmitController");
const { contactRateLimit } = require("./routes/spamProtection");
// Import MongoDB connection middleware
const { connectToMongoDB } = require("./mongoDB");

const app = express();

// Behind a hosting proxy, use the visitor's real IP for rate limiting
app.set("trust proxy", 1);

// Enable CORS for cross-origin resource sharing
app.use(cors());

// Parse JSON bodies of requests (small limit: the contact form is the only input)
app.use(express.json({ limit: "20kb" }));


// Connect to MongoDB and start the server
connectToMongoDB()
  .then((client) => {
    // MongoDB connection successful, attach MongoDB client to the request object
    app.use((req, res, next) => {
      req.dbClient = client;
      next();
    });

    // Endpoint to handle form submission
    app.post("/submit-form", contactRateLimit, submitForm);

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
