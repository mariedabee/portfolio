//postsRouter.js
const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

// Endpoint to create a new post
router.post("/", async (req, res) => {
  try {
    // Extract title and content from request body
    let { title, content, category, tags, date } = req.body;
    const currentDate = new Date().toDateString();
    date = currentDate;

    // Access MongoDB client from request object and insert new post into database
    const db = req.dbClient.db();
    const result = await db
      .collection("posts")
      .insertOne({ title, content, category, tags, date });

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

// Endpoint to get a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // Convert string ID to ObjectId
    const postObjectId = new ObjectId(postId);

    // Access MongoDB client from request object and retrieve the post from database
    const db = req.dbClient.db();
    const post = await db.collection("posts").findOne({ _id: postObjectId });

    // If post is found, respond with the post data
    if (post) {
      res.json(post);
    } else {
      // If post is not found, respond with 404 error
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    // Handle errors and respond with error message
    console.error("Error fetching post:", error.message);
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// Endpoint to DELETE a  post by ID
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

// Endpoint to edit a post by ID
router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, category, tags } = req.body;

    // Convert string ID to ObjectId
    const postObjectId = new ObjectId(postId);

    // Access MongoDB client from request object and update the post in the database
    const db = req.dbClient.db();
    const result = await db.collection("posts").updateOne(
      { _id: postObjectId },
      { $set: { title, content, category, tags } }
    );

    if (result.modifiedCount === 1) {
      // Respond with success message if post is updated
      res.json({ message: "Post updated successfully" });
    } else {
      // Respond with error message if post is not found
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    // Handle errors and respond with error message
    console.error("Error updating post:", error.message);
    res.status(500).json({ error: "Failed to update post" });
  }
});

module.exports = router;
