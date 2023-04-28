let x=[30, 160,20,10]
<<<<<<< HEAD
let obstacles = [
    {x: Math.random() * 330 | 0, y: -30, speed: 1},
    {x: Math.random() * 330 | 0, y: -30, speed: 2},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.5},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.4}
];

let playerX = 150;
let playerY = 300;
let playerV = -1;
let obstacleW = 30;
let playerW = 50;
let lives = 5;
const speed = 5; 
let x1 = 50;
let y1 = 50;


const Moveleft = useKeyPress('a')
const MoveUp = useKeyPress('w')
const MoveDown = useKeyPress('s')
const MoveRight = useKeyPress('d')

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
            lives--;
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
    document.getElementById("lives").innerHTML = "heart ".repeat(lives);
};
document.addEventListener('keydown', function (event) {
    switch(event.keyCode) {
        case 87:
        y1 -= speed;
        break;
        case 83:
            y += speed;
            break;
            case 68:
                x1 += speed;
                break;
    }
});

function drawObject(){    
}
window.setInterval(updateView, 1000 / 60);
window.setInterval(moveObstacles, 1000 / 60);




 
=======
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

class bullet {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.el = document.createElement("div")
        this.el.classList.add("bullet")
        document.body.appendChild(this.el)
    }
}


function spawnObstacles(i) {
    y[i] = -30
    x[i] =  Math.random()*330 | 0
} 
 
function model() {
    t += 1.0 / TPS

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
            spawnObstacles(i)
        }
 
        if (y[i]>360) {
            spawnObstacles(i)
        }
    }
}
 
function fillString(character, len) {
    return new Array(len + 1).join( character );
}
 
function view() {
    for(let i=0; i<4; i++) {
        obs=document.getElementsByClassName("obstacle")[i]
        obs.style.top  = y[i] +"px"
        obs.style.left = x[i] +"px"
    }
    obs=document.getElementById("player")
    obs.style.top  = playerY +"px"
    obs.style.left = playerX +"px"
 
    document.getElementById("lives").innerHTML = fillString("heart ", lives)

    for (const b of bullets) {
        b.el.style.top = b.y + "px"
        b.el.style.left = b.x + "px"
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
  
>>>>>>> 5820c20d0d3bad009a1a7162df582087dab73a62
