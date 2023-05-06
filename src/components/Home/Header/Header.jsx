import React from "react";
import logo from "../../../assets/app-logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="right">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
