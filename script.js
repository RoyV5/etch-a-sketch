//Declatarion of mainDiv and calculation of total grid squares in the etch a script

const mainDiv = document.querySelector('#main-container');
const childDiv = document.createElement('div');

//The loop will append a child to the parent div as many times as specified
for (let i = 0; i < 100; i++) {
    mainDiv.appendChild(childDiv.cloneNode(true));
}

function changeColor(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = 'black';
}


//Create the event listener to change the color of the individual grid squares
let childList = mainDiv.querySelectorAll('#main-container div');
childList.forEach(square => square.addEventListener('mouseover', changeColor))


const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    childList.forEach(square => square.style.backgroundColor='white')
})

const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', function(){
    let tilesPerSide = window.prompt('Enter the ammount of tiles per side you wish your Etch-a-Script to be:');
    mainDiv.style.gridTemplateColumns = `repeat(${tilesPerSide}, calc(500px / ${tilesPerSide}))`
    mainDiv.style.gridTemplateRows = `repeat(${tilesPerSide}, calc(500px / ${tilesPerSide}))`
    childList.forEach(() => mainDiv.removeChild(mainDiv.lastChild));
    for (let i = 0; i < tilesPerSide * tilesPerSide; i++) {
        mainDiv.appendChild(childDiv.cloneNode(true))
    }
    console.log(childList)
    childList = mainDiv.querySelectorAll('#main-container div');
    childList.forEach(square => square.addEventListener('mouseover', changeColor))
})