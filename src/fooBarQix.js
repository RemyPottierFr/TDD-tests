/**
 * fooBarQix is a function that returns Foo, Bar or Qix if the number is divisible by 3, 5 or 7
 * @param number is the number to parse
 * @returns Foo, Bar or Qix if the number is divisible by 3, 5 or 7
 */
function fooBarQix(number) {
  // Do the logic here
  return number;
}

/**
 * multipleFooBarQix is a function that returns an array of Foo, Bar or Qix if the number is divisible by 3, 5 or 7
 * @param limit is the number to process
 * @returns [1, 2, "FooFoo", 4, "BarBar", "Foo", "QixQix", 8, "Foo", "Bar"]
 */
function multipleFooBarQix(limit) {
  const result = [];
  for (let i = 1; i <= limit; i++) {
    result.push(fooBarQix(i));
  }
  return result;
}

module.exports = { fooBarQix, multipleFooBarQix };
