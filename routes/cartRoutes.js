const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Add to cart
router.post("/cart", auth, async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ msg: "Product not found" });

  const cartItem = await Cart.create({
    user: req.user.id,
    product: productId,
    quantity,
  });

  res.json(cartItem);
});

// Update quantity
router.put("/cart/:id", auth, async (req, res) => {
  const item = await Cart.findById(req.params.id);
  if (!item) return res.status(404).json({ msg: "Cart item not found" });

  item.quantity = req.body.quantity;
  await item.save();
  res.json(item);
});

// Delete item
router.delete("/cart/:id", auth, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ msg: "Item removed" });
});

module.exports = router;