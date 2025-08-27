import React from "react";
import { Link } from "react-router-dom";
import "./App10.css";

const programList = [
  { name: "Lab 1", path: "/lab01.html", desc: "Stopwatch App (HTML/JS)" },
  { name: "Lab 2", path: "/lab02.html", desc: "Simple Calculator (HTML/JS)" },
  { name: "Lab 3", path: "/lab03.html", desc: "JSON to Dynamic UI (HTML/JS)" },
  { name: "Lab 4", path: "/lab04.html", desc: "Random Quote Generator (HTML/JS)" },
  { name: "App 5", path: "/app5", desc: "Student Profiles (React)" },
  { name: "App 6", path: "/app6", desc: "Student Directory with Search (React)" },
  { name: "App 7", path: "/app7", desc: "Multi-page Demo with Router (React)" },
  { name: "App 8", path: "/app8", desc: "Student Registration Form (React)" },
  { name: "App 9", path: "/app9", desc: "Fetch Student Profile (React/MongoDB)" },
  { name: "Success Page", path: "/success", desc: "Registration Success (React)" }
];

const HomePage = () => {
  return (
    <div className="app10-container">
      <h2 className="app10-title">Welcome! Explore All Lab & App Programs</h2>
      <div className="app10-grid">
        {programList.map((prog, idx) => {
          const CardContent = (
            <div className="app10-card">
              <button className="app10-btn">{prog.name}</button>
              <div className="app10-desc">{prog.desc}</div>
            </div>
          );
          return prog.path.endsWith(".html") ? (
            <a
              key={idx}
              href={prog.path}
              target="_blank"
              rel="noopener noreferrer"
              className="app10-link"
            >
              {CardContent}
            </a>
          ) : (
            <Link
              key={idx}
              to={prog.path}
              className="app10-link"
            >
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
