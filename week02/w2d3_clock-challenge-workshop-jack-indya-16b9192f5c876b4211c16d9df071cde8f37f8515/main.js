const hand = document.querySelector(".hand");

// hand.style.transform = `rotate(90deg)`; // example of how to rotate the hand

let angle = 0;

function rotateHand(degree) {
  hand.style.transform = `rotate(${degree}deg)`;
}

setInterval(function () {
  angle = angle + 6;
  rotateHand(angle);
}, 1000);
