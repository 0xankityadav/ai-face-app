import React, { useEffect, useRef, useState } from "react";

import "./Output.scss";
import Person from "../Person/Person";
import Header from "../Header/Header";

const Output = ({ result, url }) => {
  const [imageUrlDimensions, setImageUrlDimensions] = useState(null);
  const [renderedImageDimensions, setRenderedImageDimensions] = useState(null);
  const [show, setShow] = useState(true);
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

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="main-div">
      <Header />
      <div className="output-container">
        <div className={`left-block ${show ? "show" : "hide"}`}>
          {url && (
            <img
              ref={imgRef}
              src={url}
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
                      imageUrlDimensions?.width +
                    20,
                  top:
                    (face.faceRectangle.top * renderedImageDimensions?.height) /
                      imageUrlDimensions?.height +
                    110,
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
        <div className={`right-block ${show ? "hide" : "show"}`}>
          <div className="persons">
            {result?.map((face, index) => (
              <Person key={index} face={face} url={url} />
            ))}
          </div>
        </div>
      </div>
      <button className="toggle-button" onClick={toggleShow}>
        {show ? "Show Attributes" : "Show Image"}
      </button>
    </div>
  );
};

export default Output;
