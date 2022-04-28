//let user have 3 guesses
// let attempts = 0;

// while (attempts < 3) {
//   let passwordGuess = prompt("please enter the password.");

//   if (passwordGuess === "password123") {
//     alert("My secret info here");
//     break;
//   } else {
//     attempts++;
//   }
// }

//Functions

function authenticateUser() {
  //keep track of attempts
  let attempts = 0;

  while (attempts < 3) {
    const password = prompt("What's the password?");

    if (password === "password123") {
      return true;
    } else if (password !== "password123") {
      attempts++;
    } else {
      return false;
    }
  }
}

let isLoggedIn = authenticateUser();

if (isLoggedIn) {
  console.log("Here's my secret.");
} else {
  console.log("Wrong password.");
}
