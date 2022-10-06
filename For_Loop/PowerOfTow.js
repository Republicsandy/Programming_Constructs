//The program prints the power of 2 table
var prompt = require("prompt-sync")();
let n = prompt("Enter a number ");
var result = "";
for (let i = 1; i <= n; i++) {
  result += "2 ^ " + i + " = " + Math.pow(2, i) + "\n";
}
console.log(result);