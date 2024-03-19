// mongoDB.js
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

module.exports = connectToMongoDB;
