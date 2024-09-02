import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate form submission
    console.log('Form submitted');
    
    // Show popup
    setShowPopup(true);

    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // Clear form fields (optional)
    event.target.reset();
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      {showPopup && (
        <div className="popup">
          Message sent successfully!
        </div>
      )}

      <div className="resume-section">
        <a href="/SIVA PRAKASH_K.pdf" download className="resume-link">
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
