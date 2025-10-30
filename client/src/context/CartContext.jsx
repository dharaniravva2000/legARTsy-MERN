import React, { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.title === product.title);
      if (existingItem) {
        return prevCart.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCart((prevCart) => prevCart.filter(item => item.title !== title));
  };

  const updateQuantity = (title, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
