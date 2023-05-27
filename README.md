
# Face Insight AI

Face Insight AI is a web application that allows users to upload images and detect facial features using Azure Face API. With this app, users can detect and recognize faces, analyze facial attributes like age, gender, and emotions, and identify faces in a group photo.

How it works   
To use Face Insight AI, simply upload an image containing a face, and the app will use Azure Face API to analyze the image and detect facial features. Once the analysis is complete, you can view the results and see details about the detected features.

Technologies Used  
ReactJS  
Azure Face API  
HTML5 & CSS3  
JavaScript


## Run Locally

Clone the project

```bash
  git clone https://github.com/0xankityadav/ai-face-app.git
```

Go to the project directory

```bash
  cd ai-face-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Demo

https://faceinsightai.live/


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_CLOUDINARY_URI`

`REACT_APP_AZURE_ENDPOINT`

`REACT_APP_AZURE_API_KEY`

