// components/common/Footer.jsx
import React from 'react';
import '../../assets/styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/designs-by-kate" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kate-pospiech-3b8846290/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/hadzinskak/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://docs.google.com/document/d/1Jlj1cOzSmFUTdpT2a4lPsVtqIV6q6tRQ4vbNOztjJhI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-file-text"></i>
        </a>
      </div>
      <p>&copy; 2024 Kate's Portfolio</p>
    </div>
  </footer>
  );
};

export default Footer;
