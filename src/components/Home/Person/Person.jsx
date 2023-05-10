import React from "react";

import anubhav from "../../../assets/app-logo.png";

import "./Person.scss";

const Person = () => {
  return (
    <div className="person-card">
      <div className="thumbnail">
        <img src={anubhav} alt="" className="person-img" />
      </div>

      <div className="facial-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
        <li>Feature 5</li>
      </div>
    </div>
  );
};

export default Person;
