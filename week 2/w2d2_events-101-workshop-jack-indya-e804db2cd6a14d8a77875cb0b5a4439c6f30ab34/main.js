const button = document.querySelector("#click-me");

function handleClick(event) {
  event.shiftKey ? (button.textContent = "NAILED IT!!") : null;
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

//Task 2
const flowerButton = document.querySelector(".task-2");

function titleChange() {
  document.title = "💐🌷🌼";
}

flowerButton.addEventListener("click", titleChange);

//Task 3
const titleInput = document.querySelector("#title-changer");

function updateH1(event) {
  document.querySelector("h1").innerText = event.target.value;
}

titleInput.addEventListener("keyup", updateH1);

//Task 4
const image = document.querySelector("img");

image.addEventListener("mouseenter", changeH1Color);
image.addEventListener("mouseleave", removeH1Color);

function changeH1Color() {
  document.querySelector("h1").style.color = "hotpink";
}

function removeH1Color() {
  document.querySelector("h1").style.color = "initial";
}

//Task 5
const h1 = document.querySelector("h1");
const checkbox = document.querySelector("#check-box");

checkbox.addEventListener("change", () => {
  h1.classList.toggle("funky");
});
