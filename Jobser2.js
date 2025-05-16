import React, { useState } from "react";
import "./Jobser2.css";

const Jobser2 = () => {
  const [tooltip, setTooltip] = useState(null);

  const topics = [
    { name: "C & C++", description: "C and C++ are foundational programming languages used in system programming, game development, and high-performance applications." },
    { name: "Java Full Stack", description: "Java Full Stack development involves backend and frontend development using technologies like Spring Boot, Hibernate, Angular, or React." },
    { name: "Python Full Stack", description: "Python Full Stack covers backend frameworks like Django or Flask and frontend libraries like React or Vue.js." },
    { name: "Data Structures", description: "Data Structures like arrays, linked lists, stacks, and trees are fundamental to efficient algorithm design and software performance." },
    { name: "Embedded Systems", description: "Embedded Systems involve programming microcontrollers and developing firmware for hardware applications like IoT and robotics." },
    { name: "VLSI", description: "Very Large Scale Integration (VLSI) deals with designing and fabricating integrated circuits and semiconductor devices." },
    { name: "CATIA V5", description: "CATIA V5 is a powerful CAD software used for designing complex mechanical and aerospace systems." },
    { name: "Engineering Design Training", description: "This covers training in CAD, simulation, and manufacturing tools to design and analyze engineering products." }
  ];

  return (
    <div className="services-container">
      <div className="content-left">
        <h1>Our Engineering Training Programs</h1>
        <p>
          Elevate your engineering skills with specialized domain expertise development programs designed to bridge the gap between academics and industry demands.
        </p>
        <ul>
          {topics.map((topic, index) => (
            <li
              key={index}
              onMouseEnter={() => setTooltip(topic.description)}
              onMouseLeave={() => setTooltip(null)}
            >
              <strong>{topic.name}:</strong> {tooltip === topic.description ? <span className="tooltip">{topic.description}</span> : null}
            </li>
          ))}
        </ul>
        <p>
          Ready to gain hands-on experience and industry-relevant skills? Join us today and take your engineering career to new heights!
        </p>
      </div>
    </div>
  );
};

export default Jobser2;
