//Gambler problem
var initialAmount = 100;
var Bet = 1;
var betmade = 0;
var wonBets = 0;
var amount = initialAmount;
while(amount>0 && amount<200){
    var random = Math.floor(Math.random() * 2);
    if(random == 0){
        amount-=Bet;
        betmade++;
    }
    else{
        amount+=Bet;
        betmade++;
        wonBets++;
    }
}
if(amount == 200){
console.log("The amount balance : "+amount+"\nBets Made "+betmade+"\nWon Bets "+wonBets);
}else{
    console.log("The amount balance : "+amount+"\nBets Made "+betmade+"\nWon Bets "+wonBets);
}