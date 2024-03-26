//server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const postsRouter = require("./routes/postsRouter");
const { submitForm } = require("./routes/formSubmitController");
const { signup } = require("./routes/signupController");
// Import MongoDB connection middleware
const { connectToMongoDB } = require("./mongoDB");
const { login } = require("./routes/loginController");
const { logout } = require("./routes/logoutController");

const app = express();

// Enable CORS for cross-origin resource sharing
app.use(cors());

// Parse JSON bodies of requests
app.use(bodyParser.json());


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

    // Endpoint to handle form submission
    app.post("/submit-form", submitForm);

    // Endpoint to handle user signup
    app.post("/api/auth/signup", signup);

    // Endpoint to handle user login
    app.post("/api/auth/login", login);

    app.post("/api/auth/logout", logout);

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
