import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext'; 
import '../App.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const products = await response.json();
        const selectedProduct = products.find((p) => p.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage('Produit ajouté au panier avec succès !'); 

    
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
      Retour aux produits
      </button>
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} className="product-image-detail" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-price">{product.price} FCFA</p>
          <p className="product-description">{product.description}</p>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < product.rating ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
          Ajouter au panier
          </button>
          {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
