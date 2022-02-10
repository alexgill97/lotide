const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected,  `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

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

const eqObjects = function(object1, object2) {
  let objEq = true
  for (let obj1Key in object1) {
    if (object1[obj1Key].isArray() || object2[obj1Key].isArray)
    if(object1[obj1Key] !== object2[obj1Key]) {
      objEq = false
    }
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    objEq = false
  }
  return objEq
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false