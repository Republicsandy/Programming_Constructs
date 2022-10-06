//Palindrome Checker and primenumber
var prompt = require("prompt-sync")();
//function to find primenumber
var number;
function CheckPrime() {
  number = prompt("Enter a number ");
  let isPrime = true;
  if (parseInt(number) === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (parseInt(number) > 1) {
    for (let i = 2; i < parseInt(number); i++) {
      if (parseInt(number) % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(number + " is a prime number");
    CheckPalindrome(number);
  } else {
    console.log(number + " is a not prime number");
  }
}
//function to check palindrome
function CheckPalindrome(number1) {
  var res1 = number1.split("").reverse().join("");
  if (res1 === number1) {
    console.log("Palindrome " + number1);
  } else {
    console.log("Not a Palindrome " + number1);
  }
}
CheckPrime();