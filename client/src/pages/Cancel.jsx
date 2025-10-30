import React from 'react';
import '../styles/cancel.css';

const Cancel = () => (
  <div className="cancel-container">
    <div className="cancel-card">
      <h2>❌ Payment Failed</h2>
      <p>Something went wrong. Please try again.</p>
      <a href="/cart">Return to Cart</a>
    </div>
  </div>
);

export default Cancel;
