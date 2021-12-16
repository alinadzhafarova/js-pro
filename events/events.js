let element = document.createElement('h2');
element.innerHTML = "События"
element.style.textAlign = "center"
document.body.appendChild(element)

let coordinatesX = document.createElement('p')
coordinatesX.id = "x"
coordinatesX.innerHTML = "X:"
document.body.append(coordinatesX)

let coordinatesY = document.createElement('p')
coordinatesY.id = "y"
coordinatesY.innerHTML = "Y:"
document.body.append(coordinatesY)


document.querySelector('body').onmousemove = function (event) {
    document.querySelector("#x").innerHTML ="X:" + event.clientX;
    document.querySelector("#y").innerHTML = "Y:" + event.clientY;
};


let block = document.createElement('div');
block.id = "box";
block.style.height = "400px"
block.style.width = "400px"
block.style.background = "red";
block.style.color = "white";
document.body.appendChild(block)

let text = document.createTextNode("Координаты внутри блока : ")
document.body.appendChild(text)


let coordinatesXInDiv = document.createElement("p");
coordinatesXInDiv.id = "xInDiv"
coordinatesXInDiv.innerHTML = "X:";

let coordinatesYInDiv = document.createElement("p");
coordinatesYInDiv.id = "yInDiv"
coordinatesYInDiv.innerHTML = "Y:";
document.body.append(coordinatesXInDiv, coordinatesYInDiv);


document.querySelector("#box").onmousemove = function (event) {
    document.querySelector("#xInDiv").innerHTML = "X:" + event.offsetX;
    document.querySelector("#yInDiv").innerHTML = "Y:" + event.offsetY;

};


