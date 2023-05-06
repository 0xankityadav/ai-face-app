const detectFace = async (image_url) => {
  const headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_AZURE_API_KEY,
  };

  const body = { url: image_url };

  return fetch(process.env.REACT_APP_AZURE_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

export default detectFace;
