import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo tagline={null} />
      </div>
      <ul className="navbar-links">
        <li><Link to="home">Home</Link></li>
        <li><Link to="AboutUs">About Us</Link></li>
        <li><Link to="Services">Services</Link></li>
        <li><Link to="contactForm">Contact Us</Link></li>
        <li><Link to="Careers">Careers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
