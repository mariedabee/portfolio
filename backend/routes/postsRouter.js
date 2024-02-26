const express = require("express");
const router = express.Router();

// Endpoint to create a new post
router.post("/", async (req, res) => {
  try {
    // Extract title and content from request body
    const { title, content } = req.body;

    // Access MongoDB client from request object and insert new post into database
    const db = req.dbClient.db();
    const result = await db.collection("posts").insertOne({ title, content });

    // Respond with success status and inserted post ID
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    // Handle errors and respond with error message
    console.error("Error creating post:", error.message);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Endpoint to get all posts
router.get("/", async (req, res) => {
  try {
    // Access MongoDB client from request object and retrieve all posts from database
    const db = req.dbClient.db();
    const posts = await db.collection("posts").find({}).toArray();

    // Respond with retrieved posts
    res.json(posts);
  } catch (error) {
    // Handle errors and respond with error message
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

const { ObjectId } = require("mongodb");

router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("postid", postId);

    // Convert string ID to ObjectId
    const postObjectId = new ObjectId(postId);

    // Access MongoDB client from request object and delete post from database
    const db = req.dbClient.db();
    const result = await db
      .collection("posts")
      .deleteOne({ _id: postObjectId });

    console.log("result", result);

    if (result.deletedCount === 1) {
      // Respond with success message if post is deleted
      res.json({ message: "Post deleted successfully" });
    } else {
      console.log("else", error.message);
      // Respond with error message if post is not found
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    // Handle errors and respond with error message
    console.error("Error deleting post:", error.message);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

module.exports = router;
