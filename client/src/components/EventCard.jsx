import React from 'react';
import '../styles/EventCard.css'

function EventCard({ eventName, date, description }) {
  return (
    <div className="event-card">
      <h3>{eventName}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
      <button>Book Ticket</button>
    </div>
  );
}

export default EventCard;
