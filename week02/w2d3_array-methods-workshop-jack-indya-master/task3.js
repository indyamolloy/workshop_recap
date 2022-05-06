let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

//true
const hasmultipleOf3 = someNumbers.some((number) => number % 3 === 0);
//true
const hasmultipleOf5 = someNumbers.some((number) => number % 5 === 0);
//false
const hasmultipleOf60 = someNumbers.some((number) => number % 60 === 0);
//false
const hasmultipleOf90 = someNumbers.some((number) => number % 90 === 0);
