/**
 * fooBarQix is a function that returns Foo, Bar or Qix if the number is divisible by 3, 5 or 7
 * @param number is the number to parse
 * @returns Foo, Bar or Qix if the number is divisible by 3, 5 or 7
 */
function fooBarQix(number) {
  const numSplited = number.toString().split('')
  let result = ""
  if (number % 3 === 0) {
    result += "Foo"
  }
  if (number % 5 === 0) {
    result += "Bar"
  }
  if (number % 7 === 0) {
    result += "Qix"
  }
  for (let i = 0; i < numSplited.length; i++) {
    if (numSplited[i] == 3) {
      result += "Foo"
    }
    if (numSplited[i] == 5) {
      result += "Bar"
    }
    if (numSplited[i] == 7) {
      result += "Qix"
    }
  }
  return result || number;
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
