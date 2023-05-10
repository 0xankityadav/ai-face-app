const detectFace = async (image_url) => {
  const headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_AZURE_API_KEY,
  };

  const body = { url: image_url };

  const faceAttributes = [
    "glasses",
    "occlusion",
    "accessories",
    "blur",
    "exposure",
    "noise",
  ];
  const recognitionModel = "recognition_01";
  const detectionModel = "detection_01";

  //detect?returnFaceAttributes=glasses,occlusion,accessories,blur,exposure,noise&recognitionModel=recognition_01&returnRecognitionModel=True&detectionModel=detection_01

  return fetch(
    `${process.env.REACT_APP_AZURE_ENDPOINT}detect?returnFaceAttributes=headPose,glasses,occlusion,accessories,blur,exposure,noise&recognitionModel=recognition_04&returnRecognitionModel=True&detectionModel=detection_01`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

export default detectFace;
