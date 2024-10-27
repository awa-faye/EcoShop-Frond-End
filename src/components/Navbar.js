import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser , FaSearch} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">EcoShop</Link>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Rechercher un produit..." />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="navbar-icons">
          <Link to="/favorites" className="icon"><FaHeart /></Link>
          <Link to="/ShoppingCart" className="icon"><FaShoppingCart /></Link>
          <Link to="/profile" className="icon"><FaUser /></Link>
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/products">Nos Produits</Link>
        <Link to="/ShoppingCart">Mon Panier</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
