import React, { useState } from "react";
import "./Services1.css";

const Services1 = () => {
  const [tooltip, setTooltip] = useState(null);

  const skills = [
    { name: "Skill-honing Workshops", description: "Skill-honing workshops are designed to help you enhance your expertise through hands-on learning and practical exercises. These workshops cover various topics, providing valuable insights and real-world applications to boost your proficiency." },
    { name: "Invaluable Internships", description: "Invaluable internships provide hands-on experience in real-world industry settings, allowing you to apply theoretical knowledge to practical scenarios. These opportunities help build essential skills, enhance your resume, and improve job readiness." },
    { name: "Career Counseling and Guidance", description: "Career counseling and guidance offer personalized mentorship to help you identify your strengths, explore career options, and make informed decisions. It provides expert advice on career paths, skill development, and job opportunities tailored to your goals." },
    { name: "Mock Interview Mastery", description: "Mock Interview Mastery provides realistic interview simulations to help you practice answering questions confidently. These sessions enhance your communication skills, reduce anxiety, and prepare you for real job interviews." },
    { name: "Industry-Recognized Certifications", description: "Industry-recognized certifications validate your skills and expertise, making you stand out to employers. They enhance your resume, improve job prospects, and demonstrate your commitment to professional growth." },
    { name: "Dedicated Placement Assistance", description: "Dedicated Placement Assistance provides guidance and resources to help you secure job opportunities in top companies. It includes resume building, interview preparation, and direct connections with potential employers." },
    { name: "Lifelong Support and Alumni Engagement", description: "Lifelong Support and Alumni Engagement offer ongoing mentorship, career advice, and networking opportunities. Stay connected with industry professionals and peers to enhance your career growth and explore new opportunities." }
  ];

  return (
    <div className="circle-container">
      <div className="circle-left">
        <div className="circle-design"></div>
      </div>
      <div className="circle-right">
        <h1>Circle of Transformation</h1>
        <p>
          Enter the Circle of Transformation at ELEVARE CONNECT SOLUTIONS LLP, where your career aspirations take flight...
        </p>
        <ul>
          {skills.map((skill, index) => (
            <li
              key={index}
              onMouseEnter={() => setTooltip(skill.description)}
              onMouseLeave={() => setTooltip(null)}
            >
              <strong>{skill.name}:</strong> {tooltip === skill.description ? <span className="tooltip">{skill.description}</span> : null}
            </li>
          ))}
        </ul>
        <p>
          Join the Circle of Transformation today and unlock a world of possibilities for career advancement and personal growth.
        </p>
      </div>
    </div>
  );
};

export default Services1;
