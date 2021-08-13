//Declatarion of mainDiv and calculation of total grid squares in the etch a script

const mainDiv = document.querySelector('#main-container');
const childDiv = document.createElement('div');
childDiv.classList.add('grid-square');

//The loop will append a child to the parent div as many times as specified
for (let i = 0; i < 100; i++) {
    mainDiv.appendChild(childDiv.cloneNode(true));
}

//Create the event listener to change the color of the individual grid squares
let gridSquares = mainDiv.querySelectorAll('.grid-square');
for (let square of gridSquares) {
    square.addEventListener('mouseover', function(event) {
        event.stopPropagation();
        event.target.style.backgroundColor = 'black';
    })
}

