import React from 'react';
import '../styles/Collections.css';

import Image1 from '../assests/Images/Emerald Vision.avif';
import Image2 from '../assests/Images/Legacy Stroke.jpg';
import Image3 from '../assests/Images/Mystic Flow.jpeg';
import Image4 from '../assests/Images/Stone Grace.jpg';

import { useCart } from '../context/CartContext'; // ✅ Import useCart

function Collections() {
  const { addToCart } = useCart(); // ✅ Use context

  const buyNow = (item) => alert(`Proceeding to buy ${item}`);

  return (
    <section className="collections-page">
      <div className="collections-header">
        <h2>Explore Our Art Collections</h2>
        <p className="subtext">Discover timeless pieces handpicked for art lovers</p>
      </div>

      <div className="art-collection-grid">
        <div className="art-card">
          <img src={Image1} alt="Emerald Vision" />
          <div className="info">
            <h3>Emerald Vision</h3>
            <p>Emerald Vision Arts is dedicated to nature-inspired Artworks</p>
            <button onClick={() => buyNow('Emerald Vision')}>Buy Now</button>
          </div>
        </div>

        <div className="art-card">
          <img src={Image2} alt="Legacy Stroke" />
          <div className="info">
            <h3>Legacy Stroke</h3>
            <p>Art that tells a story beyond the canvas.</p>
            <button onClick={() => buyNow('Legacy Stroke')}>Buy Now</button>
          </div>
        </div>

        <div className="art-card">
          <img src={Image3} alt="Mystic Flow" />
          <div className="info">
            <h3>Mystic Flow</h3>
            <p>An abstract journey in motion.</p>
            <button onClick={() => buyNow('Mystic Flow')}>Buy Now</button>
          </div>
        </div>

        <div className="art-card">
          <img src={Image4} alt="Stone Grace" />
          <div className="info">
            <h3>Stone Grace</h3>
            <p>An elegant sculpture carved with passion.</p>
            <button onClick={() => buyNow('Stone Grace')}>Buy Now</button>
          </div>
        </div>
      </div>

      {/* Collection Section 1 */}
      <section id="emerald-vision" className="collection-section">
        <h2>Emerald Vision Collection</h2>
        <div className="product-card">
          <img src={Image1} alt="Emerald Forest Canvas" />
          <div className="details">
            <h3>Emerald Forest Canvas</h3>
            <p><strong>Artist:</strong> Lara Greenscape</p>
            <p><strong>Description:</strong> Inspired by the deep jungles of Kerala, this nature-themed canvas breathes tranquility.</p>
            <p><strong>Price:</strong> 350</p>
            <p><strong>Copies Available:</strong> 3</p>
            <p><strong>Original:</strong> Yes</p>
            <div className="action-buttons">
              <button onClick={() => addToCart({
                title: 'Emerald Forest Canvas',
                image: Image1,
                price: 350,
              })}>
                Add to Cart
              </button>
              <button onClick={() => buyNow('Emerald Forest Canvas')}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section 2 */}
      <section id="legacy-stroke" className="collection-section">
        <h2>Legacy Stroke Collection</h2>
        <div className="product-card">
          <img src={Image2} alt="Timeless Heritage" />
          <div className="details">
            <h3>Timeless Heritage</h3>
            <p><strong>Artist:</strong> R. V. Naidu</p>
            <p><strong>Description:</strong> Depicts the lineage of artistic legacies from Indian temple murals to modern canvas.</p>
            <p><strong>Price:</strong> 420</p>
            <p><strong>Copies Available:</strong> 1 (Limited Edition)</p>
            <p><strong>Original:</strong> Yes</p>
            <div className="action-buttons">
              <button onClick={() => addToCart({
                title: 'Timeless Heritage',
                image: Image2,
                price: 420,
              })}>
                Add to Cart
              </button>
              <button onClick={() => buyNow('Timeless Heritage')}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section 3 */}
      <section id="mystic-flow" className="collection-section">
        <h2>Mystic Flow Collection</h2>
        <div className="product-card">
          <img src={Image3} alt="Waves of Infinity" />
          <div className="details">
            <h3>Waves of Infinity</h3>
            <p><strong>Artist:</strong> Priya Das</p>
            <p><strong>Description:</strong> Abstract curves and soft motion expressing the mystical nature of time and space.</p>
            <p><strong>Price:</strong> 290</p>
            <p><strong>Copies Available:</strong> 5</p>
            <p><strong>Original:</strong> No (Replica)</p>
            <div className="action-buttons">
              <button onClick={() => addToCart({
                title: 'Waves of Infinity',
                image: Image3,
                price: 290,
              })}>
                Add to Cart
              </button>
              <button onClick={() => buyNow('Waves of Infinity')}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section 4 */}
      <section id="stone-grace" className="collection-section">
        <h2>Stone Grace Collection</h2>
        <div className="product-card">
          <img src={Image4} alt="Silent Elegance" />
          <div className="details">
            <h3>Silent Elegance</h3>
            <p><strong>Artist:</strong> Dhruv Patel</p>
            <p><strong>Description:</strong> Hand-sculpted marble figure symbolizing stillness and peace, inspired by Indian deities.</p>
            <p><strong>Price:</strong> 800</p>
            <p><strong>Copies Available:</strong> 1</p>
            <p><strong>Original:</strong> Yes</p>
            <div className="action-buttons">
              <button onClick={() => addToCart({
                title: 'Silent Elegance',
                image: Image4,
                price: 800,
              })}>
                Add to Cart
              </button>
              <button onClick={() => buyNow('Silent Elegance')}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Collections;
