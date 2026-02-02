// Import required modules
const express = require("express");              // Express for routing
const Cart = require("../models/Cart");          // Cart model
const Product = require("../models/Product");    // Product model
const auth = require("../middleware/authMiddleware"); // Middleware to protect routes

const router = express.Router(); // Create router instance



// ====================== ADD PRODUCT TO CART ======================
router.post("/cart", auth, async (req, res) => {
  // Get product ID and quantity from request body
  const { productId, quantity } = req.body;

  // Check if product exists in database
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ msg: "Product not found" });

  // Create new cart item linked to logged-in user
  const cartItem = await Cart.create({
    user: req.user.id,     // User ID from decoded JWT token
    product: productId,    // Product reference
    quantity,              // Quantity selected
  });

  // Send created cart item as response
  res.json(cartItem);
});



// ====================== UPDATE CART ITEM QUANTITY ======================
router.put("/cart/:id", auth, async (req, res) => {
  // Find cart item by its ID
  const item = await Cart.findById(req.params.id);

  // If cart item not found
  if (!item) return res.status(404).json({ msg: "Cart item not found" });

  // Update quantity
  item.quantity = req.body.quantity;

  // Save updated cart item
  await item.save();

  // Send updated item in response
  res.json(item);
});



// ====================== DELETE ITEM FROM CART ======================
router.delete("/cart/:id", auth, async (req, res) => {
  // Remove cart item from database using ID
  await Cart.findByIdAndDelete(req.params.id);

  // Send confirmation message
  res.json({ msg: "Item removed" });
});



// Export router to use in server.js
module.exports = router;