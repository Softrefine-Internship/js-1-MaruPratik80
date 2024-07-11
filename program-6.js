// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
"use strict";

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];

const merge = function (arr1, arr2) {
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr.includes(arr1[i])) arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr.includes(arr2[i])) arr.push(arr2[i]);
  }
  return arr;
};

const mergedArr = merge(arr1, arr2);
console.log(arr1, arr2);
console.log(mergedArr);
