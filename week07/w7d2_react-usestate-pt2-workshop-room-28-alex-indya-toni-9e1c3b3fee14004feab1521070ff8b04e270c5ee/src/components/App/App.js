import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input handleChangeProp={handleChange} />
      <Item textProp={text} font={"Arial"} />
      <Item textProp={text} font={"Monospace"} />
      <Item textProp={text} font={"Fantasy"} />
    </div>
  );
}

export default App;
