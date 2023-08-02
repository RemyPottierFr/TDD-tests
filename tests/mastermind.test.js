const mastermind = require("../src/mastermind");

// const realSecret = ["yellow", "blue", "red", "orange"];

describe("mastermind", () => {
  test("should return all good values", () => {
    expect(mastermind(["yellow", "blue", "red", "orange"])).toStrictEqual({
      misplaced: 0,
      wellplaced: 4,
    });
  });
  test("should return all misplaced values", () => {
    expect(mastermind(["orange", "red", "blue", "yellow"])).toStrictEqual({
      misplaced: 4,
      wellplaced: 0,
    });
  });
  test("should return 2 misplaced and 2 wellplaced values", () => {
    expect(mastermind(["yellow", "blue", "orange", "red"])).toStrictEqual({
      misplaced: 2,
      wellplaced: 2,
    });
  });
  test("should return 1 misplaced with wrong proposition length", () => {
    expect(mastermind(["green", "purple", "yellow"])).toStrictEqual({
      misplaced: 1,
      wellplaced: 0,
    });
  });
  test("should return 0 misplaced and 0 wellplaced", () => {
    expect(
      mastermind(["green", "purple", "brown", "turquoise", "cream"])
    ).toStrictEqual({
      misplaced: 0,
      wellplaced: 0,
    });
  });
});
