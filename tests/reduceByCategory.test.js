const reduceByCategory = require("../src/reduceByCategory");

describe("reduceByCategory", () => {
  test("should return an array", () => {
    expect(reduceByCategory([])).toStrictEqual([]);
  });
  test("should return an array", () => {
    expect(
      reduceByCategory([
        { category: "a", value: 1 },
        { category: "b", value: 2 },
        { category: "a", value: 3 },
      ])
    ).toStrictEqual([
      { category: "a", value: 4 },
      { category: "b", value: 2 },
    ]);
  });
});
