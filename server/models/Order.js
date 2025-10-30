// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderNumber: String,
  items: Array,
  total: Number,
  paymentStatus: String,
  paymentIntentId: String,
  customerDetails: {
    name: String,
    email: String,
    dob: String,
    paymentMethod: String,
    cardDetails: {
      cardNumber: String,
      expiry: String,
      cvc: String,
    },
  },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
