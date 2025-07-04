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

  const resultDiv = document.querySelector("div#result");
  resultDiv.textContent = "You selected " + humanChoice + " and computer selected " + computerChoice;

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

function displayScore() {
  const scoreDiv = document.querySelector("div#score");
  scoreDiv.textContent = "Your score is " + humanScore + " and the computer's score is " + computerScore;

  const winnerDiv = document.querySelector("div#winner");
  winnerDiv.textContent = "";

  if (humanScore == 5) {
    winnerDiv.textContent = "You are the winner";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    winnerDiv.textContent = "Computer is the winner";
    humanScore = 0;
    computerScore = 0;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
    displayScore();
  });
});
