const computerChoise =  document.getElementById('computer-choice');
const playerChoice = document.getElementById('User-choice');
const resultDisplay = document.getElementById('result');
const possibleChoises = document.querySelectorAll('button');
let userChoise
let compChoise
let result

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) =>{
  userChoise =  e.target.id
  playerChoice.innerHTML = userChoise
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random()*3)+1

  if(randomNumber === 1){
    compChoise = 'rock'
  }
  if(randomNumber === 2){
    compChoise = 'scissors'
  }
  if(randomNumber === 3){
    compChoise = 'paper'
  }
  computerChoise.innerHTML = compChoise
}

function getResult(){
  if(compChoise === userChoise){
    result = 'Draw'
  }
  if(compChoise === 'rock' && userChoise === "paper"){
    result = 'Player lost'
  }
  if(compChoise === 'rock' && userChoise === "scissors"){
    result = 'Player won'
  }
  if(compChoise === 'paper' && userChoise === "rock"){
    result = 'Player won'
  }
  if(compChoise === 'paper' && userChoise === "scissors"){
    result = 'Player lost'
  }
  if(compChoise === 'scissors' && userChoise === "paper"){
    result = 'Player won'
  }
  if(compChoise === 'scissors' && userChoise === "rock"){
    result = 'Player lost'
  }
  resultDisplay.innerHTML = result

}
