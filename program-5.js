/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
"use strict";

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;

const flowerbed3 = [0, 0, 1, 0, 0, 0, 1, 0, 0];
const n3 = 3;

const canPlanFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || i === 0) &&
      (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
    ) {
      flowerbed[i] = 1;
      n--;
      if (!n) {
        return true;
      }
    }
  }
  return false;
};

console.log(canPlanFlowers(flowerbed1, n1));
console.log(canPlanFlowers(flowerbed2, n2));
console.log(canPlanFlowers(flowerbed3, n3));
