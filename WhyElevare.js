import React from "react";
import "./Whyelevare.css"; // For the CSS file

const WhyElevare = () => {
  return (
    <div className="container">
      <h1>
        Why <span>Elevare Connect Solutions</span>
      </h1>
      <div className="features">
        <div className="feature-box">
          <h3>Excellence</h3>
          <p>
            We strive for the highest standards in all our training programs and
            services, ensuring quality and value for our clients.
          </p>
        </div>
        
        <div className="feature-box">
          <h3>Customer Focus</h3>
          <p>
            Our client's success is our priority. We are dedicated to
            understanding their unique challenges and providing tailored
            solutions.
          </p>
        </div>
        <div className="feature-box">
          <h3>Innovation</h3>
          <p>
            We embrace new technologies and methodologies, continuously
            evolving our offerings to meet the changing needs of the industry.
          </p>
        </div>
        <div className="feature-box">
          <h3>Integrity</h3>
          <p>
            We conduct our business with honesty, transparency, and
            accountability, building trust with our clients and partners.
          </p>
        </div>
        <div className="feature-box">
          <h3>Collaboration</h3>
          <p>
            We believe in the power of teamwork, both within our organization
            and with our clients, to achieve the best outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyElevare;
