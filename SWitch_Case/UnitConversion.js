//Unit conversion using switch statement
var prompt = require("prompt-sync")();
let options = prompt(
  "Enter 1 for Feet-Inch \nEnter 2 for feet-meter \nEnter 3 for inch-feet \nEnter 4 for Meter-Feet\n"
);
switch (options) {
  case "1":
    var feet = parseInt(prompt("Enter the feet "));
    console.log("Feet to inch : " + feet * 12);
    break;
  case "2":
    feet = parseInt(prompt("Enter the feet "));
    console.loglert("Feet to meters : " + feet * 0.3048);
    break;
  case "3":
    var inch = parseInt(prompt("Enter the inch "));
    console.log("inch to feet : " + inch * 0.0833333);
    break;
  case "4":
    var meter = parseInt(prompt("Enter the Meter "));
    console.log("meter to feet : " + meter * 3.28084);
    break;
  default:
    console.log("Enter valid Numbers");
    break;
}