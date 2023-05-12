import React from "react";
import Header from "./Header/Header";
import "./About.scss";

const About = () => {
  return (
    <div className="container-about">
      <Header />
      <h1>About the app</h1>
      <p>
        Face Insight AI is a web application that allows users to upload images
        and detect facial features using Azure Face API. With this app, users
        can detect and recognize faces, analyze facial attributes like age,
        gender, and emotions, and identify faces in a group photo.
      </p>
      <h2>How it works</h2>
      <p>
        To use Face Insight AI, simply upload an image containing a face, and
        the app will use Azure Face API to analyze the image and detect facial
        features. Once the analysis is complete, you can view the results and
        see details about the detected features.
      </p>
      <h2>Technologies Used</h2>
      <ul>
        <li>ReactJS</li>
        <li>Azure Face API</li>
        <li>HTML5 & CSS3</li>
        <li>JavaScript</li>
      </ul>
      <h2>Privacy Policy</h2>
      <p>
        Face Insight AI is committed to protecting your privacy. We do not store
        any images that you upload to the app, and we do not share any of your
        personal information with third parties. All images are deleted from our
        servers immediately after analysis is complete.
      </p>

      <div className="author">
        <a
          href="https://github.com/0xankityadav/ai-face-app"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
