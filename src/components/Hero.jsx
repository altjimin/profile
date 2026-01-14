import React from 'react';
import './Hero.css';

const Hero = () => {
  const smoothScroll = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.abs(distance / 0.7); // speed 0.7
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation
        const ease = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-year">2026</div>
        <h1 className="hero-title">
          ALTYNAY
        </h1>
        <p className="hero-subtitle">UI/UX DESIGNER</p>
        <p className="hero-description">
          Я создаю не только стильный дизайн, но и инструмент для бренда
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => smoothScroll('projects')}
          >
            ПОСМОТРЕТЬ РАБОТЫ
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => smoothScroll('contact')}
          >
            СВЯЗАТЬСЯ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

