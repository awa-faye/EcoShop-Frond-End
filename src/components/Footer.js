import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Phone: +123 456 789</p>
        <p>Email: support@ecoshop.com</p>
      </div>
      <div className="footer-section">
        <h4>Information</h4>
        <Link to="/about">About Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
      <div className="footer-section">
        <h4>Account</h4>
        <Link to="/profile">My Account</Link>
        <Link to="/orders">Order History</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <Link to="/products">Products</Link>
        <Link to="/offers">Special Offers</Link>
        <Link to="/help">Help Center</Link>
      </div>
    </footer>
  );
}

export default Footer;
