import React from 'react';
import Footer from './Footer';  // Assuming you have the footer component imported
import ContactForm from './ContactForm';  // Import the ContactForm

const PageLayout = () => {
  return (
    <div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PageLayout;
