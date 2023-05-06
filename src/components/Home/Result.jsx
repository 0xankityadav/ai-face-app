import React, { useEffect, useRef, useState } from "react";
import Header from "./Header/Header";

const Result = ({ result, url }) => {
  const [imageUrlDimensions, setImageUrlDimensions] = useState(null);
  const [renderedImageDimensions, setRenderedImageDimensions] = useState(null);
  const imgRef = useRef(null);

  //   useEffect(() => {
  //     if (imgRef.current) {
  //       const { clientWidth, clientHeight } = imgRef.current;
  //       setRenderedImageDimensions({ width: clientWidth, height: clientHeight });
  //     }
  //   }, [url]);

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
    <div>
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
        />
      )}
      {result?.map((face, index) => (
        <div key={index}>
          <div
            style={{
              border: "2px solid green",
              position: "absolute",
              left:
                (face.faceRectangle.left * renderedImageDimensions?.width) /
                imageUrlDimensions?.width,
              top:
                (face.faceRectangle.top * renderedImageDimensions?.height) /
                imageUrlDimensions?.height,
              width:
                (face.faceRectangle.width * renderedImageDimensions?.width) /
                imageUrlDimensions?.width,
              height:
                (face.faceRectangle.height * renderedImageDimensions?.height) /
                imageUrlDimensions?.height,
            }}
          ></div>
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
  );
};

export default Result;
