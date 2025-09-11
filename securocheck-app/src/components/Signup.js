import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password, role }),
      });

      const data = await res.text();
      alert(data);

      if (res.ok) navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleToggleRole = () => {
    setRole(role === "user" ? "interviewer" : "user");
  };

  return (
    <div className="auth-box">
      <h2>Sign Up</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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

      {/* ✅ Text layer & slider are completely separate */}
      <div className="role-toggle" onClick={handleToggleRole}>
        <div
          className="slider"
          style={{ transform: role === "user" ? "translateX(0%)" : "translateX(100%)" }}
        ></div>
        <div className="labels">
          <span className={role === "user" ? "active" : ""}>User</span>
          <span className={role === "interviewer" ? "active" : ""}>Interviewer</span>
        </div>
      </div>

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
