'use strict';
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

function Square(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.r = Math.round(Math.random() * 255);
    this.g = Math.round(Math.random() * 255);
    this.b = Math.round(Math.random() * 255);
    this.rgba = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", 1)";

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.rgba;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.y += this.speed;
        ctx.closePath();
    };
}

function createGame() {
    let x = Math.random() * 620;
    let speed = Math.random() * 0.7 + 0.3;
    let gameSquare = new Square(x, -20, 20, 20, speed);

    arraySquares.push(gameSquare);
    document.querySelector('#score').textContent = 	score;
}

let arraySquares = [];
let score = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    arraySquares = arraySquares.filter((element) => {
        element.draw();
        return element.y < canvas.width;
    });
    requestAnimationFrame(animate);
}

let infinity;

btnStart.addEventListener('click', () => {
    if (arraySquares.length === 0) {
        let randomInterval = Math.random() * 1200 + 200;
        infinity = setInterval(createGame, randomInterval);
        score = 0;
    }
});

btnStop.addEventListener('click', () => {
    arraySquares = [];
    clearInterval(infinity);
});

canvas.addEventListener('click', (event) => {
    for (let square of arraySquares) {
        if (square.x <= event.offsetX &&
            square.y <= event.offsetY &&
            (square.height + square.x) >= event.offsetX &&
            (square.width + square.y) >= event.offsetY) {
            arraySquares.splice(arraySquares.indexOf(square), 1);
            score += 1;
        }
    }
});

document.body.onload = animate;