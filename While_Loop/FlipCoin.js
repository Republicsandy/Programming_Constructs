//Coin flip simualtion until one wins
var winTails = 0;
var winHeads = 0;
while (winHeads < 11 && winTails < 11) {
  var coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip == 0 && winHeads < 11) {
    winTails++;
  } else if (coinFlip == 1 && winHeads < 11) {
    winHeads++;
  }
}
if (winHeads == 11) {
  console.log("Heads wins");
} else {
  console.log("Tails wins");
}