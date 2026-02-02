// Import required modules
const express = require("express");              // Express framework for routing
const Product = require("../models/Product");    // Product model from MongoDB

const router = express.Router(); // Create router instance



// ====================== GET ALL PRODUCTS ======================
router.get("/products", async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    // Send product list as response
    res.json(products);
  } catch (err) {
    // Handle server/database errors
    res.status(500).json({ msg: "Server error" });
  }
});



// ====================== GET SINGLE PRODUCT BY ID ======================
router.get("/products/:id", async (req, res) => {
  try {
    // Find product using ID from URL parameter
    const product = await Product.findById(req.params.id);

    // If product does not exist
    if (!product) return res.status(404).json({ msg: "Product not found" });

    // Send product details as response
    res.json(product);

  } catch (err) {
    // If invalid MongoDB ID format
    res.status(400).json({ msg: "Invalid ID" });
  }
});



// Export router to use in main server file
module.exports = router;