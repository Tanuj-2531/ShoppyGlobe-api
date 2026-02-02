// Import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB database
connectDB();

const app = express();

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to read JSON data from request body
app.use(express.json());

// Test route to check server is running
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/productRoutes"));
app.use("/api", require("./routes/cartRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});