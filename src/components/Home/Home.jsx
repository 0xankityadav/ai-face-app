import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header/Header";

import "./Home.scss";
import detectFace from "../../api/detectFace";
import { useNavigate } from "react-router-dom";
import Result from "./Result";

const Home = () => {
  const [result, setResult] = useState();
  const [url, setUrl] = useState();
  const [showResult, setShowResult] = useState(false);

  const handleImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "ai-face-app");
    data.append("cloud_name", "darom5sdn");

    fetch("https://api.cloudinary.com/v1_1/darom5sdn/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        setUrl(data.url);
        const resultAi = await detectFace(data.url);
        setResult(resultAi);
        setShowResult(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if (showResult) {
  //   return <Result result={result} url={url} />;
  // }

  // console.log("result", result);

  return (
    <div className="container">
      <Header />
      {showResult ? (
        <Result result={result} url={url} />
      ) : (
        <div className="row">
          <div className="col">
            <h1>AI Face App</h1>
            <p>
              An application that utilizes Azure AI services to recognize
              people's faces and provide information about their facial
              features.
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
      )}
    </div>
  );
};

export default Home;
