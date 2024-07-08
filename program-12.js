// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

"use strict";
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const diff = function (arr1, arr2) {
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) arr.push(arr2[i]);
  }
  return arr.sort((a, b) => a - b);
};

const diffArr = diff(arr1, arr2);
console.log(arr1, arr2, diffArr);
