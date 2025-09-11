import React from "react";
import UserHeader from "./userHeader"; // <-- import the local dashboard header only
import Sidebar from "./Sidebar";
import PostFeed from "./PostFeed";
import Footer from "./Footer";

import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <UserHeader /> {/* <-- use the local dashboard header */}
      <div className="dashboard-body">
        <Sidebar />
        <PostFeed />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
