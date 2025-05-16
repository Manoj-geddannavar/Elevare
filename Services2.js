import React, { useState } from "react";
import "./Services2.css";

const Services2 = () => {
  const [tooltip, setTooltip] = useState(null);

  const services = [
    {
      title: "In-depth Skills Enhancement Workshops",
      content: "In-depth Skills Enhancement Workshops are focused sessions designed to help you significantly improve specific abilities. They go beyond basic overviews, providing detailed instruction, hands-on practice, and personalized feedback to accelerate your skill development."
    },
    {
      title: "Personalized Career Coaching",
      content: "Personalized career coaching is a one-on-one partnership where a coach helps you define your career goals, identify your strengths and weaknesses, and develop a plan to achieve your aspirations. It provides tailored guidance and support to navigate your career path, whether you're seeking a new job, aiming for a promotion, or exploring a career change."
    },
    {
      title: "Access to Premium Development Resources",
      content: "Access to premium development resources means you get access to high-quality materials and tools designed to boost your skills and knowledge. These might include exclusive online courses, expert-curated content, industry-leading software, personalized mentorship, or networking opportunities, all aimed at accelerating your professional growth."
    },
    {
      title: "Mock Interviews & Resume Refinement",
      content: "Mock interviews simulate real job interviews, providing valuable practice and feedback to improve your interviewing skills. Resume refinement involves reviewing and improving your resume to make it more impactful and tailored to specific job applications, highlighting your relevant skills and experience."
    },
    {
      title: "Exclusive Networking Opportunities",
      content: "Exclusive networking opportunities provide access to a select group of professionals, often within a specific industry or field. These events or platforms facilitate connections, mentorship, and potential career advancements beyond typical networking events, offering a more targeted and valuable experience."
    }
  ];

  return (
    <div className="services-container">
      <div className="content-left">
        <h1>Ignite Your Career with ELEVARE CONNECT Solutions LLP's Advancement Program</h1>
        <p>
          Elevate your career trajectory with our comprehensive Advancement Program. Designed to equip you with the skills and
          knowledge needed to thrive in today's dynamic job market, we offer a holistic approach to professional development.
        </p>
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              onMouseEnter={() => setTooltip(service.content)}
              onMouseLeave={() => setTooltip(null)}
            >
              <strong>{service.title}:</strong> {tooltip === service.content ? <span className="tooltip">{service.content}</span> : null}
            </li>
          ))}
        </ul>
        <p>
          Don't let your career stagnate. Take control of your professional future with ELEVARE CONNECT Solutions LLP's
          Advancement Program. Join us today and embark on a journey of unparalleled growth and success.
        </p>
      </div>
      <div className="image1-right"></div>
    </div>
  );
};

export default Services2;
