import React from 'react';
import '../styles/visit.css'; // Ensure you have the styles
import Store1 from '../assests/Images/Store1.jpg'
import Store2 from '../assests/Images/Store2.webp'

function Visit() {
  return (
    <main className="visit-page" style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h2 className="store-heading">Visit Our Offline Stores</h2>

      <div className="store-wrapper">
        <section className="store-section">
          <div className="store-image">
            <img src={Store1} alt="Birmingham Gallery Interior" />
          </div>
          <div className="store-info">
            <h3>Birmingham Gallery</h3>
            <p>85 New Hall Street, Birmingham, B31DA</p>
            <p>Open Monday to Saturday, 10am - 6pm</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.4007997650483!2d-1.9057986840532458!3d52.48269204312974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc9b31583f3d%3A0xcaf92e0fd71cd5fc!2s85%20Newhall%20St%2C%20Birmingham%20B3%201DA%2C%20UK!5e0!3m2!1sen!2suk!4v1717659811614!5m2!1sen!2suk"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Birmingham Gallery Location"
            ></iframe>
          </div>
        </section>

        <section className="store-section">
          <div className="store-image">
            <img src={Store2} alt="London Art Store Interior" />
          </div>
          <div className="store-info">
            <h3>London Art Store</h3>
            <p>10 King's Road, London, SW3 4UZ</p>
            <p>Open Tuesday to Sunday, 11am - 7pm</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19828.40511141755!2d-0.1664656!3d51.4898714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605338ff65223%3A0xc585a8f81a72bb27!2s10%20Kings%20Rd%2C%20London%20SW3%204UZ%2C%20UK!5e0!3m2!1sen!2suk!4v1717665000000!5m2!1sen!2suk"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="London Art Store Location"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Visit;
