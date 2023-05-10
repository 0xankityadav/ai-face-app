import React from "react";
import logo from "../../../assets/app-logo.png";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="right">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
