import React from "react";

function SocialLogin() {
  const handleGoogle = () => alert("Google login (placeholder)");
  const handleMicrosoft = () => alert("Microsoft login (placeholder)");
  const handleMetaMask = () => alert("MetaMask login (placeholder)");

  return (
    <div className="social-btns">
      <button onClick={handleGoogle}>Google</button>
      <button onClick={handleMicrosoft}>Microsoft</button>
      <button onClick={handleMetaMask}>MetaMask</button>
    </div>
  );
}

export default SocialLogin;
