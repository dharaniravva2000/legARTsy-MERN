import express from "express";
import jwt from "jsonwebtoken";
import Order from "../models/Order.js";
import User from "../models/User.js";

const router = express.Router();

// Auth middleware
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}

// ✅ Get user profile
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password").populate("orders");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
});

// ✅ Get user orders
router.get("/orders", authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

export default router;
