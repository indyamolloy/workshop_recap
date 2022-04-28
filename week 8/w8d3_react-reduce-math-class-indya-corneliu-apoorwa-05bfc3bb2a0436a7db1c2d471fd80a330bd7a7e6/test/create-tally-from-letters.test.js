import {
  expect,
  it,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { createTallyFromLetters } from "../index.js";

const cases = [
  { letters: ["H", "C"], expected: { H: 1, C: 1 } },
  { letters: ["R", "s", "j"], expected: { R: 1, s: 1, j: 1 } },
  { letters: ["L", "C"], expected: { L: 1, C: 1 } },
  { letters: ["D"], expected: { D: 1 } },
  { letters: ["g", "s", "o"], expected: { g: 1, s: 1, o: 1 } },
  {
    letters: ["W", "p", "E", "F", "Y", "x", "j", "N"],
    expected: { W: 1, p: 1, E: 1, F: 1, Y: 1, x: 1, j: 1, N: 1 },
  },
  { letters: ["z"], expected: { z: 1 } },
  {
    letters: ["S", "D", "i", "C", "V", "s", "b", "n"],
    expected: { S: 1, D: 1, i: 1, C: 1, V: 1, s: 1, b: 1, n: 1 },
  },
  {
    letters: ["F", "x", "r", "I", "D"],
    expected: { F: 1, x: 1, r: 1, I: 1, D: 1 },
  },
  { letters: ["t", "A", "f", "U"], expected: { t: 1, A: 1, f: 1, U: 1 } },
  {
    letters: [
      "d",
      "g",
      "p",
      "u",
      "t",
      "R",
      "v",
      "n",
      "x",
      "g",
      "r",
      "l",
      "k",
      "x",
      "h",
      "u",
      "p",
      "A",
      "q",
      "v",
      "c",
      "i",
      "R",
      "J",
      "G",
      "w",
      "s",
      "L",
      "Q",
      "F",
      "j",
      "T",
      "i",
      "v",
      "M",
      "o",
      "T",
    ],
    expected: {
      d: 1,
      g: 2,
      p: 2,
      u: 2,
      t: 1,
      R: 2,
      v: 3,
      n: 1,
      x: 2,
      r: 1,
      l: 1,
      k: 1,
      h: 1,
      A: 1,
      q: 1,
      c: 1,
      i: 2,
      J: 1,
      G: 1,
      w: 1,
      s: 1,
      L: 1,
      Q: 1,
      F: 1,
      j: 1,
      T: 2,
      M: 1,
      o: 1,
    },
  },
  {
    letters: [
      "n",
      "T",
      "f",
      "V",
      "E",
      "q",
      "c",
      "p",
      "j",
      "P",
      "a",
      "d",
      "R",
      "z",
      "Y",
      "S",
      "f",
      "j",
      "M",
      "O",
      "E",
    ],
    expected: {
      n: 1,
      T: 1,
      f: 2,
      V: 1,
      E: 2,
      q: 1,
      c: 1,
      p: 1,
      j: 2,
      P: 1,
      a: 1,
      d: 1,
      R: 1,
      z: 1,
      Y: 1,
      S: 1,
      M: 1,
      O: 1,
    },
  },
  {
    letters: [
      "C",
      "O",
      "n",
      "M",
      "i",
      "s",
      "R",
      "A",
      "B",
      "Q",
      "z",
      "A",
      "v",
      "A",
      "n",
      "X",
      "A",
      "d",
      "z",
      "d",
      "u",
      "f",
      "p",
      "D",
      "V",
      "q",
      "F",
      "v",
      "q",
      "F",
      "v",
      "l",
      "M",
      "m",
      "K",
      "y",
      "k",
      "u",
      "x",
      "O",
      "c",
      "I",
      "I",
      "C",
      "n",
      "q",
      "l",
      "d",
      "v",
    ],
    expected: {
      C: 2,
      O: 2,
      n: 3,
      M: 2,
      i: 1,
      s: 1,
      R: 1,
      A: 4,
      B: 1,
      Q: 1,
      z: 2,
      v: 4,
      X: 1,
      d: 3,
      u: 2,
      f: 1,
      p: 1,
      D: 1,
      V: 1,
      q: 3,
      F: 2,
      l: 2,
      m: 1,
      K: 1,
      y: 1,
      k: 1,
      x: 1,
      c: 1,
      I: 2,
    },
  },
  {
    letters: [
      "z",
      "S",
      "S",
      "n",
      "f",
      "z",
      "a",
      "F",
      "X",
      "O",
      "M",
      "p",
      "l",
      "T",
      "S",
      "m",
      "K",
      "Y",
      "D",
      "H",
      "s",
      "W",
      "e",
      "d",
      "N",
    ],
    expected: {
      z: 2,
      S: 3,
      n: 1,
      f: 1,
      a: 1,
      F: 1,
      X: 1,
      O: 1,
      M: 1,
      p: 1,
      l: 1,
      T: 1,
      m: 1,
      K: 1,
      Y: 1,
      D: 1,
      H: 1,
      s: 1,
      W: 1,
      e: 1,
      d: 1,
      N: 1,
    },
  },
  { letters: [], expected: {} },
];
describe.each(cases)(
  "createTallyFromLetters($letters)",
  ({ letters, expected }) => {
    let spy;
    let actual;

    beforeEach(() => {
      spy = jest.spyOn(Array.prototype, "reduce");
      actual = createTallyFromLetters(letters);
    });

    afterEach(() => {
      spy.mockRestore();
    });

    it(`should return ${JSON.stringify(expected)}`, () => {
      expect(actual).toStrictEqual(expected);
    });

    // Normally we shouldn't test implementation details, but probably want to make sure
    // the implementation at least uses Array.prototype.reduce (and not, say, a for loop which is valid
    // but defeats the point of the exercise).
    it("should use Array.prototype.reduce", () => {
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should pass in an object to Array.prototype.reduce", () => {
      const [args] = spy.mock.calls;
      expect(args?.[1]).toStrictEqual(expect.objectContaining({})); // Can't be more explicit/strict than this since their implementation might mutate the initial value in-place.
    });

    it("should have Array.prototype.reduce return the expected value", () => {
      expect(spy).toHaveReturnedWith(expected);
    });
  }
);
