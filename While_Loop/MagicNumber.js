//Magic Number
var start = 0;
var end = 100;
var found = 0;
var letfoundNumber = 0;
var prompt = require('prompt-sync')();
//function to find the correct number
function CheckNumber(middle) {
  var options = parseInt(
    prompt(
      "Enter 1 if this is your number " +
        middle +
        "\nEnter 2 if your number is less than " +
        middle +
        "\nEnter 3 if your number is more than " +
        middle+"\n"
    )
  );
  switch (options) {
    case 1: {
      foundNumber = Math.round(parseInt(middle));
      found = 1;
      break;
    }

    case 2: {
      end = Math.round(parseInt(middle)) - 1;
      break;
    }

    case 3: {
      start = Math.round(parseInt(middle)) + 1;
      break;
    }
  }
}
//function to do binary search split
function ThinkNumber() {
    console.log("Think a number between 1 and 100");
  while (start <= end && found != 1) {
    let middle = (start + end) / 2;
    CheckNumber(Math.round(middle));
  }
  if (found == 1) {
    console.log("Your number is " + foundNumber);
  }
}
ThinkNumber();