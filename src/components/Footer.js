import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contactez-nous</h4>
        <p>Phone: +221 77 234 56 78</p>
        <p>Email: support@ecoshop.com</p>
      </div>
      <div className="footer-section">
        <h4>Information</h4>
        <Link to="/about">À propos de nous</Link>
        <Link to="/privacy-policy">politique de confidentialité</Link>
        <Link to="/terms">Conditions générales</Link>
      </div>
      <div className="footer-section">
        <h4>Compte</h4>
        <Link to="/profile">Mon compte</Link>
        <Link to="/orders">Historique des commandes</Link>
        <Link to="/favorites">Favoris</Link>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <Link to="/products">Produits</Link>
        <Link to="/offers">Offres spéciales</Link>
        <Link to="/help">Centre d'aide</Link>
      </div>
    </footer>
  );
}

export default Footer;
