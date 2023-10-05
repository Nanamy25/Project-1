var userChoiceRounds;
var userChoice;
var randomNumber;
var computerChoice;

userChoiceRounds = prompt("How many rounds do you want to play?");
var rounds = parseInt(userChoiceRounds);
var currentRound = 0;

while (currentRound < rounds){
userChoice = prompt("Do you pick rock, paper, scissors? (enter r, p, or s)");


// for(let i = 0; i < rounds; i++){ 
var randomNumber = Math.floor(Math.random()*3);
 if (randomNumber == 0) {computerChoice = "r"}
else if (randomNumber == 1) {computerChoice = "p"}
else {computerChoice = "s"}

if (userChoice == computerChoice) 
{alert ("You tied.")
} else if (
    (userChoice === "r" && computerChoice === "p") ||
    (userChoice === "s" && computerChoice === "r") ||
    (userChoice === "p" && computerChoice === "s") 
) {
    alert("You Lost. You picked " +userChoice +" which does not beat " +computerChoice)
} else {
    alert("You Won. You picked " +userChoice +" which beats " +computerChoice)
}
currentRound++;
}

