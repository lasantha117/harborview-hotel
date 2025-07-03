import React, { useState } from 'react';

const Contact = ({ showNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for reservations and inquiries</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Hotel Information</h3>
            <div className="contact-item">
              <strong>Address:</strong>
              <p>123 Harbor Drive<br />Coastal City, CA 90210</p>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>info@harborviewhotel.com</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
