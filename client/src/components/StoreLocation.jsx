import React from 'react';
import '../styles/StoreLocation.css'

function StoreLocation({ city, address, mapEmbedLink }) {
  return (
    <div className="store-location">
      <h3>{city}</h3>
      <p>{address}</p>
      <iframe
        src={mapEmbedLink}
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title={`Map of ${city}`}
      ></iframe>
    </div>
  );
}

export default StoreLocation;
