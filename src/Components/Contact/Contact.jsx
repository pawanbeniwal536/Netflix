import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <>
      <section className="contact-section">-

        <div className="container">
          <h1>Contact Us</h1>
          <p>If you have any questions or feedback, please feel free to get in touch with us using the form below:</p>
          <form action="#" method="POST" className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>Contact Information</h3>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: +918941003775</p>
            <p>Address: Kosikalan , Mathura (281403), UttarPradesh, India</p>
          </div>
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kuldeep-kaushik-a57698258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;