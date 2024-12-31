import React from "react";
import "./UpcomingSchedule.scss";

const UpcomingSchedule = () => {
  const schedules = [
    {
      type: "Priority",
      items: [
        { text: "Review candidate applications", time: "Today - 11:30 AM" },
      ],
    },
    {
      type: "Other",
      items: [
        { text: "Interview with candidates", time: "Today - 10:30 AM" },
        {
          text: "Short meeting with product designer from IT Department",
          time: "Today - 09:15 AM",
        },
      ],
    },
  ];

  return (
    <div className="upcoming-schedule">
      <div className="header">
        <h3>Upcoming Schedule</h3>
        <span className="date">Today, 13 Sep 2021</span>
      </div>
      {schedules.map((category, index) => (
        <div key={index} className="schedule-category">
          <h4 className="category-title">{category.type}</h4>
          <ul className="schedule-list">
            {category.items.map((item, idx) => (
              <li key={idx} className="schedule-item">
                <p className="schedule-text">{item.text}</p>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="create-schedule-button">Create a New Schedule</button>
    </div>
  );
};

export default UpcomingSchedule;
