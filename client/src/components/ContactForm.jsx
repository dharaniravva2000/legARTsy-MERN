import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await axios.post("http://localhost:3001/api/contact", formData);
      setResponseMsg({ type: 'success', text: res.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setResponseMsg({ type: 'error', text: err.response?.data?.message || "Failed to send enquiry" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-wrapper">
        {/* Left: Contact Info and Map */}
        <div className="contact-info">
          <p><strong>Address:</strong> 85 New Hall Street, Birmingham, B31DA</p>
          <p><strong>Phone:</strong> +44 1234 567890</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.4007997650483!2d-1.9057986840532458!3d52.48269204312974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc9b31583f3d%3A0xcaf92e0fd71cd5fc!2s85%20Newhall%20St%2C%20Birmingham%20B3%201DA%2C%20UK!5e0!3m2!1sen!2suk!4v1717659811614!5m2!1sen!2suk"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            rows="4"
            placeholder="Your Enquiry"
            value={formData.message}
            required
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>

          {responseMsg && (
            <p
              style={{
                marginTop: '1rem',
                color: responseMsg.type === 'success' ? 'green' : 'red',
              }}
            >
              {responseMsg.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
