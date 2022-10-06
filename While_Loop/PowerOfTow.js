//The program prints the power of 2 table while loop
var prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter a number "));
var result = "";
var i = 1;
//print table till the value is not equal to 256
while (i <= n && Math.pow(2, i) < 256) {
  result += "2 ^ " + i + " = " + Math.pow(2, i) + "\n";
  i++;
}
console.log(result);