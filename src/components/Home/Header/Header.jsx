import React from "react";
import logo from "../../../assets/app-logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
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
