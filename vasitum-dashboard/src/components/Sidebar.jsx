import React from "react";
import { FaHome, FaUser, FaCalendarAlt, FaBriefcase, FaCog } from "react-icons/fa";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Vasitum</div>
      <ul>
        <li><FaHome /> Dashboard</li>
        <li><FaUser /> Recruitment</li>
        <li><FaCalendarAlt /> Schedule</li>
        <li><FaBriefcase /> Employee</li>
        <li><FaCog /> Department</li>
      </ul>
    </div>
  );
};

export default Sidebar;