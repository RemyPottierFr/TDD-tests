const { fooBarQix, multipleFooBarQix } = require("../src/fooBarQix");
const { multipleResultUpTo25 } = require("./constants/fooBarQixConstants");

describe("fooBarQix", () => {
  test("should return something", () => {
    expect(fooBarQix(1)).toBe(1);
  });
  test("should return FooFooFoo if the number is 33", () => {
    expect(fooBarQix(33)).toBe("FooFooFoo");
  });
  test("should return FooBar if the number is 51", () => {
    expect(fooBarQix(51)).toBe("FooBar");
  });
  test("should return BarFoo if the number is 53", () => {
    expect(fooBarQix(53)).toBe("BarFoo");
  });
  test("should return QixQixQix if the number is 77", () => {
    expect(fooBarQix(77)).toBe("QixQixQix");
  });
  test("should return FooBarFooBar if the number is 135", () => {
    expect(fooBarQix(135)).toBe("FooBarFooBar");
  });
  test("should return BarQixQixBar if the number is 175", () => {
    expect(fooBarQix(175)).toBe("BarQixQixBar");
  });
  test("should return FooQixFooBarQix if the number is 357", () => {
    expect(fooBarQix(357)).toBe("FooQixFooBarQix");
  });
  // Some tests need to be added later to complete the TDD process
});

describe("multipleFooBarQix", () => {
  test("should return something", () => {
    expect(multipleFooBarQix(1)).toStrictEqual([1]);
  });
  test("should return correct answers", () => {
    expect(multipleFooBarQix(25)).toStrictEqual(multipleResultUpTo25);
  });
  // Some tests need to be added later to complete the TDD process
});
