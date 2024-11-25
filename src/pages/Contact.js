// Contact.js
import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS file for styling

const Contact = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <section className="contact-info">
        <h2 className="section-title">Reach Out to Us</h2>
        <p className="section-description">
          If you have any questions, feedback, or need assistance, feel free to reach out using the form below. 
          We're here to help!
        </p>

        <div className="contact-details">
          <ul>
            <li>Email: <a href="mailto:contact@cprogrammingtutorial.com">contact@cprogrammingtutorial.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
            <li>Address: 123 C Programming Street, Code City, CS 12345</li>
          </ul>
        </div>
      </section>

      <section className="contact-form">
        <h2 className="section-title">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="Your Full Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Your Email Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              placeholder="Your message here..." 
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>

      <section className="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I get help with my C programming questions?</h3>
          <p>You can either reach out through the contact form or email us directly. We respond within 24-48 hours.</p>
        </div>
        <div className="faq-item">
          <h3>Is there any paid content on this site?</h3>
          <p>No, this tutorial is completely free! All content is open to everyone.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
