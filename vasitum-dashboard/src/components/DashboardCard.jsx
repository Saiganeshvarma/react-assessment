import React from "react";
import "./DashboardCard.scss";

const DashboardCard = ({ title, value, subText, color }) => {
  return (
    <div className="dashboard-card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{subText}</p>
    </div>
  );
};

export default DashboardCard;
