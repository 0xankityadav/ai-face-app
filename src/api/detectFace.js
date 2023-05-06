const detectFace = async (image_url) => {
  const API_Key = "d9a943a3036c4e7ca350eab8a01a413c";
  const Endpoint =
    "https://faceapidemo1811.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=glasses,occlusion,accessories,blur,exposure,noise&recognitionModel=recognition_01&returnRecognitionModel=True&detectionModel=detection_01";

  const headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": API_Key,
  };

  const body = { url: image_url };

  return fetch(Endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

export default detectFace;
