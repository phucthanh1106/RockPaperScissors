const hand = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
  let rand = Math.random();
  if (rand <= 1/3) {
    return hand[0];
  } else if (rand <= 2/3) {
    return hand[1];
  } else {
    return hand[2];
  }
}

function getHumanChoice() {
  console.log(`You have 3 choices: ${hand[0]}, ${hand[1]}, ${hand[2]}`);
  let ans = window.prompt("Enter your choice:");

  while (!hand.includes(ans.toLowerCase())) {
    ans = window.prompt("Invalid choice, please enter your choice again:");
  }
  
  return ans.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    return "It's a tie!"
  } else if ((humanChoice == hand[0] && computerChoice == hand[2]) || (humanChoice == hand[1] && computerChoice == hand[0]) || (humanChoice == hand[2] && compterChoice == hand[1])) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`
  }
}

function playGame() {

  for (let round = 0;round < 3;round++) {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    playRound(human, computer);
  }
 
  console.log(`Computer Score: ${computerScore}`);  

  if (humanScore > computerScore) {
    return "You win the game!";
  } else {
    return "You lose the game!";
  }
}

playGame();
