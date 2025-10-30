// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "../styles/checkout.css";

const stripePromise = loadStripe("pk_test_12345_dummy"); // Not used actually

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!form.fullName || !form.dob || !form.email) {
      alert("Please fill all required fields.");
      return;
    }

    if (!token) {
      alert("Please login to complete your order.");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      // ✅ Simulated Payment (no real Stripe API call)
      // Assume payment was successful with dummy card details
      const fakePaymentIntentId = "dummy_pi_" + Date.now();

      // ✅ Save Order to DB
      await axios.post(
        "http://localhost:3001/api/orders/create",
        {
          items: cart,
          total,
          customer: {
            name: form.fullName,
            email: form.email,
            dob: form.dob,
            paymentMethod: "Card",
            paymentIntentId: fakePaymentIntentId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      clearCart();
      navigate("/success");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Order failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <fieldset>
          <legend>Customer Details</legend>

          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Payment Details (Dummy)</legend>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
          <small>Use: 4242 4242 4242 4242 • Exp: 12/34 • CVC: 123</small>
        </fieldset>

        <div className="total-amount">
          <strong>Total: ₹{total.toFixed(2)}</strong>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
