import React, { useState } from "react";

const Auth = ({ setIsAuthenticated, setUsername }) => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setIsAuthenticated(true);
      setUsername(username);
    } else alert("Enter valid credentials");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>🎵 Welcome Back!</h2>
        <p>Login to explore your favorite music</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Auth;
