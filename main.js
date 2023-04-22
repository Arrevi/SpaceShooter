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
  