import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loginSignup.css";
import Signup from "./signup";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await axios.post(
        "http://localhost/linkedin-clone/src/backend/login.php",
        formData
      );

      if (response.data.status === "logged in") {
        navigate("/home");
      } else {
        console.error("Login failed:", response.data.status);
      }
    } catch (error) {
      console.error("Error occurred during login:", error.message);
    }
  };

  return (
    <div>
      <div>
        <div className="navbar">
          <a href="/index.html">
            <img className="login-logo" src="/images/login-logo.svg" alt="" />
          </a>
          <div className="navbar-links">
            <a>Articles</a>
            <a>People</a>
            <a href="/signup">Join Now</a>
            <a className="login">Login</a>
          </div>
        </div>
        <section className="section1">
          <div>
            <h1>Welcome to your professional community</h1>
          </div>
          <div className="hero">
            <div className="login-container">
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
            <img className="hero-img" src="/images/login-hero.svg" alt="" />
          </div>
          <div></div>
        </section>
      </div>
      <Signup />
    </div>
  );
};

export default Login;
