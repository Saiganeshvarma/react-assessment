import React from "react";
import "./Announcement.scss";

const Announcement = () => {
  const announcements = [
    { text: "Outing schedule for every department", time: "5 Minutes ago" },
    { text: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    { text: "IT Department needs two more talents for UX/UI Designer position", time: "Yesterday, 9:15 AM" },
  ];

  return (
    <div className="announcement">
      <h3>Announcement</h3>
      <ul>
        {announcements.map((item, index) => (
          <li key={index}>
            <p>{item.text}</p>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
