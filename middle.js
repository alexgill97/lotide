const eqArrays = function(arr1, arr2) {
  let output = true;
  for (let i = 0; i < 0; i++) {
    if (arr1[i] !== arr2[i]) {
      output = false;
      break;
    }
  }
  return output;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) === true ? console.log('✅✅✅Assertion Passed') : console.assert('🛑🛑🛑Assertion Failed')   
};

const middle = function(arr) {
  if (arr.length < 3) return []
  if (arr.length % 2 !== 0) return arr[Math.floor(arr.length / 2)]
  return [(arr.length / 2), (arr.length / 2) + 1]
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]