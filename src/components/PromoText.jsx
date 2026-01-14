import React from 'react';
import './PromoText.css';

const PromoText = () => {
  const text = " НАПИШИ МНЕ И ПОЛУЧИ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ";
  
  return (
    <div className="promo-text-container">
      <div className="promo-text-wrapper">
        <span className="promo-text-content">{text}</span>
        <span className="promo-text-content">{text}</span>
      </div>
    </div>
  );
};

export default PromoText;

