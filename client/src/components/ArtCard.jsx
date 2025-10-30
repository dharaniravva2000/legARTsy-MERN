import React from 'react';
import '../styles/ArtCard.css';

function ArtCard({ image, title, description, onBuy }) {
  return (
    <div className="art-card">
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onBuy}>Buy Now</button>
      </div>
    </div>
  );
}

export default ArtCard;
