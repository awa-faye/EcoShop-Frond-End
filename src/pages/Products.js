import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import '../App.css';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const productsWithLikeStatus = data.map((product) => ({ ...product, liked: false }));
        setProducts(productsWithLikeStatus);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleLike = (productId) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, liked: !product.liked } : product
    ));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: 20 }}>Accueil / Nos Produits</h2>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image1" />
            <h3 className="product-name">{product.name}</h3>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < product.rating ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
            <p className="product-price">{product.price} FCFA</p>
            <p className="product-description">{product.description}</p>
            <button className="view-button" onClick={() => navigate(`/product/${product.id}`)}>
              Voir le produit
            </button>
            <div className="heart-icon" onClick={() => toggleLike(product.id)}>
              <FaHeart style={{ color: product.liked ? 'red' : '#ffc107' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
