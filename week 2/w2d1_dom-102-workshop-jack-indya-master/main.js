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

//Change title
// document.title = "save money";

//put task 5 in a function

function changeTitle() {
  document.title = "save money";
}

//click button to change title

const titleButton = document.querySelector(".click-me");

titleButton.addEventListener("click", changeTitle);

//change h1 to input value
function changeH1() {
  const h1 = document.querySelector(".main-title");
  const inputBox = document.querySelector(".input-box");
  h1.innerText = inputBox.value;
}

const changeH1Button = document.querySelector(".change-h1");

changeH1Button.addEventListener("click", changeH1);
