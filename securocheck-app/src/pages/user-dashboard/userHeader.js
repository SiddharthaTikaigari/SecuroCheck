import React from "react";
import "./userHeader.css";

function UserHeader() {   // <-- rename function to match export
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="logo">SecuroCheck</h2>
      </div>
      <div className="header-middle">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="header-right">
        <button className="upload-btn">+ Upload</button>
        <div className="account-btn">👤</div>
      </div>
    </header>
  );
}

export default UserHeader;   // <-- export matches component name
