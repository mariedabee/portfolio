// postsRouter.js

const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017/portfolio";

// Middleware to connect to the MongoDB cluster
const connectToMongoDB = async (req, res, next) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    req.dbClient = client;
    next();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Create a new post
router.post("/", connectToMongoDB, async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    // Get the current date and time
    const currentDate = new Date();

    // Format the date as desired (date + hh:mm)
    const formattedDate = `${currentDate.toDateString()} - ${currentDate.getHours()}:${
      currentDate.getMinutes() < 10 ? "0" : ""
    }${currentDate.getMinutes()}`;

    const db = req.dbClient.db();
    const result = await db
      .collection("posts")
      .insertOne({ title, content, category, tags, date: formattedDate });
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});


// Get all posts
router.get("/", connectToMongoDB, async (req, res) => {
  try {
    const db = req.dbClient.db();
    const posts = await db.collection("posts").find({}).toArray();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

module.exports = router;
