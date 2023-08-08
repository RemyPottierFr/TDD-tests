/**
 * stringReplacer
 * @param string is the string to parse
 * @param args is an object containing all variable to replace
 * @example stringReplacer("hello world ${name}", { name: "lucas" }) // "hello world lucas"
 * @return a string with all variables replaced but if a tag is not found or if the format is wrong, the original word with tag is returned
 * @example stringReplacer("hello world ${name", { name: "lucas" }) // "hello world ${name"
 */
function stringReplacer(string, args) {
  // Do the logic here
  return string;
}

/**
 * Same as the previous function but with regex
 * @param string
 * @param args
 * @returns stringReplacer("hello world ${name}, it's a sunny day !", { name: "lucas" }) // "hello world lucas, it's a sunny day !"
 */
function stringReplacerWithRegex(string, args) {
  return string.replace(/\${(.*?)}/g, (match, tag) => {
    return args[tag] ? args[tag] : match;
  });
}

module.exports = { stringReplacer, stringReplacerWithRegex };
