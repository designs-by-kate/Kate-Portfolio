import React from 'react';
import logo from '../../assets/images/LogoBW.png';
import '../../assets/styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="title-container">
          <h1>Kate's Portfolio</h1>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

