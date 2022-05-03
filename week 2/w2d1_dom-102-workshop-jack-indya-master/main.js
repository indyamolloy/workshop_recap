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

//Selecting and changing quote
const quote = document.querySelector(".quote");
quote.innerText = "hehe";

//selecting and changing style
const h1 = document.querySelector("h1");
h1.style.textDecoration = "underline";

//creating elements
const tipsList = document.querySelector("#tips-list");

for (let i = 0; i < extraTips.length; i++) {
  const listItem = document.createElement("li");

  listItem.innerText = extraTips[i];

  tipsList.appendChild(listItem);
}
