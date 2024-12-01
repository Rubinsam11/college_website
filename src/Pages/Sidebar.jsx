import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo_content">
        <div className="logo">
          {isActive && <h2>University</h2>}
        </div>
        <button className="menu_btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="search">
        {isActive && (
          <>
            <input type="text" placeholder="Search.." />
            <button>🔍</button>
          </>
        )}
      </div>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
            {isActive && <span>Home</span>}
          </Link>
        </li>

        <li>
          <Link to="/section">
            <i className="fas fa-chart-line"></i>
            {isActive && <span>Section</span>}
          </Link>
        </li>

        <li>
          <Link to="/download-record">
            <i className="fas fa-download"></i>
            {isActive && <span>Download Record</span>}
          </Link>
        </li>

        <li>
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i>
            {isActive && <span>Login</span>}
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt"></i>
            {isActive && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <i className="fas fa-user"></i>
            {isActive && <span>My Profile</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
