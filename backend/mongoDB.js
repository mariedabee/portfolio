//mongoDB.js
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");
    return client; // Return the MongoDB client
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = { connectToMongoDB }; // Export the connectToMongoDB function
