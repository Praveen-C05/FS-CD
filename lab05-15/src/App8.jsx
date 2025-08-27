

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App8.css";

const App8 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    program: "BCA",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });
      const data = await res.json();
      if (data.success) {
        // Registration successful, redirect to success page
        navigate("/success", { state: { name: data.name, message: data.message } });
      } else {
        // Show error message from backend
        setMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setMessage("Could not connect to server. Please try again later.");
    }
  };

  return (
    <div className="reg-container">
      <h2 className="reg-title">Student Registration Form</h2>
      <form className="reg-form" onSubmit={handleSubmit} autoComplete="off">
        <label>Name:</label>
        <input className="reg-input" type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Email:</label>
        <input className="reg-input" type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Program:</label>
        <select className="reg-input" name="program" value={form.program} onChange={handleChange} required>
          <option value="BCA">BCA</option>
          <option value="BCom">BCom</option>
          <option value="BCS">BCS</option>
        </select>

        <label>Password:</label>
        <input className="reg-input" type="password" name="password" value={form.password} onChange={handleChange} required />

        <button className="reg-btn" type="submit">Register</button>
      </form>
  {/* Show error or info message below the form */}
  {message && <div className="reg-message" style={{ color: 'red', marginTop: '1em' }}>{message}</div>}
    </div>
  );
};

export default App8;
