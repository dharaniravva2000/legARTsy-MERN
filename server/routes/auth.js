// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const router = express.Router();

// 📌 Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, dob, gender, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with default profile image and empty orders
    const newUser = new User({
      name: name || email.split("@")[0], // fallback to email prefix if name not provided
      email,
      dob,
      gender,
      password: hashedPassword,
      profileImage: "/Images/default-avatar.png",
      orders: []
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    // Only return safe fields (not password)
    res.json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        dob: user.dob,
        gender: user.gender,
        profileImage: user.profileImage,
        orders: user.orders
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
