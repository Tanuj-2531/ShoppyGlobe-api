const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// GET all products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET single product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    res.json(product);
  } catch {
    res.status(400).json({ msg: "Invalid ID" });
  }
});

module.exports = router;