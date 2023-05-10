import React from "react";

import anubhav from "../../../assets/app-logo.png";
import ImageCropper from "../ImageCropper";

import "./Person.scss";

const Person = ({ face, url }) => {
  return (
    <div className="person-card">
      <div className="thumbnail">
        <ImageCropper
          imageUrl={url}
          cropData={{
            top: face.faceRectangle.top,
            left: face.faceRectangle.left,
            width: face.faceRectangle.width,
            height: face.faceRectangle.height,
          }}
          style={{ maxWidth: 150, maxHeight: 400 }}
        />
      </div>

      <div className="facial-features">
        <li>Glasses: {face.faceAttributes.glasses}</li>
        <li>Blur Level: {face.faceAttributes.blur.blurLevel}</li>
        <li>Exposure Level: {face.faceAttributes.exposure.exposureLevel}</li>
        <li>Noise Level: {face.faceAttributes.noise.noiseLevel}</li>
        <li>Feature 5</li>
      </div>
    </div>
  );
};

export default Person;
