//Given date find the day
var date = new Date();
//returns integer  0 for sunday and so on..
var day = date.getDay();
if(day == 0){
    console.log("Sunday");
}else if(day == 1){
    console.log("Monday");
}else if(day == 2){
    console.log("Tuesday");
}else if(day ==3){
    console.log("Wednesday");
}else if(day == 4){
    console.log("Thursday");
}else if(day == 5){
    console.log("Friday");
}else if(day == 6){
    console.log("Saturday");
}else{
    console.log("Invalid day");
}