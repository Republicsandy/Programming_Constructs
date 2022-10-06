//To find min and max using if else
var temp = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
console.log("1 number is : " + temp);
var min = temp;
var max = temp;
for (let i = 2; i <= 5; i++) {
  //gives random number between 100 - 1000
  var random = Math.floor(Math.random() * (999 - 100)) + 100;
  console.log(i + " number is : " + random);
  if (random <= min) {
    min = random;
  } else if (random >= max) {
    max = random;
  }
}
console.log("The minimum number is : " + min);
console.log("The maximum number is : " + max);