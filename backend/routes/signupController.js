// signupController.js
const bcrypt = require("bcryptjs"); // For password hashing
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
console.log("MongoDB URI:", uri);
console.log(process.env);


async function signup(req, res) {
  // Extract signup data from request body
  const { username, email, password } = req.body;

  try {
    // Create MongoDB client
    const client = new MongoClient(uri);
    await client.connect();

    // Access MongoDB database
    const db = client.db();

    // Check if the username or email already exists
    const userExists = await db.collection("users").findOne({
      $or: [{ username }, { email }],
    });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const result = await db.collection("users").insertOne({
      username,
      email,
      password: hashedPassword,
    });

    // Respond with success message
    res.status(201).json({ message: "User created successfully" });

    // Close MongoDB connection
    client.close();
  } catch (error) {
    // Handle errors
    console.error("Error signing up:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { signup };
