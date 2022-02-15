const eqArrays = function(arr1, arr2) {
  let output = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return output;
};

module.exports = eqArrays;