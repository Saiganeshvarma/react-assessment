import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search" />
      <div className="profile">
        <span>Admirra John</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
