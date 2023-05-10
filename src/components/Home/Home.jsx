import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import "./Home.scss";
import detectFace from "../../api/detectFace";
import Result from "./Result";
import Output from "./Output/Output";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/143740-ai-powered-marketing-tools-abstract.json";

const Home = ({ setResult, result, setUrl, url }) => {
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "ai-face-app");
    data.append("cloud_name", "darom5sdn");

    try {
      setIsLoading(true);
      const res = await fetch(process.env.REACT_APP_CLOUDINARY_URI, {
        method: "post",
        body: data,
      });
      const dataJson = await res.json();
      setUrl(dataJson.url);
      const resultAi = await detectFace(dataJson.url);
      setResult(resultAi);
      // setShowResult(true);
      navigate("/output");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <div className="loader-container">
          <Player
            src={animation}
            background="transparent"
            speed="1"
            style={{ width: "30em", marginBottom: "10em" }}
            loop
            controls
            autoplay
          />
        </div>
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
                onChange={handleImageUpload}
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
