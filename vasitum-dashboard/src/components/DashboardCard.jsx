import React from "react";
import "./DashboardCard.scss";

const DashboardCard = ({ title, value, subText }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{subText}</p>
    </div>
  );
};

export default DashboardCard;