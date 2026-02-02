const jwt = require("jsonwebtoken");

// Middleware to protect routes using JWT token
module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  // If token not provided
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    // Verify token and extract user ID
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified;
    next(); // Continue to next route
  } catch (err) {
    res.status(400).json({ msg: "Invalid token" });
  }
};