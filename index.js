const prompt = require("prompt-sync")();

//getting computer's choice
function getComputerChoice() {
  let random = Math.random();
  let choice = "";
  if (random >= 0 && random < 0.33) {
    choice = "rock";
  } else if (random >= 0.33 && random < 0.66) {
    choice = "paper";
  } else if (random >= 0.66 && random < 1) {
    choice = "scissors";
  }
  return choice;
}

//getting human's choice
function getHumanChoice() {
  // const prompt = require("prompt-sync")();
  let choice = prompt("Enter your choice (Rock || Paper || Scissors)").toLowerCase();

  if (
    choice == "rock" ||
    choice == "paper" ||
    choice == "scissors"
  ) {
    return choice;
  } else {
    console.log("Please only enter correct choice, (Rock, Paper or Scissors)");
    return getHumanChoice();
  }
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
 
  //game rules
    if (computerChoice == "rock" && humanChoice == "paper") {
    humanScore++;
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    computerScore++;
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore++;
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    humanScore++;
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    humanScore++;
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    computerScore++;
  } else {
      computerChoice = computerChoice + 0;
      humanChoice = humanChoice + 0;
  }

}
let n = prompt("How many rounds would u dare to play?");
for (let i = 0; i<n; i++){
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log(`Computer Choice: ${computerChoice} V/S Human Choice: ${humanChoice}`);
  playRound(computerChoice, humanChoice);
  console.log(`Computer Score: ${computerScore} V/S Human Score: ${humanScore}`);
}

console.log(`Computer: ${computerScore}`);
console.log(`You: ${humanScore}`);

if (computerScore > humanScore) {
  console.log("Computer Wins!");
}
else if (computerScore < humanScore) {
  console.log("Human Wins!");
}
else{
  console.log("It's a tie");
}

//---------------------------------------------------