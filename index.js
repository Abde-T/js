
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}
getComputerChoice();

function playerSelection(){
    playerSelection = window.prompt("choose one: Rock, Paper, or Scissors")
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice()
  playerSelection = playerSelection
  if (computerSelection === playerSelection) {
    return "draw";
  } else if (computerSelection === "Scissors" && playerSelection === "paper") {
    return "Computer wins";
  } else if (computerSelection === "Scissors" && playerSelection === "rock") {
    return "Player wins";
  } else if (computerSelection === "Rock" && playerSelection === "Paper") {
    return "Player wins";
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    return "Computer wins";
  } else if (computerSelection === "Paper" && playerSelection === "rock") {
    return "Computer wins";
  } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    return "Player wins";
  }
}

console.log(playRound())

function game() {
  for (let i = 0; i < 5; i++) {
    return playRound()
  }
}
console.log(game())
