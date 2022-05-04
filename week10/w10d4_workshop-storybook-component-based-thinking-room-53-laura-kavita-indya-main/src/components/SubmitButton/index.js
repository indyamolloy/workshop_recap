import React from "react";

function SubmitButton({ handleSubmit, backgroundColor, text }) {
  return (
    <button style={{ backgroundColor: backgroundColor }} onClick={handleSubmit}>
      {text}
    </button>
  );
}

export default SubmitButton;
