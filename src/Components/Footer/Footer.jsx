import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>You can see online all programs , webseries and top movies on our netflix website . for more information please contact to us</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: kauldeepkaushik@gmail.com</p>
          <p>Phone: +918941003775</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
         <a href="https://www.linkedin.com/in/kuldeep-kaushik-a57698258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p>LinkedIn</p></a>
<a href="https://www.facebook.com/profile.php?id=100016566433752&mibextid=LQQJ4d"><p>FaceBook</p></a>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Netflix Clone</p>
      </div>
    </footer>
  );
};

export default Footer;
