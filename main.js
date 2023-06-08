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
let bullets = [];
let level = 1
const heart = '<img src="img/heart.webp"></img>'
let hearts = ""
let enemyY0 =60;
let enemyX0 = 180;
let enemyW = 60;
let enemyY;
let enemyX;
let obstacles = [
    {x: Math.random() * 330 | 0, y: -30, speed: 1},
    {x: Math.random() * 330 | 0, y: -30, speed: 2},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.5},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.4}
];


const spawnObstacle = (obstacle) => {
    obstacle.y = -30;
    obstacle.x = Math.random() * 330 | 0;
};let  = Math.sin(3,14);


const moveEnemy = (enemy) => {
    
    enemyX = enemyX0 + enemyY0 + 10*t + Math.sin(t)
};

const model = () => {
    t +=1.0/TPS
    //обьявление анонимной функции модель
    obstacles.forEach(obstacle => {
        //анонимная функция для каждого препятствия  
        obstacle.y = obstacle.y+ obstacle.speed;
        //у препядствия добавляется к скорости препядствия 
        if ((playerX - obstacle.x < obstacleW) &&
        //если Х игрока - Х препядствия меньше чем ширина препядствия И
            (obstacle.x - playerX < playerW) &&
            //Х препядсвтия - Х игрока меньше чем ширина игрока И
            (playerY - obstacle.y < obstacleW) &&
            //У игрока - У препядствия меньше чем ширина препядствия И
            (obstacle.y - playerY < playerW)) {
                //У препядсвия - У игрока меньше чем ширина игрока                
            lives = lives-1;
            if (lives <= 0) {
                // если в переменной lives меньше или 0 то
                window.location.href = "gameover.html";
                // открыть страница gamepver.html
            }
            spawnObstacle(obstacle);
            //выполнение функции spawnObstacle 
        }
        if (obstacle.y > 360) {
            // если У препядствия меньше чем 360 то
            spawnObstacle(obstacle);
            //выполнить функию spawnObstacle
        }
    });
    moveEnemy (enemy);
    if (enemyX <=0) {
        enemyX =0;
    } else {
              enemyX -= 10; 
    }
    if (enemyX >= 300) {
        enemyX = 300;
    } else{
        enemyX += 10;
    }

    if (enemy.x > 290) {
        moveEnemy(enemy);
    }
  
};

function fillString(character, len) {
    return new Array(len + 1).join( character );
}
const updateView = () => {
    obstacles.forEach((obstacle, index) => {
        document.getElementsByClassName("obstacle")[index].style.top = obstacle.y + "px";
        document.getElementsByClassName("obstacle")[index].style.left = obstacle.x + "px";
    });
    
    
    document.getElementById("player").style.top = playerY + "px";
    document.getElementById("player").style.left = playerX + "px";

    document.getElementById("enemy").style.top = enemyY + "px";
    document.getElementById("enemy").style.left = enemyX + "px";
 
}; 
console.log();
window.setInterval(updateView, 1000 / 60);
window.setInterval(model, 1000 / 60);

let bulletX = playerX;
let bulletY = playerY;

class bullet {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.el = document.createElement("div")
        this.el.classList.add("bullet")
        document.body.appendChild(this.el)
    }
}

addEventListener("mousedown", (event) => {
    bullets.push(new bullet(playerX, playerY))
});

addEventListener("keydown", (event) => {
    console.log(event.key)
    if (event.key === "a" || event.key === "ArrowLeft") {
        if (playerX <=0) {
            playerX =0;
        } else {
                  playerX -= 10;

        }
     
    } else if (event.key === "d" || event.key === "ArrowRight") {
        if (playerX >= 310) {
            playerX = 310;
        } else{
            playerX += 10;
        }
      
    }
  });
  
