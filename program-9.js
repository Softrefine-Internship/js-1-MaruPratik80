// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

"use strict";
const sample = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const findMostFrequent = function (arr) {
  const frequency = {};
  let maxFreq = 0;
  let mostFrequentItem;
  for (let i = 0; i < arr.length; i++) {
    if (!frequency[arr[i]]) frequency[arr[i]] = 1;
    else frequency[arr[i]]++;

    if (frequency[arr[i]] > maxFreq) {
      maxFreq = frequency[arr[i]];
      mostFrequentItem = arr[i];
    }
  }

  console.log(`${mostFrequentItem}, "${maxFreq} times"`);
};

findMostFrequent(sample);
