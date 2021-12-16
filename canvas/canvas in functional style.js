function Figure(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function () {
        console.log("Я рисую фигуру")
    }
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color)
    this.x2 = x2;
    this.y2 = y2
    this.draw = function (context) {
        let ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
}



function  Rect(x,y,w,h,color){
    Figure.call(this,x,y,color)
    this.w = w;
    this.h = h;
    this.draw = function (context) {
        const ctx = context.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

}
function  Circle(x,y,r,color){
    Figure.call(this,x,y,color)
    this.r = r;
    this.draw = function (context) {
        const ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
}

function Canvas(id) {
    this.canvas = document.getElementById(id);

    this.add = function () {
        this.canvas = document.getElementById(id);
        for(let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}

const drawArea = new Canvas('canvasID');

const line1 = new Line(400, 300, 150, 400, 'green');
const line2 = new Line(425, 325, 175, 425, 'orange');

const circleSmall = new Circle(180, 140, 50, 'red');
const circleBig = new Circle(220, 210, 90, 'blue');


const rectGreen = new Rect(470, 225, 100, 200, 'red');
const rectRad = new Rect(505, 205, 180, 90, 'green');
const rectYellow = new Rect(650, 260, 100, 70, 'black');


drawArea.add(line1, line2);
drawArea.add(circleSmall, circleBig);
drawArea.add(rectGreen, rectRad, rectYellow);

for (let count = 0, x1 = 0, x2 = 20; x1 < 800; count++, x1 += 20, x2 +=20) {
    if (count % 2) drawArea.add(new Line(x1, 20, x2, 0, 'red'));
    else drawArea.add(new Line(x1, 0, x2, 20, 'red'));
}