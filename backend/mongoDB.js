const { MongoClient } = require("mongodb");

// MongoDB Connection URI
const uri = process.env.MONGODB_URI; // Get URI from environment variables

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

module.exports = connectToMongoDB;
