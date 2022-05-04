import React from "react";

import PigeonItem from "../PigeonItem";
import "./App.css";

import { dummyData } from "./data";

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1>Pigeon Dashboard</h1>
        <p>Track Them Pigeons!!</p>
      </header>
      <ul className="pigeon-list">
        {dummyData.map(data => {
          const { id, name, longitude, latitude, img_url } = data;
          return (
            <PigeonItem
              id={id}
              name={name}
              longitude={longitude}
              latitude={latitude}
              img_url={img_url}
              key={data.name}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
