import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset submitted status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions about your order or our services? We're here to help!</p>
      
      {submitted ? (
        <div className="success-message">
          <h3>Thank you for contacting us!</h3>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required 
              placeholder="Your Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required 
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
              placeholder="Your Phone Number (optional)"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              required 
              rows="4" 
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
      
      <div className="contact-info">
        <div className="contact-method">
          <h3>📞 Call Us</h3>
          <p>Customer Support: 1-800-FOOD-NOW</p>
          <p>Hours: 24/7</p>
        </div>
        
        <div className="contact-method">
          <h3>📧 Email Us</h3>
          <p>support@doorstep.com</p>
          <p>We typically respond within 24 hours</p>
        </div>
        
        <div className="contact-method">
          <h3>🏢 Headquarters</h3>
          <p>123 Delivery Street</p>
          <p>Foodville, FD 98765</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;