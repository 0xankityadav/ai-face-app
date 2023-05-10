import React, { useEffect, useRef, useState } from "react";
import ImageCropper from "../ImageCropper";

import "./Output.scss";
import Person from "../Person/Person";

const Output = ({ result, url }) => {
  const [imageUrlDimensions, setImageUrlDimensions] = useState(null);
  const [renderedImageDimensions, setRenderedImageDimensions] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (url) {
      const img = new Image();
      img.onload = () => {
        setImageUrlDimensions({ width: img.width, height: img.height });
      };
      img.src = url;
    }
  }, [url]);

  return (
    <div className="main-div">
      <div className="left-block">
        <div style={{ display: "flex" }}>
          {url && (
            <img
              ref={imgRef}
              src={url}
              //   onLoad={handleImageLoad}
              style={{ maxWidth: "50%", maxHeight: "600px" }}
              onLoad={() => {
                const { clientWidth, clientHeight } = imgRef.current;
                setRenderedImageDimensions({
                  width: clientWidth,
                  height: clientHeight,
                });
              }}
              alt="img"
            />
          )}
          {result?.map((face, index) => (
            <div key={index}>
              <div
                style={{
                  border: "2px solid #39FF14",
                  position: "absolute",
                  left:
                    (face.faceRectangle.left * renderedImageDimensions?.width) /
                    imageUrlDimensions?.width,
                  top:
                    (face.faceRectangle.top * renderedImageDimensions?.height) /
                      imageUrlDimensions?.height +
                    90,
                  width:
                    (face.faceRectangle.width *
                      renderedImageDimensions?.width) /
                    imageUrlDimensions?.width,
                  height:
                    (face.faceRectangle.height *
                      renderedImageDimensions?.height) /
                    imageUrlDimensions?.height,
                }}
              ></div>
              <div>
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
              {/* <div
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
          </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="right-block">
        <div className="persons">
          <Person />
          <Person />
          <Person />
        </div>
      </div>
    </div>
  );
};

export default Output;
