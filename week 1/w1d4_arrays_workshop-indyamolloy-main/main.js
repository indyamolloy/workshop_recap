// Task 1 - Declaring an Array

const favFoods = ["Cheese", "Chocolate", "Olives", "Anchovies"];
const favSongs = [
  "Tiny Dancer",
  "Running Up That Hill",
  "Don't Stop Moving",
  "Tragedy",
  "Crazy Horses",
];

const pennySchemeProfit = [1, 2, 4, 8, 16, 32, 64];
const team = [
  { name: "Ben", skill: "Rapping" },
  {
    name: "Tao",
    skill: "hand raising",
  },
  {
    name: "Liizie",
    skill: "friendly",
  },
  {
    name: "Liz",
    skill: "crochet",
  },
  {
    name: "Patrick",
    skill: "COD",
  },
  {
    name: "Chris",
    skill: "Helping",
  },
  {
    name: "Tim",
    skill: "analogies",
  },
  {
    name: "James",
    skill: "being positive",
  },
];

// Task 2 - Reading Array Values

let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(options[8]);

console.log(options[9]);

console.log(options[11]);

// Task 3 - Looping and Accessing

let englishNumbers = ["one", "two", "three", "four", "five"];

let i = 0;

while (i < englishNumbers.length) {
  console.log(englishNumbers[i]);
  i++;
}

// Task 4 - Looping and Accessing

for (let i = 0; i < englishNumbers.length; i++) {
  console.log(englishNumbers[i]);
}

// Task 5 - Looping and Reassigning

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let i = 0; i < words.length; i++) {
  console.log(words[i] + "t");
}
