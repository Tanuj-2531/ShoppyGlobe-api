const mongoose = require("mongoose");

// Schema for user accounts
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // Email must be unique
  password: String, // Hashed password
});

module.exports = mongoose.model("User", userSchema);