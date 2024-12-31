import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search" />
      <div className="profile">
        <span>Admirra John</span>
        <img src="https://via.placeholder.com/40" alt="profile" />
      </div>
    </div>
  );
};

export default Header;