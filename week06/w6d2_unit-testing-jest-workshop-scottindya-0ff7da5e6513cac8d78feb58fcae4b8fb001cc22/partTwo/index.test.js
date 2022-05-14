import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

test("when given a number, the doubleAndAddOne function returns the number doubled and one added.", () => {
  const actual = doubleAndAddOne(4);
  const expected = 9;

  expect(actual).toBe(expected);
});

test("when given a number, the doubleAndAddOne function returns the number doubled and one added.", () => {
  const actual = doubleAndAddOne(2);
  const expected = 5;

  expect(actual).toBe(expected);
});

test("When given an array, the isLongArray function returns true is the array length is greater than one", () => {
  const actual = isLongArray([1, 2, 4, 3, 6, 3, 6, 8, 6, 8, 11]);
  const expected = true;

  expect(actual).toBe(expected);
});

test("When given an array, the isLongArray function returns true is the array length is greater than one", () => {
  const actual = isLongArray([1, 2, 4, 3, 6, 3, 6, 8, 6]);
  const expected = false;

  expect(actual).toBe(expected);
});

test("When given an array and an item, the addItemToArray function returns array with the item added to the end of it", () => {
  const actual = addItemToArray([2, 5], 8);
  const expected = [2, 5, 8];

  expect(actual).toStrictEqual(expected);
});

test("When given an array and an item, the addItemToArray function returns array with the item added to the end of it", () => {
  const actual = addItemToArray(["hi", "you"], "are cute");
  const expected = ["hi", "you", "are cute"];

  expect(actual).toStrictEqual(expected);
});

test("When given an object, key and value the function addKeyValuePairToObject will add the new key value pair to the object", () => {
  const actual = addKeyValuePairToObject(
    {
      name: "cutie",
      age: 38,
    },
    "hobby",
    "eating tofu"
  );
  const expected = {
    name: "cutie",
    age: 38,
    hobby: "eating tofu",
  };

  expect(actual).toStrictEqual(expected);
});

test("When given an object, key and value the function addKeyValuePairToObject will add the new key value pair to the object", () => {
  const actual = addKeyValuePairToObject(
    {
      favnum: 8,
      cute: true,
    },
    "fact",
    "is super cute"
  );
  const expected = {
    favnum: 8,
    cute: true,
    fact: "is super cute",
  };

  expect(actual).toStrictEqual(expected);
});

test("When given a number, the throwErrorIfEven function will throw an error if the number is even, else it should return false", () => {
  const actual = throwErrorIfEven(4);
  const expected = `Error, 4 is even!`;

  expect(() => {
    actual;
  }).toThrow(expected);
});

test("When given a number, the throwErrorIfEven function will throw an error if the number is even, else it should return false", () => {
  const actual = throwErrorIfEven(3);
  const expected = false;

  expect(actual).toBe(expected);
});
