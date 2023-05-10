import React, { useState } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Output from "./components/Home/Output/Output";
import About from "./components/Home/About";
const App = () => {
  const [result, setResult] = useState();
  const [url, setUrl] = useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setResult={setResult}
                result={result}
                setUrl={setUrl}
                url={url}
              />
            }
          />
          <Route
            path="/output"
            element={<Output result={result} url={url} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
