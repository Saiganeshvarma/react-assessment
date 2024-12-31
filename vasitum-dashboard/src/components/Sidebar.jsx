import React from "react";
import { FaHome, FaUser, FaCalendarAlt, FaBriefcase, FaCog, FaGamepad, FaLifeRing, FaWrench } from "react-icons/fa";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Vasitum</div>
      <ul>
        <li style={{ marginBottom: '40px' }}><FaHome /> Dashboard</li>
        <li style={{ marginBottom: '40px' }}><FaUser /> Recruitment</li>
        <li style={{ marginBottom: '40px' }}><FaGamepad /> Game</li>
        <li style={{ marginBottom: '40px' }}><FaCalendarAlt /> Schedule</li>
        <li style={{ marginBottom: '40px' }}><FaBriefcase /> Employee</li>
        <li style={{ marginBottom: '40px' }}><FaCog /> Department</li>
        <p>OTHER</p>
        <li style={{ marginBottom: '40px' }}><FaLifeRing /> Support</li>
        <li style={{ marginBottom: '40px' }}><FaWrench /> Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
