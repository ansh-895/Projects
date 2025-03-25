import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./portal.css";
import profilePic from "./assets/profile.jpg"; // Ensure this image exists

function Portal() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // Default tab: Home
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Clear authentication data
    sessionStorage.clear(); // Clear session storage
    navigate("/"); // Redirect to the root route (Welcome Page in App.js)
  };

  return (
    <div className={`portal-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>
            Home
          </li>
          <li className={activeTab === "filter" ? "active" : ""} onClick={() => setActiveTab("filter")}>
            Filter
          </li>
          <li className={activeTab === "post" ? "active" : ""} onClick={() => setActiveTab("post")}>
            Post
          </li>

          {/* Profile Section */}
          <li className="profile-container" onClick={() => setShowDropdown(!showDropdown)}>
            <img src={profilePic} alt="Profile" className="profile-icon" />
            {showDropdown && (
              <div className="profile-dropdown">
                <a href="#">Edit Profile</a>
                <a href="#" onClick={handleLogout}>Logout</a>
              </div>
            )}
          </li>

          {/* Dark Mode Toggle */}
          <li className="toggle-container" onClick={toggleDarkMode}>
            🌙
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      <div className="content">
        {activeTab === "home" && <h2>Welcome</h2>}
        {activeTab === "filter" && (
          <div className="filter-section">
            <h2>Filter Jobs</h2>
            <form>
              <label>Fields:</label>
              <select>
                <option>Select a field</option>
              </select>
              <label>Job Type:</label>
              <select>
                <option>Select job type</option>
              </select>
            </form>
          </div>
        )}
        {activeTab === "post" && <h2>Post a Job</h2>}
      </div>
    </div>
  );
}

export default Portal;
