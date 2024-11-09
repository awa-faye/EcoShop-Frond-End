import React, { useState, useEffect } from 'react';
import products from '../data/product';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel-container">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="carousel-item"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Shift to next image
          }}
        >
          <img src={product.image} alt={product.description} className="product-image" />
          <div className="overlay-text">
            <strong>Découvrez un nouveau niveau de soins avec EcoShop !</strong>
            <p>
            Plongez dans notre sélection soignée de produits essentiels naturels et biologiques, conçus pour améliorer votre bien-être tout en respectant la planète. </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
