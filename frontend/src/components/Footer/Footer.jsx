import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-content">
                <h2>Connect with Us</h2>
                <div className="social-icons">
                    {/* Add your social media icons here */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <p>&copy; 2023 Cart-B inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;