import React, { useState } from "react";
import Header from "./Header/Header";
import "./Home.scss";
import detectFace from "../../api/detectFace";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import blockchain from "../../assets/blockchain.json";

const Home = ({ setResult, result, setUrl, url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setUrl(imageUrl);

    try {
      setIsLoading(true);
      const resultAi = await detectFace(imageUrl);
      setResult(Array.isArray(resultAi) ? resultAi : [resultAi]);
      navigate("/output");
    } catch (error) {
      console.error("Face detection error:", error);
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
            src={blockchain}
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
            <h1>Face Insight AI</h1>
            <p>
              An application that utilizes TensorFlow.js to recognize people's faces and provide information about their
              facial features.
            </p>
            <label htmlFor="file-upload" className="upload-img-btn">
              <input id="file-upload" type="file" name="file" accept="image/*" onChange={handleImageUpload} />
              Upload Image
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
