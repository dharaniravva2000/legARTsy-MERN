// pages/Cart.jsx
import React from 'react';
import CartItem from '../components/CartItem.jsx';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ Use global cart state

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart(); // ✅ From context

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart, total } });
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => updateQuantity(item.title, newQuantity)}
              onRemove={() => removeFromCart(item.title)}
            />
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
