import React, { useState } from "react";
import "./Jobser.css";

const Jobser = () => {
  const [tooltip, setTooltip] = useState(null);

  const services = [
    { name: "Technical Training", description: "Covers programming languages, software development, networking, and cybersecurity to equip professionals with in-demand technical skills." },
    { name: "Soft Skills Training", description: "Focuses on communication, teamwork, leadership, and emotional intelligence to enhance workplace effectiveness." },
    { name: "Verbal Ability", description: "Improves language proficiency, comprehension, and articulation skills for better communication in professional settings." },
    { name: "Logical Reasoning", description: "Develops problem-solving and analytical thinking skills crucial for decision-making and aptitude tests." },
    { name: "Quantitative Aptitude", description: "Enhances numerical problem-solving skills essential for business, finance, and competitive exams." }
  ];

  return (
    <div className="services-container">
      <div className="content-left">
        <h1>Our Corporate Training Services</h1>
        <p>
          ELEVARE CONNECT SOLUTIONS LLP is your partner in career advancement. We offer cutting-edge training programs in critical domains, designed to elevate your skills and open doors to new opportunities.
        </p>
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              onMouseEnter={() => setTooltip(service.description)}
              onMouseLeave={() => setTooltip(null)}
            >
              <strong>{service.name}:</strong> {tooltip === service.description ? <span className="tooltip">{service.description}</span> : null}
            </li>
          ))}
        </ul>
        <p>
          Ready to unlock the full potential of your workforce? Contact us today to schedule a consultation and explore how our customized training programs can help you achieve your business objectives.
        </p>
      </div>
    </div>
  );
};

export default Jobser;
  