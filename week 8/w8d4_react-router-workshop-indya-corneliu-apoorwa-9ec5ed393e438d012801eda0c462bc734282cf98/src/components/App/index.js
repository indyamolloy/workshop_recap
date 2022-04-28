import React from "react";
import "./App.css";

import HomePage from "../HomePage";
import AboutPage from "../BeetRoutePage";
import AceVenturaPage from "../AceVenturaPage";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <h1>www.veg.com</h1>
      </nav>
      <HomePage />
      <AboutPage />
      <AceVenturaPage />
    </div>
  );
}

export default App;
