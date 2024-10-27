import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import '../components/ProductCarousel.css';

function Home() {
  return (
    <div>
      <ProductCarousel />
      <div className="quality-text">
        <h2>Produits de qualité garantie</h2>
        <p>
          Nous sommes fiers de vous offrir une sélection de produits triés sur le volet, provenant de sources fiables et authentiques. Chez nous, la qualité est une priorité absolue. Chaque produit est soigneusement examiné pour garantir son authenticité et sa fiabilité. Vous pouvez faire vos achats en toute confiance, sachant que vous recevrez des produits de la plus haute qualité.
        </p>
        <p>
          Nous comprenons l'importance de la transparence et de la confiance lorsqu'il s'agit d'acheter en ligne. C'est pourquoi nous nous engageons à fournir des informations détaillées sur chaque produit, y compris son origine, ses matériaux et ses caractéristiques. Si vous avez des questions ou des préoccupations, n'hésitez pas à contacter notre équipe de support client dévouée. Nous sommes là pour vous aider et vous assurer une expérience d'achat agréable et sans souci.
        </p>
      </div>
    </div>
  );
}

export default Home;
