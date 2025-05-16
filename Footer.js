import React from 'react';
import './Footer.css'; // Make sure this CSS file exists
import Logo from './Logo'; // Import the Logo component
import { FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <Logo /> {/* Logo with tagline */}
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>WRITE TO US</h3>
            <p>elevareconnectllp@gmail.com</p>
            <p>Enquiries: +91 96061 25868</p>
            <p>Founder: 7975745305</p>
          </div>

          {/* Address Section */}
          <div className="footer-section">
            <h3>ADDRESS</h3>
            <p>Plot Number- 2B, Karur Industrial Area</p>
            <p>PB Road, 06, Davanagere, Karnataka 577006</p>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3>FOLLOW US</h3>
            <div className="footer-social">
              <a href="https://www.instagram.com/elever_connect_llp/profilecard/?igsh=ODAyc25td3AwcjU2" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/elevare-connect-solutions-llp/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@infoelevareconnect" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elevare Connect LLP. All Rights Reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/917975745305" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
