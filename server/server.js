import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Stripe from "stripe";
import User from './models/User.js';
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import paymentRoutes from './routes/payment.js';  // use consistent name here
import orderRoutes from './routes/orders.js';      // confirm filename matches
import userRoutes from './routes/user.js';

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/payment", paymentRoutes);    // keep this only if paymentRoutes is imported
app.use("/api/orders", orderRoutes);
app.use('/api/user', userRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
