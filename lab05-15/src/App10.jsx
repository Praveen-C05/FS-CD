import React from "react";
import { Link } from "react-router-dom";
import "./App5.css";
import "./App6.css";
import "./App7.css";
import "./App8.css";
import "./App9.css";

const programList = [
  { name: "Lab 1", path: "/lab01.html" },
  { name: "Lab 2", path: "/lab02.html" },
  { name: "Lab 3", path: "/lab03.html" },
  { name: "Lab 4", path: "/lab04.html" },
  { name: "App 5", path: "/app5" },
  { name: "App 6", path: "/app6" },
  { name: "App 7", path: "/app7" },
  { name: "App 8", path: "/app8" },
  { name: "App 9", path: "/app9" },
  { name: "Success Page", path: "/success" }
];

const HomePage = () => {
  return (
    <div className="app9-container">
      <h2>All Lab & App Programs</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1.5rem",
        marginTop: "2rem"
      }}>
        {programList.map((prog, idx) => (
          prog.path.endsWith(".html") ? (
            <a
              key={idx}
              href={prog.path}
              target="_blank"
              rel="noopener noreferrer"
              className="app9-form"
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <button style={{ width: "100%" }}>{prog.name}</button>
            </a>
          ) : (
            <Link
              key={idx}
              to={prog.path}
              className="app9-form"
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <button style={{ width: "100%" }}>{prog.name}</button>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default HomePage;
