import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="training-container">
      <div className="training-program">
        <Link to="/institutional-training">
          <div className="icon institutional"></div>
          <h3>Institutional Training Programs</h3>
          </Link>
          <p>Education and academic excellence</p>
        
      </div>
      <div className="training-program">
        <Link to="/corporate-training">
          <div className="icon corporate"></div>
          <h3>Corporate Training Programs</h3>
          </Link>
          <p>Enhancing professional skills</p>
        
      </div>
      <div className="training-program">
        <Link to="/skill-development">
          <div className="icon skills"></div>
          <h3>Skill Development Program</h3>
          </Link>
          <p>Building and honing skills</p>
        
      </div>
      <div className="training-program">
        <Link to="/employment-readiness">
          <div className="icon employment"></div>
          <h3>Employment Readiness Training</h3>
          </Link>
          <p>Preparing for the job market</p>
        
      </div>
    </div>

  );
};

export default Services;
