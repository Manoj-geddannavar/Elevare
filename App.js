import React from "react";
import Navbar from "./Components/Navbar";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import WhyElevare from "./Components/WhyElevare";
import Services from "./Components/Services";
import Services1 from "./Components/Services1";
import Services2 from "./Components/Services2";
import Soservices from "./Components/Soservices";
import Clients from "./Components/Clients";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Coservices2 from "./Components/Coservices";
import Jobser from "./Components/Jobser";
import Jobser2 from "./Components/Jobser2";
import Careers from "./Components/Careers";
import TrainerDetails from "./Components/TrainerDetails";
import SalesDetails from "./Components/SalesDetails";
import OperationDetails from "./Components/OperationDetails";
import InternshipDetails from "./InternshipDetails";
/**
 * The main application component. It renders the navigation bar, content, and footer.
 * It uses React Router to handle different routes and components.
 *
 * @returns {JSX.Element} - The rendered application component.
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="home" />} />
              <Route path="home" element={<><Home /><WhyElevare /><Clients /></>} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
              <Route path="contactform" element={<ContactForm />} />
              <Route path="careers" element={<Careers />} />
              <Route path="trainer" element={<TrainerDetails />} />
              <Route path="institutional-training" element={<><Services1 /><Services2 /></>} />
              <Route path="skill-development" element={<Soservices />} />
              <Route path="employment-readiness" element={<><Jobser /><Jobser2 /></>} />
              <Route path="corporate-training" element={<Coservices2 />} />
              <Route path="sales" element={<SalesDetails />} />
              <Route path="operations" element={<OperationDetails />} />
              <Route path="internship" element={<InternshipDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
