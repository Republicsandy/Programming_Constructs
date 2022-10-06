//Palindrome Checker
//function to check palindrome
var prompt = require("prompt-sync")();
function CheckPalindrome() {
  var number1 = prompt("Enter Number1 ");
  var number2 = prompt("Enter Number2 ");
  var res1 = number1.split("").reverse().join("");
  var res2 = number2.split("").reverse().join("");
  if (res1 === number1) {
    console.log("Palindrome " + number1);
  } else {
    console.log("Not a Palindrome " + number1);
  }

  if (res2 === number2) {
    console.log("Palindrome " + number2);
  } else {
    console.log("Not a Palindrome " + number2);
  }
}
CheckPalindrome();