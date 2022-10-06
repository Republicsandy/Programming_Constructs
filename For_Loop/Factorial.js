//Factorial program
var prompt = require("prompt-sync")();
//gets the input from user
let number = parseInt(prompt("Enter a number: "));
if (number < 0) {
  console.log("Number is less than 0");
} else if (number === 0) {
  console.log("Factorial of " + number + " is 1");
} else {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log("The factorial is " + factorial);
}