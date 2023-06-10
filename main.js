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
let enemyW = 60;
let enemyVx = 50; 
let enemyY = 120;
let enemyX=70;
let enemyLives = 1;
let obstacles = [
    {x: Math.random() * 330 | 0, y: -30, speed: 1},
    {x: Math.random() * 330 | 0, y: -30, speed: 2},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.5},
    {x: Math.random() * 330 | 0, y: -30, speed: 1.4}
];


const bulletW = 10;
const bulletH = 15

class bullet {
    constructor(x,y) {
        this.hp = 1
        this.t0 = t
        this.x0 = x
        this.y0 = y
        this.vx = 0
        this.vy = -90
        this.x = this.x0
        this.y = this.y0
        this.el = document.createElement("div")
        this.el.classList.add("bullet")
        document.body.appendChild(this.el)
    }

    move() {
        const dt = t - this.t0
        this.x = this.x0 + this.vx * dt
        this.y = this.y0 + this.vy * dt
        if ((this.y<0) || (this.y>400)) {
            this.hp = 0;
        }
    }

    collide(x,y,w,h) {
        if (
            (x-this.x <= bulletW)  && 
            (this.x-x <= w)  && 
            (y-this.y <= bulletH)  && 
            (this.y-y <= h)  
        ) {
            this.hp = 0;
            return true
        } else {
            return false
        }
    }

    show() {
        if (this.hp == 0) {
            this.el.style.visibility = 'hidden';
        }
        this.el.style.top = this.y + "px";
        this.el.style.left = this.x+ "px";
    }

    hide() {
        document.removeChild(this.el) 
    }


}



const spawnObstacle = (obstacle) => {
    obstacle.y = -30;
    obstacle.x = Math.random() * 330 | 0;
};let  = Math.sin(3,14);


const moveEnemy = () => {
    enemyX = enemyX  + enemyVx/TPS
    if (enemyX <=0) {
        enemyVx =50;
    } 
    if (enemyX >= 300) {
        enemyVx = -50;
    } 
};


const model = () => {
    t +=1.0/TPS


    
    
       
     
    for (let bullet of bullets) {
        bullet.move()
        if (bullet.collide(enemyX,enemyY, enemyW, enemyW)) {
            bullet.hide()
            console.log("hit")
        }
    }
     
    
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
    
    moveEnemy ();
    function checkHP(bullet) {
        if (bullet.hp > 0) {
            return true
        } else {
            return false
        }
    }

    // clean up bullets with hp <= 0 
    bullets = bullets.filter( (b)=>b.hp>0 )
    bullets = bullets.filter( checkHP )
};

const updateView = () => {
    obstacles.forEach((obstacle, index) => {
        document.getElementsByClassName("obstacle")[index].style.top = obstacle.y + "px";
        document.getElementsByClassName("obstacle")[index].style.left = obstacle.x + "px";
    });

    for (let bullet of bullets) {
        bullet.show()        
    }
    
    document.getElementById("player").style.top = playerY + "px";
    document.getElementById("player").style.left = playerX + "px";

    document.getElementById("enemy").style.top = enemyY + "px";
    document.getElementById("enemy").style.left = enemyX + "px";
 
}; 
console.log();
window.setInterval(updateView, 1000 / 60);
window.setInterval(model, 1000 / 60);




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
  
addEventListener("mousedown", (event) => {
    bullets.push(new bullet(playerX, playerY))
});

const startButton = document.getElementById("start-button");
const settingsButton = document.getElementById("settings-button");
const helpButton = document.getElementById("help-button");

startButton.addEventListener("click", () => { window.location.href = "index.html"
});

settingsButton.addEventListener("click", () => {

});

helpButton.addEventListener("click", () => {
 
});
