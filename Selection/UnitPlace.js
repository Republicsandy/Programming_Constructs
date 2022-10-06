// for unit places for number between 1-10000
var prompt = require("prompt-sync")();
//gets user input
let number = prompt("Enter the number ");
if (number < 10) {
  console.log("Unit digit : " + number);
} else if (number >= 10 && number < 100) {
  let ones = number % 10;
  let tens = (number % 100) - ones;
  console.log("Unit digit : " + ones + "\n Tens digit : " + tens);
} else if (number >= 100 && number < 1000) {
  let ones = number % 10;
  let tens = (number % 100) - ones;
  let hundreds = (number % 1000) - tens - ones;
  console.log(
    "The number is : " +
      number +
      "\nUnit digit : " +
      ones +
      "\nTens digit : " +
      tens +
      "\nHundreds Digit : " +
      hundreds
  );
} else if (number >= 1000 && number < 10000) {
  let ones = number % 10;
  let tens = (number % 100) - ones;
  let hundreds = (number % 1000) - tens - ones;
  let thousands = (number % 10000) - hundreds - tens - ones;
  console.log(
    "The number is : " +
      number +
      "\nUnit digit : " +
      ones +
      "\nTens digit : " +
      tens +
      "\nHundreds Digit : " +
      hundreds +
      "\nThousands :" +
      thousands
  );
} else if (number >= 10000 && number < 100000) {
  let ones = number % 10;
  let tens = (number % 100) - ones;
  let hundreds = (number % 1000) - tens - ones;
  let thousands = (number % 10000) - hundreds - tens - ones;
  let tenThousands = (number % 100000) - thousands - hundreds - tens - ones;
  console.log(
    "The number is : " +
      number +
      "\nUnit digit : " +
      ones +
      "\nTens digit : " +
      tens +
      "\nHundreds Digit : " +
      hundreds +
      "\nThousands :" +
      thousands +
      "\nTen Thousands : " +
      tenThousands
  );
} else {
  console.log("Enter value between 1-10000");
}