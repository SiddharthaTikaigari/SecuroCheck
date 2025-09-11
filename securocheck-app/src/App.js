import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";         // Global header for landing page
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import SliderBoxes from "./components/SliderBoxes";
import LoginBox from "./components/LoginBox";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/user-dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <Header /> {/* global header */}
              <div className="main-section">
                <InfoSection />
                <LoginBox />
              </div>
              <SliderBoxes />
              <Footer />
            </>
          }
        />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
