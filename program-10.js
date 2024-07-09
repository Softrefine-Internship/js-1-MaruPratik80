// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]
"use strict";

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

const arrSum = function (arr1, arr2) {
  const maxLenght = arr1.length > arr2.length ? arr1.length : arr2.length;
  const arr = [];
  let sum;
  for (let i = 0; i < maxLenght; i++) {
    sum = (arr1[i] ? arr1[i] : 0) + (arr2[i] ? arr2[i] : 0);
    arr.push(sum);
  }
  return arr;
};

const sum = arrSum(arr1, arr2);
console.log(arr1, arr2, sum);
