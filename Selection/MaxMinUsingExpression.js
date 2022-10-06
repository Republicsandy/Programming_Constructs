//print maximum and minimum for arithmetic expression results
//requires prompt-async package
var prompt = require("prompt-sync")();
//Gets the data from user
var minimum = 0;
var maximum = 0;
let number1 = parseInt(prompt("Enter number1 "));
let number2 = parseInt(prompt("Enter number2 "));
let number3 = parseInt(prompt("Enter number3 "));
let result1 = (number1 + number2) * number3;
let result2 = (number1 % number2) + number3;
let result3 = (number3 + number1) / number2;
let result4 = number1 * number2 + number3;
if (result1 < result2 && result1 < result3 && result1 < result4) {
  minimum = result1;
} else if (result2 < result3 && result2 < result4) {
  minimum = result2;
} else if (result3 < result4) {
  minimum = result3;
} else {
  minimum = result4;
}

if (result1 > result2 && result1 > result3 && result1 > result4) {
  maximum = result1;
} else if (result2 > result3 && result2 > result4) {
  maximum = result2;
} else if (result3 > result4) {
  maximum = result3;
} else {
  maximum = result4;
}
console.log(
  "The numbers are " +
    number1 +
    " " +
    number2 +
    " " +
    number3 +
    "\nResult of 1st expression : " +
    result1 +
    "\nResult of 2nd expression : " +
    result2 +
    "\nResult of 3rd expression : " +
    result3 +
    "\nResult of 4th expression : " +
    result4 +
    "\nMinimum result : " +
    minimum +
    "\nMaximum result : " +
    maximum
);