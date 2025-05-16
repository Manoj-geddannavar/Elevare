import React from 'react';
import './Logo.css'; // Create custom styling for the logo component
import logo from './images/logo.png'; // Path to the default logo

const Logo = ({ logoSrc = logo, tagline = "A Pathway to Your Dream Job" }) => {
  return (
    <div className="logo-container">
      <img src={logoSrc} alt="Elevare Logo" className="logo-img" />
      <p className="logo-tagline">{tagline}</p>
    </div>
  );
};

export default Logo;