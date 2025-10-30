import React from 'react';
import '../styles/HeroSection.css';
import { vid } from '../assests';
// import rainVideo from '../assests/Videos/rain.mp4'

function HeroSection() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="bg-video">
        <source src={vid} type="video/mp4"/>
      </video>
      <div className="hero-content">
        <h2>Discover Art That Echoes Through Time</h2>
        <p>
          Hand-crafted sculptures, exquisite paintings, and personalized legacy pieces
          — each curated with royalty in every stroke.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
