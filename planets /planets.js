const body = document.querySelector('body');

let InMemoryResponseCache

window.onload = function () {
    fetch('https://trevadim.github.io/vue/data/data.json')
        .then(response => response.json())
        .then(result => {
            InMemoryResponseCache = result
            createMain();
            createContent();
            createButton();
            createFooter();

        })
        .catch(error => console.log(error));
}

function createContent() {
    body.innerHTML += `<div 
                id="content" 
                style="width: 100%; height: 100%; display: inline-block; vertical-align: top; margin: 0 1.5% 20px;"
                ></div>`;
}

function onButtonClicked() {
    let planets = InMemoryResponseCache['planets']
    let count = 0;
    let contentDiv = document.getElementById("content")
    for (let planet in planets) {
        count++;
        contentDiv.innerHTML += `<div 
                class="section-${count}" 
                style="width: 30%; display: inline-block; vertical-align: top; margin: 0 1.5% 20px;"
                ></div>`;
        createHeader(planets[planet], `.section-${count}`);
        createImg(planets[planet], `.section-${count}`);
        createInfo(planets[planet], `.section-${count}`);
    }

    document.querySelector('button').hidden = true
}

function createButton() {
    let button = document.createElement('button')
    button.innerHTML = "Показать информацию о планетах"
    button.style['margin-left'] = '50%'
    button.style.transform = 'translate(-50%, 0)'
    button.style.color = 'blue'
    button.style['font-size'] = '30px'
    button.style.backgroundColor = '#fafafa'
    button.addEventListener('click',onButtonClicked)
    document.body.append(button)
}

function createMain() {
    let main = InMemoryResponseCache['main']
    for (let key in main) {
        let paragraph = document.createElement('p')
        paragraph.style['text-align'] = 'center'
        paragraph.innerText = main[key]
        document.body.append(paragraph)
    }
}


function createHeader({title}, elem) {
    document.getElementById("content").querySelector(elem).innerHTML +=
        `<header
            style="text-align: center; margin-bottom: 20px; font-size: 22px; font-weight: 700;"
        >${title}</header>`;
}

function createInfo({info}, elem) {
    let infoHTML = info.map(paragraph => `<p>${paragraph}</p>`);
    document.getElementById("content").querySelector(elem).innerHTML += infoHTML.join('');
}

function createImg({url, title}, elem) {
    document.getElementById("content").querySelector(elem).innerHTML +=
        `<img 
            src="${url}" 
            alt="${title}" 
            style="display: block; width: 100%; height: auto; border-radius: 10px"
        >`;
}


function createFooter() {
    let contacts = InMemoryResponseCache['contacts']
    let footer = document.createElement('footer')
    footer.style.bottom = '0'
    footer.style.left = '0'
    footer.style.width = '100%'
    document.body.append(footer)
    for (let key in contacts) {
        let p = document.createElement('p')
        p.innerText = key + " : " + contacts[key]
        footer.append(p)
    }
}
