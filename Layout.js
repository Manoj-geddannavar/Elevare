import React from 'react';
import Footer from './Footer';
import Header from './Header'; // If you have a header

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
