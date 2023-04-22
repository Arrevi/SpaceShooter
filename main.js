let x=[30, 160,20,10]
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




 