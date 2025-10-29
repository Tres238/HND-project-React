import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <main className="login">
      <h2>Login to TicketEase</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit" className="btn-primary">Login</button>
      </form>
    </main>
  );
}

export default Login;
