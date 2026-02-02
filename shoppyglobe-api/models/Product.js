const mongoose = require("mongoose");

// Schema for product items
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number, // Available stock
});

module.exports = mongoose.model("Product", productSchema);