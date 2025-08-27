import './App7.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Component with Hero and Welcome Message
const Home = () => (
  <div className="app7-hero">
    <div className="app7-hero-content">
      <h1 className="app7-hero-title">Welcome to Full Stack Etch Centre</h1>
      <p className="app7-hero-desc">
        Empowering your journey with holistic learning and support. Discover our
        services and connect with us today!
      </p>
    </div>
  </div>
);

// About Component
const About = () => (
  <div className="app7-card">
    <div className="app7-info">
      <div className="app7-name">About Us</div>
      <div className="app7-major">
        This app demonstrates React Router DOM with multiple pages.
      </div>
    </div>
  </div>
);

// Contact Component
const Contact = () => (
  <div className="app7-card">
    <div className="app7-info">
      <div className="app7-name">Contact Us</div>
      <div className="app7-major">Email: support@example.com</div>
    </div>
  </div>
);

// App Component with Router
const App = () => {
  return (
    <Router>
      <div className="app7-container">
        {/* Navbar */}
        <nav className="app7-navbar">
          <Link to="/" className="app7-navlink">
            Home
          </Link>
          <Link to="/about" className="app7-navlink">
            About
          </Link>
          <Link to="/contact" className="app7-navlink">
            Contact
          </Link>
        </nav>
        <div className="app7-grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
