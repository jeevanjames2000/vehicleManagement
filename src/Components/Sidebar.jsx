import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li style={{ textAlign: "left" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to="/add-scenario">Add Scenarios</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to="/all-scenario">All Scenarios</Link>
          </li>
          <li style={{ textAlign: "left" }}>
            <Link to="/create-vehicle">Add Vehicle</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
