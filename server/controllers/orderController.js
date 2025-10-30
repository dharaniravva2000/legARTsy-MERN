import Stripe from 'stripe';
import Order from '../models/Order.js';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createOrderOnWebhook = async (session) => {
  const customer = await stripe.customers.retrieve(session.customer);
  const cart = JSON.parse(customer.metadata?.cart || '[]');
  const user = await User.findOne({ email: customer.email });

  const newOrder = new Order({
    user: user ? user._id : null,
    orderNumber: `ORD-${Date.now()}`,
    items: cart,
    total: session.amount_total / 100,
    paymentStatus: session.payment_status,
    paymentIntentId: session.payment_intent,
  });
  const savedOrder = await newOrder.save();

  if (user) {
    await User.findByIdAndUpdate(user._id, { $push: { orders: savedOrder._id } });
  }
};
