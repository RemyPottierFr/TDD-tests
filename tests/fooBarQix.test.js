const { fooBarQix, multipleFooBarQix } = require("../src/fooBarQix");

describe("fooBarQix", () => {
  test("should return something", () => {
    expect(fooBarQix(1)).toBe(1);
  });
  // Some tests need to be added later to complete the TDD process
});

describe("multipleFooBarQix", () => {
  test("should return something", () => {
    expect(multipleFooBarQix(1)).toStrictEqual([1]);
  });
  // Some tests need to be added later to complete the TDD process
});
