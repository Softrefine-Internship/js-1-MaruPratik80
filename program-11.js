// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

"use strict";

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const union = function (arr1, arr2) {
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr.includes(arr2[i])) {
      arr.push(arr2[i]);
    }
  }
  return arr.sort((a, b) => a - b);
};

const unionArr = union(arr1, arr2);
console.log(arr1, arr2, unionArr);
