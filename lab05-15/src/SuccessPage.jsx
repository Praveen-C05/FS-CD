import React from "react";
import "./App8.css";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const { name = "Student", message = "" } = location.state || {};

  return (
    <div className="reg-container">
      <h2 className="reg-title">{message || `Welcome to Full Stack, ${name}!`}</h2>
      <p className="reg-message">You have successfully registered.</p>
      <p className="reg-message">We will contact you soon.</p>
      <p className="reg-message">Thank you for showing the interest.</p>
    </div>
  );
};

export default SuccessPage;
