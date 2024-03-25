// loginController.js
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

async function login(req, res) {
  // Extract login data from request body
  const { username, password } = req.body;

  try {
    // Create MongoDB client
    const client = new MongoClient(uri);
    await client.connect();

    // Access MongoDB database
    const db = client.db();

    // Find the user by username
    const user = await db.collection("users").findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Respond with success message
    res.status(200).json({ message: "Login successful" });

    // Close MongoDB connection
    client.close();
  } catch (error) {
    // Handle errors
    console.error("Error logging in:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { login };
