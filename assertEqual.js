const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected,  `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;