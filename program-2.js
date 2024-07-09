// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];
"use strict";
const nestArr = [1, 2, [3, 4], [5, [6, 7]]];

const arrFlatten = function (arr) {
  const flatArr = [];

  const flatten = function (nest) {
    for (let i = 0; i < nest.length; i++) {
      if (typeof nest[i] === "object") {
        flatten(nest[i]);
      } else {
        flatArr.push(nest[i]);
      }
    }
  };
  flatten(arr);

  return flatArr;
};

const flatArr = arrFlatten(nestArr);
console.log(flatArr);
