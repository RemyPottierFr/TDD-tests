/**
 * Reduces an array of objects by category
 * @param arr is an array of objects
 * @example reduceByCategory([{ category: "a", value: 1 }, { category: "b", value: 2 }, { category: "a", value: 3 }]) // [{ category: "a", value: 4 }, { category: "b", value: 2 }]
 */
function reduceByCategory(arr) {
  return arr.reduce((acc, value) => {
    let categoryExist = acc.find((item) => item.category === value.category);
    if (categoryExist) {
      categoryExist.value += value.value;
    } else {
      acc.push(value)
    }
    return acc
  }, [])
}

module.exports = reduceByCategory;
