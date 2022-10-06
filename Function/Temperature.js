//Conversion of temperature using functions and case statement
var prompt = require("prompt-sync")();
//function to get temperature and call celsius and fahrenheit function
function GetTemperature() {
  let options = prompt("Enter 1 for degC \nEnter 2 for degF\n");
  switch (options) {
    case "1":
      let input = prompt("Enter the fahrenheit ");
      result = fahrenheitToCelsius(input);
      if (result >= 0 && result <= 100) {
        console.log("Between the freezing and boiling point " + result + " C");
      } else {
        console.log(
          "Not Between the freezing and boiling point " + result + " C"
        );
      }
      break;
    case "2":
      let input1 = prompt("Enter the Celsius ");
      result = celsiusToFahrenheit(input1);
      if (result >= 32 && result <= 212) {
        console.log("Between the freezing and boiling point " + result + " F");
      } else {
        console.log(
          "Not Between the freezing and boiling point " + result + " F"
        );
      }
      break;
  }
}
//fahrenheit to celsius function
function fahrenheitToCelsius(input) {
  return ((input - 32) * 5) / 9;
}
// celsius to fahrenheit function
function celsiusToFahrenheit(input) {
  return (input * 9) / 5 + 32;
}
GetTemperature();