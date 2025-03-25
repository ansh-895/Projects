import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginClient from "./LoginClient";
import LoginFreelancer from "./LoginFreelancer";
import SignUpFreelancer from "./SignUpFreelancer";
import SignUpClient from "./SignUpClient";
import Portal from "./portal"; // Ensure this file exists
import "./styles.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router> {/* This is the ONLY Router */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/loginclient" element={<LoginClient />} />
        <Route path="/loginfreelancer" element={<LoginFreelancer />} />
        <Route path="/signupfreelancer" element={<SignUpFreelancer />} />
        <Route path="/signupclient" element={<SignUpClient />} />
        <Route path="/portal" element={<Portal />} /> {/* Add Portal Page */}
      </Routes>
    </Router>
  </React.StrictMode>
);
