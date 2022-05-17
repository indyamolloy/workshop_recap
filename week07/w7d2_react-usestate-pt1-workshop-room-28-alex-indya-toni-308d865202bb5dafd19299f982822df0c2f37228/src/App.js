import React, { useState } from "react";
import "./App.css";
import { bootcampers } from "./bootcampers.js";

function App() {
  const [bootcamperIndex, setbootcamperIndex] = useState(0);

  function handleClick() {
    const length = bootcampers.length;
    const randomNum = Math.floor(Math.random() * length);

    setbootcamperIndex(randomNum);
  }
  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers[bootcamperIndex]}</p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;
