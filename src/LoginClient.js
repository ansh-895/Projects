import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesc.css"; // Import CSS file

export default function LoginClient() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password.");
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

      <form onSubmit={handleSubmit}>
        <label htmlFor="username"><b>Username</b></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
