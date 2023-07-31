const {
  stringReplacer,
  stringReplacerWithRegex,
} = require("../src/stringReplacer");

describe("stringReplacer", () => {
  test("should return a correct phrase", () => {
    expect(stringReplacer("hello world ${name}", { name: "lucas" })).toBe(
      "hello world lucas"
    );
  });
  test("should return a bad format phrase", () => {
    expect(stringReplacer("hello world ${name", { name: "lucas" })).toBe(
      "hello world ${name"
    );
  });
  test("should return the original word with wrong variable passed", () => {
    expect(stringReplacer("hello world ${name}", { lastname: "lucas" })).toBe(
      "hello world ${name}"
    );
  });
  test("should return multiple replaced words", () => {
    expect(
      stringReplacer(
        "hello world ${name} it's a sunny day in ${city} . I really love ${city} but i prefer ${cityPrefered} !",
        { name: "lucas", city: "Tours", cityPrefered: "Copenhage" }
      )
    ).toBe(
      "hello world lucas it's a sunny day in Tours . I really love Tours but i prefer Copenhage !"
    );
  });
});

describe("stringReplacer with regex", () => {
  test("should return multiple replaced words", () => {
    expect(
      stringReplacerWithRegex(
        "hello world ${name}, it's a sunny day in ${city}. I really love ${city} but i prefer ${cityPrefered} !",
        { name: "lucas", city: "Tours", cityPrefered: "Copenhage" }
      )
    ).toBe(
      "hello world lucas, it's a sunny day in Tours. I really love Tours but i prefer Copenhage !"
    );
  });
});
