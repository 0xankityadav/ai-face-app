import * as tf from "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";
import { createDetector, SupportedModels } from "@tensorflow-models/face-landmarks-detection";

const detectFace = async (imageUrl) => {
  await tf.ready();

  const img = new Image();
  img.crossOrigin = "anonymous";

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = imageUrl;
  });

  try {
    const imageTensor = tf.browser.fromPixels(img);

    const model = await blazeface.load();
    const predictions = await model.estimateFaces(imageTensor, false);

    if (predictions.length > 0) {
      const face = predictions[0];

      const landmarksModel = await createDetector(SupportedModels.MediaPipeFaceMesh, {
        runtime: "tfjs",
        refineLandmarks: true,
      });

      const landmarks = await landmarksModel.estimateFaces(imageTensor);
      console.log(landmarks);
      console.log(face);

      imageTensor.dispose();

      return {
        faceRectangle: face,
        faceLandmarks: landmarks[0]?.keypoints || [],
      };
    }
  } catch (error) {
    console.error("Face detection error:", error);
    throw error;
  }

  return null;
};

export default detectFace;
