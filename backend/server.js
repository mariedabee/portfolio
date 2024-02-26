const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb"); // Import MongoClient
require("dotenv").config();

const postsRouter = require("./routes/postsRouter"); // Import postsRouter

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection URI
const uri = "mongodb://localhost:27017/portfolio"; // Update with your MongoDB URI

// Middleware to connect to the MongoDB cluster
const connectToMongoDB = async (req, res, next) => {
  try {
    const client = new MongoClient(uri);
    console.log('client', client)
    await client.connect();
    req.dbClient = client;
    next();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Use connectToMongoDB middleware for all routes under /api/posts
app.use("/api/posts", connectToMongoDB, postsRouter);

// Endpoint to create a new post
app.post("/api/posts", async (req, res) => {
  try {
    const { title, content } = req.body;
    const db = req.dbClient.db();
    const result = await db.collection("posts").insertOne({ title, content });
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Endpoint to get all posts
app.get("/api/posts", async (req, res) => {
  try {
    console.log("api.get: ")
    const db = req.dbClient.db();
    const posts = await db.collection("posts").find({}).toArray();
        console.log("posts: ", posts);
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.post("/submit-form", async (req, res) => {
  const { senderEmail, firstName, lastName, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER, // Your Zoho email address
    to: process.env.EMAIL_USER, // Your personal email address
    subject: "New Contact Form Submission",
    text: `
      Sender's Email: ${senderEmail}
      First Name: ${firstName}
      Last Name: ${lastName}
      Message: ${message}
    `,
  };

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
