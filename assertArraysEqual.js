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