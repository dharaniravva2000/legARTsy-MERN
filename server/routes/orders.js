import express from 'express';
import jwt from 'jsonwebtoken';
import Order from '../models/Order.js';
import User from '../models/User.js';

const router = express.Router();

function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}

router.post("/create", authenticateToken, async (req, res) => {
  const { items, total, customer } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "No items in order" });
  }

  try {
    const orderNumber = "ORD-" + Date.now();

    const order = new Order({
      user: req.userId,
      orderNumber,
      items,
      total,
      paymentStatus: "Paid",
      paymentIntentId: customer.paymentIntentId || "mocked",
      customerDetails: {
        name: customer.name,
        email: customer.email,
        dob: customer.dob,
        paymentMethod: customer.paymentMethod,
      },
    });

    const savedOrder = await order.save();

    await User.findByIdAndUpdate(req.userId, {
      $push: { orders: savedOrder._id },
    });

    res.status(201).json({ message: "Order saved", order: savedOrder });
  } catch (err) {
    console.error("Save order error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
