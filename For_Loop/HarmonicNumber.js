//Harmonic Number
var prompt = require("prompt-sync")();
let number = prompt("Enter the number ");
var result = "[ ";
var sum = 0;
for (let i = 1; i <= number; i++) {
  result += "1/" + i + " ";
  sum += 1 / i;
}
//fiexed rounds to two decim al points
result += " ] = " + sum.toFixed(2);
console.log(result);