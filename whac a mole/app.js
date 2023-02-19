const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let timerId = null
let currentTime = 10

function randomSquare(){
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random()*9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', ()=>{
    if(square.id == hitPosition ){
      result ++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole(){
 
  timerId = setInterval(randomSquare, 300)
}

moveMole()

function countDonw(){
 currentTime --
 timeLeft.textContent = currentTime

 if (currentTime == 0){
  clearInterval(countDonwTimerId)
  clearInterval(timerId)
  alert("game over! score is: " +result)
 }
}

let countDonwTimerId = setInterval(countDonw, 1000)