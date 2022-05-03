let pennies = 1;
const output = document.querySelector("output");

function handleClick() {
  console.log("Im just to prove it's working!");
  // Double the number of pennies
  pennies *= 2;
  // display in the output tag
  output.innerText = `${pennies} Pennies`;
}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

const quote = document.querySelector(".quote");
quote.innerText = "hehe";
