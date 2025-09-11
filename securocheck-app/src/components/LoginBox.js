import React, { useState, useEffect } from "react";
import "./LoginBox.css";

function LoginBox() {
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setSlideOut(true);
      } else {
        setSlideOut(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`login-box ${slideOut ? "slide-out" : ""}`}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default LoginBox;
