// components/CartItem.jsx
import React from 'react';
import '../styles/CartItem.css';

function CartItem({ image, title, price, quantity, onQuantityChange, onRemove }) {
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div className="cart-item-details">
        <h4>{title}</h4>
        <p>Price: ₹{price}</p>
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
          />
        </label>
        <p>Subtotal: ₹{price * quantity}</p>
      </div>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
