const mongoose = require("mongoose");

// Schema for cart items
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User who owns cart
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Product added
  quantity: Number,
});

module.exports = mongoose.model("Cart", cartSchema);