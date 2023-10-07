var userChoiceRounds;
var userChoice;
var randomNumber;
var computerChoice;

userChoiceRounds = prompt("How many rounds do you want to play?");
var rounds = parseInt(userChoiceRounds);
var currentRound = 0;

let wins = 0;
let tied = 0;
let lost = 0;

while (currentRound < rounds){
    while (true) {
userChoice = prompt("Do you pick rock, paper, scissors? (enter r, p, or s)");
if (userChoice=== "r" || userChoice=== "p" ||userChoice=== "s") {
    break;
} else {
    alert("Wrong choice there buddy! Input r, p, or s!!")
}
}

 
var randomNumber = Math.floor(Math.random()*3);
 if (randomNumber == 0) {computerChoice = "r"}
else if (randomNumber == 1) {computerChoice = "p"}
else {computerChoice = "s"}

if (userChoice == computerChoice) 
{ 
    tied++;
    alert ("You tied.")
} else if (
    (userChoice === "r" && computerChoice === "p") ||
    (userChoice === "s" && computerChoice === "r") ||
    (userChoice === "p" && computerChoice === "s") 
) { 
    lost++;
    alert("You Lost. You picked " +userChoice +" which does not beat " +computerChoice)
} else { 
    wins++;
    alert("You Won. You picked " +userChoice +" which beats " +computerChoice)
}
currentRound++;
}


alert("You played " +userChoiceRounds +" rounds. In those rounds you won " +wins +" times, you tied " +tied +" times, you lost " +lost +" times")