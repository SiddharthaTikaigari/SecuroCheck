import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  // Hide auth buttons on /login and /signup pages
  const hideAuthButtons = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <header className="header">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
          SecuroCheck
        </Link>
      </h1>

      {!hideAuthButtons && (
        <div className="auth-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
