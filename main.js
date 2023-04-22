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
    switch (event.key) {
      case "a":
        playerX -= 10; // move left
        break;
      case "d":
        playerX += 10; // move right
        break;
      case "w":
        playerY -= 10; // move up
        break;
      case "s":
        playerY += 10; // move down
        break;
    }
    updatePlayerPosition(); // update the player's position after each key press
  });
  
  function updatePlayerPosition() {
    // update the player's position in the DOM
    const playerEl = document.querySelector(".player");
    playerEl.style.transform = `translate(${playerX}px, ${playerY}px)`;
  }