let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

//every method to check every number is multiple of 7
//true
const multiplesOfSeven = sevenTimesTable.every((number) => number % 7 === 0);

//every method to check every number is multiple of 77
//false
const multiplesOfSeventySeven = seventySevenTimesTable.every(
  (number) => number % 77 === 0
);

//which number isnt multiple of 77
//461
const numberNotMultipleOf77 = seventySevenTimesTable.find(
  (number) => number % 77 !== 0
);

//use find index to find number position that isnt a multiple of 77
//5
const IndexOfNotMultiple = seventySevenTimesTable.findIndex(
  (number) => number % 77 !== 0
);
