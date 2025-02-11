import React, { useEffect, useRef, useState } from "react";
import "./Output.scss";
import Person from "../Person/Person";
import Header from "../Header/Header";

const Output = ({ result, url }) => {
  const [imageUrlDimensions, setImageUrlDimensions] = useState(null);
  const [renderedImageDimensions, setRenderedImageDimensions] = useState(null);
  const [show, setShow] = useState(true);
  const imgRef = useRef(null);

  const faces = Array.isArray(result) ? result : [];

  useEffect(() => {
    if (url) {
      const img = new Image();
      img.onload = () => {
        setImageUrlDimensions({ width: img.width, height: img.height });
      };
      img.src = url;
    }
  }, [url]);

  const scaleRectangle = (rect) => {
    if (!imageUrlDimensions || !renderedImageDimensions) return rect;

    const scaleX = renderedImageDimensions.width / imageUrlDimensions.width;
    const scaleY = renderedImageDimensions.height / imageUrlDimensions.height;

    return {
      left: rect.topLeft[0] * scaleX,
      top: rect.topLeft[1] * scaleY + 110,
      width: (rect.bottomRight[0] - rect.topLeft[0]) * scaleX,
      height: (rect.bottomRight[1] - rect.topLeft[1]) * scaleY,
    };
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
          {faces.map((face, index) => {
            const scaledRect = scaleRectangle(face.faceRectangle);
            return (
              <div key={index}>
                <div
                  style={{
                    border: "2px solid #39FF14",
                    position: "absolute",
                    left: scaledRect.left,
                    top: scaledRect.top,
                    width: scaledRect.width,
                    height: scaledRect.height,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={`right-block ${show ? "hide" : "show"}`}>
          <div className="persons">
            {faces.map((face, index) => (
              <Person key={index} face={face} url={url} />
            ))}
          </div>
        </div>
      </div>
      <button className="toggle-button" onClick={() => setShow(!show)}>
        {show ? "Show Attributes" : "Show Image"}
      </button>
    </div>
  );
};

export default Output;
