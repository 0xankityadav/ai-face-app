import React, { useEffect, useRef } from "react";

const ImageCropper = ({ imageUrl, cropData, style }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      const { top, left, width, height } = cropData;
      ctx.drawImage(img, left, top, width, height, 0, 0, width, height);
    };
    img.src = imageUrl;
  }, [imageUrl, cropData]);

  return (
    <canvas
      ref={canvasRef}
      width={cropData.width}
      height={cropData.height}
      style={style}
    />
  );
};

export default ImageCropper;
