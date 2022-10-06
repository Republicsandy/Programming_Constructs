//The program that finds prime factors
var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number: "));
var result = " ";
while (number % 2 == 0) {
  //result is for printing the final result by appending the factors
  result += 2 + " ";
  number /= 2;
}
for (let i = 3; i * i <= number; i++) {
  while (number % i == 0) {
    result += i + " ";
    number /= i;
  }
}
if (number > 2) {
  result += number;
}
console.log(result);