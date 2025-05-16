import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);
  const contentRefs = useRef([]);

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  useEffect(() => {
    if (activeSection !== null) {
      const content = contentRefs.current[activeSection];
      if (content) {
        const words = content.textContent.split(" ");
        content.textContent = ""; // Reset content initially

        words.forEach((word, index) => {
          setTimeout(() => {
            content.textContent += word + " "; // Append each word with delay
          }, index * 80);
        });
      }
    }
  }, [activeSection]);

  const sections = [
    {
      title: "Who We Are",
      content:
      "Founded by PES University alumni, Elevare Connect Solutions is driven by excellence, innovation, and integrity. We empower growth through tailored training programs, fostering skill enhancement and adaptability to meet the challenges of a dynamic world.",
    },
    {
      title: "What We Do",
      content:
      "Elevare Connect Solutions LLP is a skill development startup dedicated to bridging the gap between education and practical application. We offer innovative, customized training solutions for individuals, corporates, and institutions, focusing on experiential learning and real-world results.",
    },
    {
      title: "Our Mission",
      content:
        "To empower individuals and organizations by providing innovative digital solutions that enhance learning and skill development. We are committed to delivering tools and platforms that facilitate effective knowledge transfer and professional growth.",
    },
    {
      title: "Our Vision",
      content:
        "Our mission is to empower individuals and organizations through innovative digital solutions that enhance learning and skill development. We are committed to delivering tools and platforms that facilitate effective knowledge transfer and foster professional growth."    },
  ];

  return (
    <div className="about-us-container">
      <div className="about-grid">
        <div className="about-row">
          {sections.slice(0, 2).map((section, index) => (
            <div
              key={index}
              className="about-box"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className={`about-title ${activeSection === index ? "active" : ""}`}>
                {section.title}
              </h2>
              <p
                className={`about-text ${activeSection === index ? "visible" : "hidden"}`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
        <div className="about-row">
          {sections.slice(2).map((section, index) => (
            <div
              key={index + 2}
              className="about-box"
              onMouseEnter={() => handleMouseEnter(index + 2)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className={`about-title ${activeSection === index + 2 ? "active" : ""}`}>
                {section.title}
              </h2>
              <p
                className={`about-text ${activeSection === index + 2 ? "visible" : "hidden"}`}
                ref={(el) => (contentRefs.current[index + 2] = el)}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
