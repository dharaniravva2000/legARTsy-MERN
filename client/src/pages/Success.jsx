// src/pages/Success.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Success.css'; // 💡 Add CSS below

const Success = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const submitOrder = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to complete your order.');
        navigate('/login');
        return;
      }

      try {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        const res = await axios.post(
          'https://legartsy-backend-3bwz.onrender.come',
          { items: cart, total },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log('✅ Order saved:', res.data);
        clearCart();
      } catch (err) {
        console.error('❌ Order saving failed:', err);
      }
    };

    if (cart.length > 0) {
      submitOrder();
    }
  }, [cart, clearCart, navigate]);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">&#10003;</div>
        <h2>Payment Successful</h2>
        <p>Your order has been placed successfully and will appear in your profile shortly.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default Success;
