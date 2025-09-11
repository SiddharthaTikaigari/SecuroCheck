import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!username.trim() || !password) {
      setError("Please enter username and password.");
      return;
    }

    setLoading(true);

    try {
      // Send login request to backend
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      let data;
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = text ? { message: text } : {};
      }

      // Handle server errors
      if (!response.ok) {
        throw new Error(data.message || `Login failed (status ${response.status})`);
      }

      // Redirect based on role (adjust roles as per your backend)
      const role = data?.user?.role;
      if (role === "user") {
        navigate("/dashboard"); // redirect to your dashboard
      } else if (role === "interviewer") {
        navigate("/interviewer-dashboard");
      } else {
        navigate("/dashboard"); // fallback
      }

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="auth-form" noValidate>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          disabled={loading}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          disabled={loading}
          required
        />

        <button
          type="submit"
          className="login-btn"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Logging in…" : "Login"}
        </button>
      </form>

      {/* Error message */}
      {error && (
        <div className="error-message" role="alert" aria-live="assertive">
          {error}
        </div>
      )}

      <div className="auth-footer">
        <p>
          New to Securo? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
