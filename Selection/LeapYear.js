//leap year program
//uses the prompt async packages
var prompt = require("prompt-sync")();
let year = prompt("Enter year ");
if (year >= 1000 && year < 10000) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " not a leap year");
  }
} else {
  console.log("enter valid year");
}