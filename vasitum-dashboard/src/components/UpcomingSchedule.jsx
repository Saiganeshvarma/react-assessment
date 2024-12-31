import React from "react";
import "./UpcomingSchedule.scss";

const UpcomingSchedule = () => {
  const schedules = [
    { text: "Review candidate applications", time: "Today - 11:30 AM" },
    { text: "Interview with candidates", time: "Today - 10:30 AM" },
    { text: "Short meeting with product designer from IT Department", time: "Today - 09:15 AM" },
  ];

  return (
    <div className="upcoming-schedule">
      <h3>Upcoming Schedule</h3>
      <ul>
        {schedules.map((item, index) => (
          <li key={index}>
            <p>{item.text}</p>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;
