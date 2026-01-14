import React from 'react';
import './AnimatedText.css';

const AnimatedText = () => {
  const text = " ПОСТЕРЫ + МОУШЕН + ДИЗАЙН + ПРЕЗЕНТАЦИИ + ЛОГОТИПЫ + SMM ДИЗАЙН + БРЕНДИНГ + UI/UX ";
  
  return (
    <div className="animated-text-container">
      <div className="animated-text-wrapper">
        <span className="animated-text-content">{text}</span>
        <span className="animated-text-content">{text}</span>
      </div>
    </div>
  );
};

export default AnimatedText;

