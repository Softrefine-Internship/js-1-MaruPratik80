// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
"use strict";

const arr1 = [3, 5, 1];
const arr2 = [4, 2];

const merge = function (arr1, arr2) {
  const arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
  }

  // SORTING
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
};

const mergedArr = merge(arr1, arr2);
console.log(arr1, arr2, mergedArr);
