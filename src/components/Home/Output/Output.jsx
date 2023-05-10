import React, { useEffect, useRef, useState } from "react";

import "./Output.scss";
import Person from "../Person/Person";
import Header from "../Header/Header";

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

  console.log(result);
  return (
    <div className="main-div">
      <Header />
      <div className="left-block">
        <div style={{ display: "flex" }}>
          {url && (
            <img
              ref={imgRef}
              src={url}
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
            </div>
          ))}
        </div>
      </div>
      <div className="right-block">
        <div className="persons">
          {result?.map((face, index) => (
            <Person key={index} face={face} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Output;
