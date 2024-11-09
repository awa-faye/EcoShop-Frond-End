import React, { useState } from 'react';
import { useCart } from '../CartContext';
import '../styles/Contact.css';

function Contact() {
  const { cart } = useCart();
  

  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    phoneNumber: '',
    deliveryAddress: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="contact-page">
      <h1 className="contact-title">Adresse de livraison</h1>
      <div className="contact-form-container">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Numéro de téléphone"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="deliveryAddress"
                placeholder="Adresse de livraison"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="comment"
                placeholder="Commentaire"
                value={formData.comment}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

        <div className="cart-summary">
          <h2>Votre panier</h2>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">Price: {item.price} FCFA</span>
                  <span className="cart-item-quantity">Quantity: {item.quantity}</span>
                  <span className="cart-item-total">Total: {item.price * item.quantity} FCFA</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grand-total">
            <h3>Montant total : {grandTotal} FCFA</h3>
          </div>
        </div>
      </div>

     
      <div className="contact-actions">
        <button className="back-to-products-button" type="submit">
          Valider Votre commande
        </button>
      </div>
    </div>
  );
}

export default Contact;
