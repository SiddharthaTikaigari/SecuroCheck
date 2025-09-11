import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="active">🏠 Home</li>
        <li>💬 Messages</li>
        <li>🔔 Notifications</li>
      </ul>

      <div className="sidebar-bottom">
        <img src="/assets/profile.png" alt="profile" className="profile-pic" />
        <p className="username">Your Name</p>
      </div>
    </aside>
  );
}

export default Sidebar;
