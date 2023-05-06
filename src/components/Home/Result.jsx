import React from "react";
import Header from "./Header/Header";

const Result = ({ result, url }) => {
  return (
    <div>
      {url && (
        <img
          src={url}
          alt="uploaded image"
          //   style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      {result.map((face, index) => (
        <div key={index}>
          <div
            style={{
              border: "2px solid green",
              position: "absolute",
              left: face.faceRectangle.left,
              top: face.faceRectangle.top,
              width: face.faceRectangle.width,
              height: face.faceRectangle.height,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: face.faceRectangle.left,
              top: face.faceRectangle.top - 40,
            }}
          >
            <p>Glasses: {face.faceAttributes.glasses}</p>
            <p>Blur Level: {face.faceAttributes.blur.blurLevel}</p>
            <p>Exposure Level: {face.faceAttributes.exposure.exposureLevel}</p>
            <p>Noise Level: {face.faceAttributes.noise.noiseLevel}</p>
            <p>
              Accessories:{" "}
              {face.faceAttributes.accessories
                .map((accessory) => accessory.type)
                .join(", ") || "None"}
            </p>
            <p>
              Forehead Occluded:{" "}
              {face.faceAttributes.occlusion.foreheadOccluded ? "Yes" : "No"}
            </p>
            <p>
              Eye Occluded:{" "}
              {face.faceAttributes.occlusion.eyeOccluded ? "Yes" : "No"}
            </p>
            <p>
              Mouth Occluded:{" "}
              {face.faceAttributes.occlusion.mouthOccluded ? "Yes" : "No"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
