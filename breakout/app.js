const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const bordWidth = 560
const bordHeight = 300
const ballDiameter = 20
let timerId
let xDirection = -2
let yDirection = 2 
let score = 0

const userStart = [230, 10]
let curentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart


//create block
class Block{
    constructor(xAsis, yAxis){
        this.bottomLeft = [xAsis, yAxis]
        this.bottomRight = [xAsis + blockWidth, yAxis]
        this.topLeft = [xAsis, yAxis + blockHeight]
        this.topRight = [xAsis + blockWidth, yAxis + blockHeight]
    }
}

//blocksss
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

   
]
// draw blockss
function addBlocks(){
    for(let i =0; i< blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] +'px'
        block.style.bottom = blocks[i].bottomLeft[1]+'px'
        grid.appendChild(block)

    }
}
addBlocks()


//add user

const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

//drawUser
function drawUser(){
    user.style.left = curentPosition[0] + 'px'
    user.style.bottom = curentPosition[1] + 'px'
}

//draw ball
function drawBall(){
    ball.style.left = ballCurrentPosition[0]+'px'
    ball.style.bottom = ballCurrentPosition[1]+'px'
}

//move user
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft': 
            if(curentPosition[0]>0){
                curentPosition[0] -= 10
                drawUser()
            }
            break;
    }
    switch(e.key){
        case 'ArrowRight':
            if(curentPosition[0]<bordWidth-blockWidth){
                curentPosition[0] += 10
                drawUser()
            } 
            break;
    }
}
document.addEventListener('keydown', moveUser)

// add ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//move ball
function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}
timerId = setInterval(moveBall, 30)

//check for collision
function checkForCollisions(){
    //check for block position
    for(let i =0; i<blocks.length; i++){
        if(
            (ballCurrentPosition[0]>blocks[i].bottomLeft[0] &&
                ballCurrentPosition[0]<blocks[i].bottomRight[0])&&
            ((ballCurrentPosition[1] + ballDiameter)>blocks[i].bottomLeft[1]&&
            ballCurrentPosition[1]<blocks[i].topLeft[1])
        ){
            const allBlock = Array.from(document.querySelectorAll('.block'))
            allBlock[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDirection()
            score ++
            scoreDisplay.innerHTML = score

            //chekc for win
            if(blocks.length === 0){
                scoreDisplay.innerHTML = 'you win'
                clearInterval(timerId)
                document.removeEventListener('keydown', moveUser)
            }

        }
    }

    //check for wall collisions
    if(ballCurrentPosition[0]>= (bordWidth - ballDiameter) || 
    ballCurrentPosition[1]>= (bordHeight - ballDiameter) ||
    ballCurrentPosition[0] <=0 
    ){
        changeDirection()
    }

    //check for user colision
    if((ballCurrentPosition[0]>curentPosition[0]&& 
        ballCurrentPosition[0]<curentPosition[0]+blockWidth)&&
        (ballCurrentPosition[1]>curentPosition[1] &&
        ballCurrentPosition[1]<curentPosition[1]+blockHeight)
        ){
            changeDirection()
        }




    //check for game over
    if (ballCurrentPosition[1] <= 0){
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'you Lose'
        document.removeEventListener('keydown', moveUser)

    }

}

function changeDirection(){
    if(xDirection === 2 && yDirection ===2){
        yDirection = -2
        return
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2
        return
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2
        return
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2
        return
    }
}