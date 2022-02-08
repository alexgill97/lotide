const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected,  `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

function head(arr) {
  return arr[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");