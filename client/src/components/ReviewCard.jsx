import React from 'react';
import '../styles/ReviewCard.css';

function ReviewCard({ image, reviewer, rating, dp, review }) {
  return (
    <article className="review-card">
      <img className="review-image" src={image} alt={reviewer} />
      <div className="review-header">
        <img className="review-dp" src={dp} alt={reviewer} />
        <div>
          <strong>{reviewer}</strong><br />
          <span className="stars">{rating}</span>
        </div>
      </div>
      <p>"{review}"</p>
    </article>
  );
}

export default ReviewCard;
