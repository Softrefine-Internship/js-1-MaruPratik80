// Write a JavaScript program to clone an array.
"use strict";
const arr = [123, 143, 454, 123];
const clone = [];
console.log(arr, clone);

for (let i = 0; i < arr.length; i++) {
  clone.push(arr[i]);
}

console.log(arr, clone);
