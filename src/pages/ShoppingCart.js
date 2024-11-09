import React from 'react';
import { useCart } from '../CartContext'; 
import { useNavigate } from 'react-router-dom';
import '../styles/ShoppingCart.css';

function ShoppingCart() {
  const { cart, updateQuantity, removeItem } = useCart(); 
  const navigate = useNavigate();


  const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-container">
      <h1>Mon panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">Price: {item.price} FCFA</span>
                  <div className="cart-item-quantity">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </div>
                  <span className="cart-item-total">Total: {item.price * item.quantity} FCFA</span>
                </div>
                <button className="remove-item-button" onClick={() => removeItem(item.id)}>
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Résumé de la commande</h2>
            <p>Total pour tous les articles: {grandTotal} FCFA</p>
            <button className="checkout-button" onClick={() => navigate('/contact')}>Passer à la caisse</button>
            <button className="back-to-products-button" onClick={() => navigate('/products')}>
            Retour aux produits
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
