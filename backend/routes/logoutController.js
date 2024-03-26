async function logout(req, res) {
  try {
    // Clear any session-related data (if applicable)
    // For example, if using JWT tokens, you may not need to do anything here

    // Close MongoDB connection if necessary
    if (req.dbClient) {
      req.dbClient.close();
    }

    // Respond with success message
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    // Handle errors
    console.error("Error logging out:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { logout };
