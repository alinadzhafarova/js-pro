let element = document.createElement('h2');
element.id = "clock"
element.style.color = "black"
element.style.fontSize = "75px"

function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = checkTime(hours)
    minutes = checkTime(minutes);
    seconds = checkTime(seconds)
    element.innerHTML = "Время:" + hours + ":" + minutes + ":" + seconds;

}

function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
}

let watch = setInterval(getTime, 0);

document.body.appendChild(element)

let start = document.createElement('button');
start.id = "startTime";
start.innerHTML = "Start"
start.style.color = " green"
start.style.fontSize = "50px"

let stop = document.createElement('button');
stop.id = "stopTime";
stop.innerHTML = "Stop";
stop.style.color = "red"
stop.style.fontSize = "50px"
document.body.append(start, stop)


start.onclick = function () {
    watch = setInterval(getTime, 1000)
}

stop.onclick = function () {
    clearInterval(watch)
}
