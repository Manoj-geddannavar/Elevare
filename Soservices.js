import React, { useState } from "react";
import "./Services.css";

const Soservices = () => {
  const [tooltip, setTooltip] = useState(null);

  const trainingServices = [
    { title: "Technical Skills Development", description: "Enhance your technical expertise with our hands-on training in programming, IT infrastructure, cybersecurity, and emerging technologies." },
    { title: "Soft Skills Enhancement", description: "Develop essential workplace competencies like communication, teamwork, time management, and emotional intelligence to improve productivity and collaboration." },
    { title: "Sales & Customer Service Excellence", description: "Master sales techniques, customer engagement strategies, and negotiation skills to boost conversions and customer satisfaction." },
    { title: "Leadership & Management Development", description: "Learn effective leadership strategies, decision-making skills, and team management techniques to excel in managerial roles." },
    { title: "Entrepreneurship & Innovation", description: "Foster innovation and entrepreneurial thinking with insights into business development, market strategy, and startup management." },
    { title: "Professional Development", description: "Advance your career with training on personal branding, corporate etiquette, resume building, and interview preparation." }
  ];

  return (
    <div className="services-container">
      <div className="content-left">
        <h1><strong>ELEVARE CONNECT Solutions LLP: Empowering Growth Through Skill Development</strong></h1>
        <p>
          We are a leading provider of dynamic and impactful training solutions designed to empower individuals and organizations to achieve their full potential. Our expertise lies in delivering customized training programs that address the unique needs of today's evolving business landscape.
        </p>
        <h1><strong>Our Training Services</strong></h1>
        <ul>
          {trainingServices.map((service, index) => (
            <li
              key={index}
              onMouseEnter={() => setTooltip(service.description)}
              onMouseLeave={() => setTooltip(null)}
            >
              <strong>{service.title}:</strong> {tooltip === service.description ? <span className="tooltip">{service.description}</span> : null}
            </li>
          ))}
        </ul>
        <h1><strong>Ready to Invest in Your Future?</strong></h1>
        <p>
          Contact ELEVARE CONNECT Solutions LLP today to discuss your training needs and discover how our customized programs can help you achieve your business objectives.
        </p>
      </div>
      <div className="image-right"></div>
    </div>
  );
};

export default Soservices;
