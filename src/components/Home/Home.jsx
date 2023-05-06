import React, { useState } from "react";

import Header from "./Header/Header";

import "./Home.scss";

const Home = () => {
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col">
          <h1>AI Face App</h1>
          <p>
            An application that utilizes Azure AI services to recognize people's
            faces and provide information about their facial features.
          </p>
          <label htmlFor="file-upload" className="upload-img-btn">
            <input
              id="file-upload"
              type="file"
              name="file"
              accept="image/*"
              onChange={handleImage}
            />
            Upload Image
          </label>
        </div>
        <div className="col">
          <div className="card card1"></div>
          <div className="card card2"></div>
          <div className="card card3"></div>
          <div className="card card4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
