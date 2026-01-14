import React, { useState } from 'react';
import './InteractiveLamp.css';
import lampImage from '../assets/0829544867d71b8b17e142977c95d4e8-removebg-preview.png';

const InteractiveLamp = () => {
  const [isLampOn, setIsLampOn] = useState(false);

  const handleLampClick = () => {
    setIsLampOn(true);
  };

  return (
    <>
      {/* Dark/Fog overlay when lamp is off */}
      <div className={`lamp-overlay ${isLampOn ? 'lamp-on' : ''}`}>
        {!isLampOn && (
          <div className="lamp-prompt">
            <p>Нажмите на лампу чтобы увидеть портфолио</p>
            <span className="arrow-down">↓</span>
          </div>
        )}
      </div>

      {/* Warm light effect when lamp is on */}
      <div className={`warm-light ${isLampOn ? 'active' : ''}`}></div>

      {/* Interactive Lamp */}
      <div 
        className={`interactive-lamp ${isLampOn ? 'lit' : ''}`}
        onClick={handleLampClick}
      >
        <img src={lampImage} alt="Lamp" className="lamp-image" />
        <div className="lamp-glow"></div>
      </div>
    </>
  );
};

export default InteractiveLamp;
