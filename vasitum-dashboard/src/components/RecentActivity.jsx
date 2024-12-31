import React from "react";
import "./RecentActivity.scss";

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>Recently Activity</h3>
      <p>You Posted a New Job</p>
      <span>
        Kindly check the requirements and terms of work and make sure everything
        is right.
      </span>
      <span className="activity-count">Today you makes 12 Activity</span>
      <button>See All Activity</button>
    </div>
  );
};

export default RecentActivity;
