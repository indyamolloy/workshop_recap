const button = document.querySelector("#click-me");

function handleClick(event) {
  // If shift key pressed, change the inner text of the button to be NAILED IT
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
