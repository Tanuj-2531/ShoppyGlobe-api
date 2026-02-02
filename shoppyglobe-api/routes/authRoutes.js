// Import required modules
const express = require("express");           // Express framework for routing
const bcrypt = require("bcryptjs");          // For hashing passwords
const jwt = require("jsonwebtoken");         // For generating authentication tokens
const User = require("../models/User");      // User model from MongoDB

const router = express.Router(); // Create router instance



// ====================== REGISTER USER ======================
router.post("/register", async (req, res) => {
  try {
    // Extract user details from request body
    const { name, email, password } = req.body;

    // Hash the password before saving to database
    const hashed = await bcrypt.hash(password, 10);

    // Create new user in database
    const user = await User.create({ name, email, password: hashed });

    // Send created user data as response
    res.json(user);

  } catch (err) {
    // Handle errors like duplicate email etc.
    res.status(400).json({ error: err.message });
  }
});



// ====================== LOGIN USER ======================
router.post("/login", async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body;

    // Find user in database by email
    const user = await User.findOne({ email });

    // If user does not exist
    if (!user) return res.status(400).json({ msg: "User not found" });

    // Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);

    // If password is incorrect
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Create JWT token containing user ID
    const token = jwt.sign(
      { id: user._id },              // Payload
      process.env.JWT_SECRET,        // Secret key from .env
      { expiresIn: "1d" }            // Token valid for 1 day
    );

    // Send token to client
    res.json({ token });

  } catch (err) {
    // Server error handling
    res.status(500).json({ error: err.message });
  }
});



// Export router to use in server.js
module.exports = router;