let x1=[30, 160,20,10]
let y1=[50, 40, 10, 10];
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const playerWidth = 20;
const playerHeight = 20;
let playerX = canvasWidth / 2 - playerWidth / 2;
let playerY = canvasHeight - playerHeight - 10;
let playerSpeed = 5;
let playerV


function spawnMicrowave(i) {
  y[i] = -30
  x[i] =  Math.random()*330 | 0
} 

function model() {
for (let i=0; i<4; i++) {
  playerX += playerV
}

  for(let i=0; i<4; i++) {
      y[i] += speeds[i]

      if ( 
          (playerX - x[i] < obstacleW) &&
          (x[i] - playerX < playerW)   &&
          (playerY - y[i] < obstacleW) &&
          (y[i] - playerY < playerW)
      ) {
          lives-=1
          if (lives <= 0) {
              window.location.href = "gameover.html"
          }     
          spawnMicrowave(i)
      }

      if (y[i]>360) {
          spawnMicrowave(i)
      }
  }
}

let up = false,
    right = false,
    down = false,
    left = false,
    x = window.innerWidth/2-130/2,
    y = window.innerHeight/2-130/2
document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 38  || e.keyCode === 87  || e.keyCode === 90 ){
    up = true
  }
  if (e.keyCode === 39  || e.keyCode === 68 ){
    right = true
  }
  if (e.keyCode === 40  || e.keyCode === 83 ){
    down = true
  }
  if (e.keyCode === 37  || e.keyCode === 65 || e.keyCode === 81 ){
    left = true
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 38  || e.keyCode === 87 || e.keyCode === 90 ){
    up = false
  }
  if (e.keyCode === 39  || e.keyCode === 68 ){
    right = false
  }
  if (e.keyCode === 40  || e.keyCode === 83 ){
    down = false
  }
  if (e.keyCode === 37  || e.keyCode === 65 || e.keyCode === 81 ){
    left = false
  }
}
function gameLoop(){
  var div = document.querySelector('div')
  if (up){
    y = y - 10
  }
  if (right){
    x = x + 10
  }
  if (down){
    y = y + 10
  }
  if (left){
    x = x - 10
  }
  div.style.left = x+'px'
  div.style.top = y+'px'
  window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)

const enemyRadius = 20;
let enemies = [];

function createEnemies() {
  for (let i = 0; i< 5; 1++) {
    let enemyX = Math.floor(Math.random() * canvasWidth);
    let enemyY = Math.floor(Math.random() * 200) - 400;
    let enemySpeed = Math.floor(Math.random() * 3) + 1;
    enemies.push({
      x: enemyX,
      y: enemyY,
      speed: enemySpeed,
      destroyed: false
    });

  }
}
createEnemies()



const gameInterval = setInterval(gameLoop, 10);