import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2023 <span style={{ color: "#ff7f00" }}>Cart-B</span>  inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;