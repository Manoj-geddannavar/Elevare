import React from "react";
import "./Home.css";
import welcomeImage from "./images/welcome-image.png"; // Replace with your image's actual path

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>
          <span>WELCOME TO</span> <span className="highlight">ELEVARE CONNECT SOLUTIONS LLP</span> <br />
          <span className="highlight">At ELEVARE</span>
        </h1>
        <p>
          We take pride in being a <strong>Customized Training Solution Provider</strong>, tailoring our programs to meet your specific needs.
          <br />
          Our approach is rooted in <strong>Experiential Learning</strong>, ensuring every session is engaging, practical, and transformative.
        </p>
      </div>
      <div className="image-section">
        <img src={welcomeImage} alt="Welcome Note" className="welcome-image" />
      </div>
    </div>
  );
};

export default Home;
