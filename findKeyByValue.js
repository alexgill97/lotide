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

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected,  `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

  const findKeyByValue = function(showList, reqShow) {
    for (show in showList) {
      if (showList[show] === reqShow) {
        return show
      }
    }
  }

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))