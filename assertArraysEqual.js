const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) === true ? console.log('✅✅✅Assertion Passed') : console.assert('🛑🛑🛑Assertion Failed')   
  };

  module.exports = assertArraysEqual;