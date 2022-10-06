//print the words of numbers from 1's to 1000's
var prompt = require("prompt-sync")();
let number = prompt("Enter a number as 1,10,100,... ");
switch (number) {
  case "1":
    console.log("Unit");
    break;
  case "10":
    console.log("Tens");
    break;
  case "100":
    console.log("Hundreds");
    break;
  case "1000":
    console.log("Thousands");
    break;
  case "10000":
    console.log("Ten thousands");
    break;
  case "100000":
    console.log("Lakhs");
    break;
  default:
    console.log("Enter a valid number as 1,10,100,...!");
    break;
}