import React from 'react';
import '../styles/Exhibitions.css'; // Ensure this CSS matches your HTML's stylesheet
import videoSrc from '../assests/Videos/WhatsApp Video 2025-07-04 at 13.23.42.mp4'
import eventImg1 from '../assests/Images/Event1.jpg'
import eventImg2 from '../assests/Images/Event2.jpg'
import eventImg3 from '../assests/Images/Event3.jpg'


function Exhibitions() {
  const purchaseArt = (eventName) => {
    alert(`You booked tickets for: ${eventName}`);
  };

  return (
    <div>
      {/* <header>
        <h1>legARTsy</h1>
        <p>YourART.YourLEGACY</p>
        <button className="menu-toggle" onClick={() => document.getElementById('main-nav').classList.toggle('show')}>
          ☰
        </button>
      </header> */}

      {/* <nav id="main-nav">
        <a href="index.html">Home</a>
        <a href="collections.html">Arts Collections</a>
        <a href="exhibitions.html" className="active">Exhibitions/Events</a>
        <a href="visit.html">Visit & Offline Stores</a>
        <a href="cart.html">Cart</a>
        <a href="profile.html">Profile</a>
      </nav> */}

      <section className="video-hero">
        <video autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="slideshow-text" id="slideshow">
          <h2>Welcome to legARTsy Events</h2>
          <p>Experience the finest blend of tradition and innovation through curated exhibitions.</p>
        </div>
      </section>

      <main>
        {/* Event 1 */}
        <article className="event-article">
          <h3>Spring Sculpture Showcase</h3>
          <p><strong>Date:</strong> July 15 - July 30, 2025</p>
          <p>Explore new sculpture pieces from renowned artists, featuring emerald tones and timeless themes.</p>
          <img src={eventImg1} height="500" width="150" alt="People viewing sculptures" />

          <div className="artist-info">
            <h4>Featured Artist: Elena Rivera</h4>
            <p>Elena is a contemporary sculptor blending classical forms with environmental storytelling.</p>
          </div>

          <button onClick={() => purchaseArt('Spring Sculpture Showcase')}>Book Tickets</button>
        </article>

        {/* Event 2 */}
        <article className="event-article">
          <h3>Legacy Art Festival</h3>
          <p><strong>Date:</strong> August 10 - August 20, 2025</p>
          <p>A celebration of art that tells stories and creates lasting legacies. Workshops and artist talks included.</p>
          <img src={eventImg2} height="500" width="150" alt="Art admirers at event" />

          <div className="artist-info">
            <h4>Featured Artist: Malik Thompson</h4>
            <p>Malik uses historical influences and modern mediums to explore generational memory through art.</p>
          </div>

          <button onClick={() => purchaseArt('Legacy Art Festival')}>Book Tickets</button>
        </article>

        {/* Event 3 */}
        <article className="event-article">
          <h3>Royal Paintings Exhibition</h3>
          <p><strong>Date:</strong> September 5 - September 25, 2025</p>
          <p>Featuring exquisite paintings with a royal touch, perfect for collectors and art lovers.</p>
          <img src={eventImg3} height="500" width="150" alt="Visitors exploring paintings" />

          <div className="artist-info">
            <h4>Featured Artist: Sophia Bennett</h4>
            <p>With a baroque soul and modern palette, Sophia reimagines aristocratic elegance on canvas.</p>
          </div>

          <button onClick={() => purchaseArt('Royal Paintings Exhibition')}>Book Tickets</button>
        </article>
      </main>

      {/* <footer>&copy; 2025 legARTsy. All rights reserved.</footer> */}
    </div>
  );
}

export default Exhibitions;
