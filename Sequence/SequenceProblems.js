//Usecase 1 - generate a random number
console.log("***************************************");
var randomValue =Math.floor(Math.random()*10);
console.log("Random number between 0 and 10 is :"+randomValue);
console.log("***************************************")
//Usecase 2 - Generate a random number for dice
var diceValue =Math.floor(Math.random()*6)+1;
console.log("Random number between 1 and 6 for dice is :"+diceValue);
console.log("***************************************");
//Usecase 3 - Add two random dice numbers
var diceValue2 = Math.floor(Math.random()*6)+1;
console.log("Random second number between 1 and 6 for dice is :"+diceValue2);
var result = diceValue+diceValue2;
console.log("The added dice numbers is :"+result);
console.log("***************************************");
//Usecase 4 - Find 5 random 2 digit value and their sum with average
var sum = 0;
for(var i = 1;i<=5;i++)
{
    let number = Math.floor(Math.random()*(100-10 +1))+10
    console.log(i +" number is : "+number);
    sum+=number;
}   
console.log("The sum is : "+sum);
console.log("The average is :" +sum/5);
console.log("***************************************");
//Usecase 5: Unit Conversion
var inches = 42;
const OneFt_inc = 12;
const OneFt_meters = 0.3048;
const OneSqrMeter_Acres = 0.000247105;
console.log("42 inches in feets : "+inches/OneFt_inc);
console.log("***Rectangular Plot of 60 ft x 40 ft in area***");
var length = 60;
var breath = 40;
var area = length*breath;
console.log("The area of the rectangular plot in feet is : "+area);
var areaInMeters = area*OneFt_meters;
console.log("The area of the rectangular plot in area is : "+areaInMeters);
console.log("***Calculate area for 25 such plots***");
var totalArea = areaInMeters*25;
console.log("The area of 25 such plots in meters is : "+totalArea);
console.log("The area of 25 such plots in acres is : "+(totalArea*OneSqrMeter_Acres).toFixed(2));