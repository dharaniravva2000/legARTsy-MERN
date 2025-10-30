import React from 'react';
import '../styles/UpdateCard.css';

function UpdateCard({ image, date, title, detail }) {
  return (
    <div className="update-card">
      <img src={image} alt={title} className="update-image" />
      <div className="update-content">
        <h5 className="update-date">{date}</h5>
        <h4 className="update-title">{title}</h4>
        <p className="update-description">{detail}</p>
        <h6 className="update-readmore">Continue Reading...</h6>
      </div>
    </div>
  );
}

export default UpdateCard;
