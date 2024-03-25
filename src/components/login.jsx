import React, { useState } from "react";
import axios from "axios";
import "./loginSignup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async () => {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
    try {
      const response = await axios.post("http://localhost/linkedin-clone/src/backend/login.php", formData);

      if (response.data.status === "logged in") {
        console.log("Login successful");
      } else {
        console.error("Login failed:", response.data.status);
      }
    } catch (error) {
      console.error("Error occurred during login:", error.message);
    }
  };

  return (
    <div>
      <div className="navbar">
        <a href="/index.html">
          <img className="login-logo" src="/images/login-logo.svg" alt="" />
        </a>
        <div className="navbar-links">
          <a >Articles</a>
          <a >People</a>
          <a >Join Now</a>
          <a className="login" >Login</a>
        </div>
      </div>
      <section className="section1">
        <div className="hero">
          <h1>Welcome to your professional community</h1>
          <img className="hero-img" src="/images/login-hero.svg" alt="" />
        </div>
        <div>
          <button className="google-signin" action="">
            <img src="/images/googleIcon.svg"></img>
            Sign in with Google
          </button>
        </div>
      </section>

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
    </div>
  );
};

export default Login;
