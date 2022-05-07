const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

//order the brooms numerically.
broomCupboard.sort(function (a, b) {
  return a - b;
});

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

//sort potions desc by shelf
potions.sort(function (a, b) {
  return b.shelf - a.shelf;
});

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

//order students alphabetically by last name

students.sort(function (a, b) {
  let aLast = a.split(" ")[1];
  let bLast = b.split(" ")[1];
  if (aLast < bLast) return -1;
  else if (aLast > bLast) return 1;
  return 0;
});
