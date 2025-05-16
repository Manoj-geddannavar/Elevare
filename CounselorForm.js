import React from 'react';
import './CounselorForm.css';
import emailjs from '@emailjs/browser';

const CounselorForm = () => {
  emailjs.sendForm('service_0xaw0pp', 'template_822yqve', e.traget, 'pOBhDTJ1483fwX7Rv')
  return (
    <div className="counselor-container">
      <div className="counselor-content">
        <h1>SPEAK TO OUR COUNSELLOR NOW!</h1>
        <p>
          Take the first step to start your career! Join Vishistaa - The best computer
          Education Institute in Davangere. Talk to our counsellor to know more about
          the course and placement details.
        </p>
        <form className="counselor-form">
          <label>
            Full Name*
            <input type="text" name="fullName" placeholder="Your full name" />
          </label>
          <label>
            Your email*
            <input type="email" name="email" placeholder="Your email address" />
          </label>
          <label>
            Mobile Number*
            <input type="tel" name="mobileNumber" placeholder="Mobile Number" />
          </label>
          <button type="submit">Request for a call back</button>
        </form>
      </div>
      <div className="counselor-image">
        <img src="\images\form.jpeg" alt="" />
      </div>
    </div>
  );
};

export default CounselorForm;
