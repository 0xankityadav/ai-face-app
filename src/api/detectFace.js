import * as tf from "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";
import { createDetector, SupportedModels } from "@tensorflow-models/face-landmarks-detection";

const estimateAgeAndGender = (landmarks) => {
  const eyeDistance = Math.sqrt(
    Math.pow(landmarks[33].x - landmarks[133].x, 2) + Math.pow(landmarks[33].y - landmarks[133].y, 2)
  );

  const faceWidth = Math.sqrt(
    Math.pow(landmarks[234].x - landmarks[454].x, 2) + Math.pow(landmarks[234].y - landmarks[454].y, 2)
  );

  const ageEstimate = Math.round(30 + (faceWidth / eyeDistance - 3.3) * 20);

  return {
    age: Math.max(15, Math.min(ageEstimate, 75)),
    gender: "unknown",
  };
};

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

    const faces = [];
    const landmarksModel = await createDetector(SupportedModels.MediaPipeFaceMesh, {
      refineLandmarks: true,
      runtime: "tfjs",
    });

    for (const face of predictions) {
      const landmarks = await landmarksModel.estimateFaces(imageTensor);
      const { age, gender } = estimateAgeAndGender(landmarks[0]?.keypoints || []);

      faces.push({
        faceRectangle: face,
        faceLandmarks: landmarks[0]?.keypoints || [],
        faceAttributes: {
          expressions: {
            neutral: 0.8,
            happy: landmarks[0]?.keypoints[61]?.score || 0,
            sad: landmarks[0]?.keypoints[300]?.score || 0,
            surprised: landmarks[0]?.keypoints[13]?.score || 0,
          },
          age,
          gender,
          landmark_confidence: landmarks[0]?.score || 0,
        },
      });
    }

    imageTensor.dispose();
    return faces;
  } catch (error) {
    console.error("Face detection error:", error);
    throw error;
  }
};

export default detectFace;
