//The program that finds whether the number is prime or not
var prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter a number: "));
let isPrime = true;
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number + " is a prime number");
  } else {
    console.log(number + " is a not prime number");
  }
}