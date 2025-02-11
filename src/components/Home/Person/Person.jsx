import React from "react";
import ImageCropper from "../ImageCropper";

import "./Person.scss";

const Person = ({ face, url }) => {
  console.log(face);

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

      {/* <div className="facial-features">
        <li>Landmarks: {face.faceLandmarks.length}</li>
        <li>Glasses: {face.faceAttributes.glasses}</li>
        <li>Blur Level: {face.faceAttributes.blur.blurLevel}</li>
        <li>Exposure Level: {face.faceAttributes.exposure.exposureLevel}</li>
        <li>Noise Level: {face.faceAttributes.noise.noiseLevel}</li>
        <li>Accessories: {face.faceAttributes.accessories.map((accessory) => accessory.type).join(", ") || "None"}</li>
        <li>Forehead Occluded: {face.faceAttributes.occlusion.foreheadOccluded ? "Yes" : "No"}</li>
        <li>Eye Occluded: {face.faceAttributes.occlusion.eyeOccluded ? "Yes" : "No"}</li>
        <li>Mouth Occluded: {face.faceAttributes.occlusion.mouthOccluded ? "Yes" : "No"}</li>
      </div> */}
    </div>
  );
};

export default Person;
