const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected,  `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let result = {}

  for (const letter of sentence) {
    result[letter] ? result[letter] += 1 : result[letter] = 1
  }
  return result
}
