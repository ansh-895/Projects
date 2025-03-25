import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesf.css"; // Import CSS

export default function LoginFreelancer() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("Password must be at least 8 characters long and contain at least 1 number.");
      return;
    }

    alert(`Welcome, ${username}!`);
    navigate("/portal"); // Redirect to Portal
  };

  return (
    <div className="container">
      <button id="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username"><b>Username</b></label>
        <input type="text" id="username" name="username" placeholder="Enter Username" required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" id="password" name="password" placeholder="Enter Password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
