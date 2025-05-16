import React, { useState } from "react";
import "./Services1.css";

const Services1 = () => {
  const [tooltip, setTooltip] = useState(null);

  const trainingServices = [
    {
      name: "Technical Training",
      description:
        "Equip your workforce with cutting-edge technical skills in programming, networking, cybersecurity, and more to stay ahead in the competitive market.",
    },
    {
      name: "Soft Skills Training",
      description:
        "Develop essential communication, teamwork, and leadership skills to enhance workplace interactions and productivity.",
    },
    {
      name: "Sales and Customer Service Training",
      description:
        "Enhance sales techniques, customer relationship management, and service excellence to drive business growth and client satisfaction.",
    },
    {
      name: "Leadership Development",
      description:
        "Empower your managers and executives with leadership strategies, decision-making skills, and emotional intelligence for effective team management.",
    },
    {
      name: "Compliance Training",
      description:
        "Ensure adherence to industry regulations, corporate policies, and ethical standards through specialized compliance training programs.",
    },
    {
      name: "Professional Development",
      description:
        "Boost career growth with targeted professional development courses in time management, critical thinking, and strategic planning.",
    },
  ];

  return (
    <div className="services-container">
      <div className="content-left">
        <h1>
          <strong>Comprehensive Corporate Training Solutions</strong>
        </h1>
        <p>
          At ELEVARE CONNECT Solutions LLP, we specialize in providing comprehensive corporate training solutions tailored to meet the evolving needs of businesses across various industries. With a commitment to excellence and a focus on delivering measurable results, we offer a diverse range of training programs designed to enhance the skills, knowledge, and capabilities of professionals at all levels within organizations.
        </p>
        <h1>
          <strong>Our Corporate Training Services</strong>
        </h1>
        <ul>
          {trainingServices.map((service, index) => (
            <li
              key={index}
              onMouseEnter={() => setTooltip(service.description)}
              onMouseLeave={() => setTooltip(null)}
            >
              <strong>{service.name}:</strong>{" "}
              {tooltip === service.description && (
                <span className="tooltip">{service.description}</span>
              )}
            </li>
          ))}
        </ul>
        <h1>
          <strong>Get Started Today</strong>
        </h1>
        <p>
          Ready to take your team's performance to the next level? Contact us today to learn more about our corporate training services and how we can partner with you to achieve your organizational goals.
        </p>
      </div>
      <div className="image-right"></div>
    </div>
  );
};

export default Services1;
