// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]
"use strict";
const sampleArr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sampleArr);

const arraySort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        let t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
      }
    }
  }
  return arr;
};

const sortedArr = arraySort(sampleArr);
console.log(sortedArr);
