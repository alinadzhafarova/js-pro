let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let btnStart = document.querySelector('#start-btn');
let btnStop = document.querySelector('#stop-btn');

let figureArr = [];
let score = 0;

function Square(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = '#' + Math.random().toString(16).substr(-6);

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.y += this.speed;

    };
}

function createGame() {
    let x = Math.random() * 620;
    let speed = Math.random() * 0.7 + 0.3;
    let gameSquare = new Square(x, -20, 20, 20, speed);

    figureArr.push(gameSquare);
    document.querySelector('#score').textContent = score;
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    figureArr = figureArr.filter((element) => {
        element.draw();
        return element.y < canvas.width;
    });
    requestAnimationFrame(animate);
}

let infinity;

btnStart.addEventListener('click', () => {
    if (figureArr.length === 0) {
        let randomInterval = Math.random() * 1200 + 200;
        infinity = setInterval(createGame, randomInterval);
        score = 0;
    }
});

btnStop.addEventListener('click', () => {
    figureArr = [];
    clearInterval(infinity);
});

canvas.addEventListener('click', (event) => {
    for (let square of figureArr) {
        if (square.x <= event.offsetX &&
            square.y <= event.offsetY &&
            (square.height + square.x) >= event.offsetX &&
            (square.width + square.y) >= event.offsetY) {
            figureArr.splice(figureArr.indexOf(square), 1);
            score += 1;
        }
    }
});

document.body.onload = animate;