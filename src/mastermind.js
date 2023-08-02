const realSecret = ["yellow", "blue", "red", "orange"];

/**
 * Mastermind is a game where you have to find a secret code
 * @param proposition is an array of colors of the lenght of the secret
 * @param secret is the answer to find, by default it's realSecret
 * @returns { misplaced: number, wellplaced: number }
 * @example mastermind(["blue", "red", "yellow", "green"]) // { misplaced: 0, wellplaced: 2 }
 */
function mastermind(proposition, secret = realSecret) {
  const result = { misplaced: 0, wellplaced: 0 };
  // Do the logic here
  return result;
}

module.exports = mastermind;
