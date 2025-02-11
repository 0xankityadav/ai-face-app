import React from "react";
import ImageCropper from "../ImageCropper";
import "./Person.scss";

const Person = ({ face, url }) => {
  const expressions = face.faceAttributes?.expressions || {};

  return (
    <div className="person-card">
      <div className="thumbnail">
        <ImageCropper
          imageUrl={url}
          cropData={{
            top: face.faceRectangle.topLeft[1],
            left: face.faceRectangle.topLeft[0],
            width: face.faceRectangle.bottomRight[0] - face.faceRectangle.topLeft[0],
            height: face.faceRectangle.bottomRight[1] - face.faceRectangle.topLeft[1],
          }}
          style={{ maxWidth: 150, maxHeight: 400 }}
        />
      </div>

      <div className="facial-features">
        <h3>Facial Features</h3>
        <ul>
          <li>Landmarks detected: {face.faceLandmarks.length}</li>
          {/* <li>Confidence: {(face.faceAttributes.landmark_confidence * 100).toFixed(1)}%</li> */}
          <li>Estimated Age: {face.faceAttributes.age}</li>
          {/* <li>Gender: {face.faceAttributes.gender}</li> */}
        </ul>

        <h3>Emotions</h3>
        <ul className="emotions-list">
          {Object.entries(expressions).map(([emotion, probability]) => (
            <li key={emotion}>
              {emotion}: {(probability * 100).toFixed(1)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Person;
