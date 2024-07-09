// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

const input = "025468";

const split = function (num) {
  const n = String(num);
  let result = "";
  for (let i = 0; i < n.length; i++) {
    result += n[i];
    if (i < n.length - 1) {
      if (isEven(n[i]) && isEven(n[i + 1])) {
        result += "-";
      }
    }
  }
  return result;
};

function isEven(n) {
  if (n % 2 === 0) return true;
  else return false;
}

const output = split(input);
console.log(input, output);
