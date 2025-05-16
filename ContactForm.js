import React from "react";
import "./ContactForm.css";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted: {}", data);
    const form = document.createElement('form');
    Object.keys(data).forEach(key => {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      input.setAttribute('value', data[key]);
      form.appendChild(input);
    });

    emailjs.sendForm('service_ssezxbm', 'template_bnsn87j', form, 'ubz9bcdwQHv7UC5lk')
      .then((result) => {
        console.log(result.text);
        alert('Application submitted successfully!');
        reset(); // Clear the form
      }, (error) => {
        console.log(error.text);
        alert('Failed to submit application. Please try again.');
      });
  };

  return (
    <div className="contact-form-container">
      <div className="form-section">
        <h2 className="form-title">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name*
            <input
              type="text"
              {...register("ca", { required: "Name is required" })}
              placeholder="Enter name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </label>

          <label>
            Email*
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email address"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </label>

          <label>
            Telephone*
            <input
              type="tel"
              {...register("telephone", { required: "Telephone is required" })}
              placeholder="Telephone"
            />
            {errors.telephone && (
              <p className="error">{errors.telephone.message}</p>
            )}
          </label>

          <label>
            Subject
            <input
              type="text"
              {...register("subject")}
              placeholder="Enter subject"
            />
          </label>

          <label>
            Message
            <textarea
              {...register("message", { 
                minLength: {
                  value: 20,
                  message: "Message should be at least 20 characters.",
                },
              })}
              placeholder="Enter message"
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </label>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="cancel-btn" onClick={() => reset()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="address-section">
        <h3>Address Info</h3>
        <p>Plot Number- 2B Karur Industrial Area
        PB Road, 06 Davanagere, Karnataka 577006</p>
        <p>Telephone: +91 7975745305</p>
        <p>Enquiries: +91 96061 25868</p>
        <p>Email: elevareconnectllp@gmail.com</p>
        <div className="map-container">
         
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
