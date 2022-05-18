import react from "react";

function Item({ textProp, font }) {
  return <li style={{ fontFamily: `${font}` }}>{textProp}</li>;
}

export default Item;
