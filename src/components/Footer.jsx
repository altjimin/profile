import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Несіпбай Алтынай. All rights reserved.
        </p>
        <p className="footer-text">
          Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;

