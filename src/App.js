import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 

export default function App() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  return (
    <div className="container">
      {/* Dark Mode Toggle */}
      <button id="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      <h1>Welcome!</h1>

      {/* Navigation Buttons */}
      <div className="button-container">
        <button onClick={() => navigate("/loginfreelancer")}>
          Login as a Freelancer
        </button>
        <button onClick={() => navigate("/signupfreelancer")}>
          Sign Up as a Freelancer
        </button>

        <button onClick={() => navigate("/loginclient")}>
          Login as a Client
        </button>
        <button onClick={() => navigate("/signupclient")}>
          Sign Up as a Client
        </button>
      </div>
    </div>
  );
}
