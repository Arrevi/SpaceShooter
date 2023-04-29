let x=[30, 160,20,10]

let y=[50, 40, 10, 10]
let playerX = 150
let playerY = 300
let speeds= [1,2,1.5, 1.4]
let FPS = 60
let TPS = 60
let obstacleW = 30
let playerW =50
let lives = 3
let playerV = -1
let t = 0;
let bullets = []

let obstacles = [
    {x: Math.random() * 330 | 0, y: -30, speed: 1},
    {x: Math.random() * 330 | 0, y: -30, speed: 2},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.5},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.4}
];


const spawnObstacle = (obstacle) => {
    obstacle.y = -30;
    obstacle.x = Math.random() * 330 | 0;
};

const moveObstacles = () => {
    obstacles.forEach(obstacle => {
        obstacle.y += obstacle.speed;
        if ((playerX - obstacle.x < obstacleW) &&
            (obstacle.x - playerX < playerW) &&
            (playerY - obstacle.y < obstacleW) &&
            (obstacle.y - playerY < playerW)) {
            
            if (lives <= 0) {
                window.location.href = "gameover.html";
            }
            spawnObstacle(obstacle);
        }
        if (obstacle.y > 360) {
            spawnObstacle(obstacle);
        }
    });
};

const updateView = () => {
    obstacles.forEach((obstacle, index) => {
        document.getElementsByClassName("obstacle")[index].style.top = obstacle.y + "px";
        document.getElementsByClassName("obstacle")[index].style.left = obstacle.x + "px";
    });
    document.getElementById("player").style.top = playerY + "px";
    document.getElementById("player").style.left = playerX + "px";
    document.getElementById("lives").innerHTML = "❤️rt ".repeat(lives);
};

window.setInterval(updateView, 1000 / 60);
window.setInterval(moveObstacles, 1000 / 60);

class bullet {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.el = document.createElement("div")
        this.el.classList.add("bullet")
        document.body.appendChild(this.el)
    }
}

 
window.setInterval(view,  1000/FPS)
window.setInterval(model, 1000/TPS)



addEventListener("mousedown", (event) => {
    bullets.push(new bullet(playerX, playerY))
});

addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "ArrowLeft") {
     
      playerX -= 10;
    } else if (event.key === "d" || event.key === "ArrowRight") {
     
      playerX += 10;
    }
    updatePlayerPosition();
  });
  

