import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./stylessignf.css"; // Import the same CSS file

export default function SignUpFreelancer() {
  // Dark Mode State (Stored in Local Storage)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // ✅ Fixed key name
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value, // ✅ Now correctly updates confirmPassword
    }));
  };

  // Form validation function
  const validate = () => {
    const { name, username, email, password, confirmPassword } = formData;

    if (!name || !username || !email || !password || !confirmPassword) {
      alert("Please fill all the fields!");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful! 🎉");
      navigate("/loginfreelancer"); // Redirect to Login as Freelancer Page
    }
  };

  return (
    <div className="container">
      {/* Dark Mode Toggle Button */}
      <button id="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Outer Box (Single outer + inner box) */}
      <div className="outer-box">
        <div className="inner-box">
          <h2 className="title">Freelancer Signup</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} required />

            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" placeholder="Enter Email ID" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />

            <label htmlFor="confirmPassword">Confirm Password</label> {/* ✅ Fixed Label */}
            <input type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

            {/* Register Button (Navigates to Login Page) */}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
