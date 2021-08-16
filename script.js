let penState = 'black'

const gridContainer = document.querySelector('#grid-container');

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear)


function changePenState(state) {
    clear();
    penState = state;
}
const blackButton = document.querySelector('#black-button');
blackButton.addEventListener('click', changePenState.bind(null, 'black'));
//The .bind method "binds" certain parameters to the function that is assigned to the listener.
//It has to be noted that an event listener function can't be written with parentheses, because then
//it is processed as if the function is being called, instead of being assigned to the listener. 
//Because the function is being called within an event listener, the first parameter is assigned to be event.
//To operate around this, null is passed as the first parameter to indicate that there is no event.

const rainbowButton = document.querySelector('#rainbow-button');
rainbowButton.addEventListener('click', changePenState.bind(null, 'rainbow'))


const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', function(){
    sideOfGrid = window.prompt('How many tiles per side do you want your grid to be:')
    createGrid(sideOfGrid); 
})

function clear() {
    allTiles = gridContainer.querySelectorAll('#grid-container div')
    allTiles.forEach(tile => tile.style.backgroundColor='white')
}

function remove() {
    allTiles = gridContainer.querySelectorAll('#grid-container div')
    allTiles.forEach(() => gridContainer.removeChild(gridContainer.lastChild));
}

function changeColor(event) {
    event.stopPropagation();
    switch(penState) {
        case 'rainbow':
            ran1 = Math.random() * 255;
            ran2 = Math.random() * 255;
            ran3 = Math.random() * 255;
            event.target.style.backgroundColor = `rgb(${ran1}, ${ran2}, ${ran3})`;
            break
        case 'black':
            event.target.style.backgroundColor = 'rgb(32, 32, 32)';
            break
    }
}

function createGrid(tiles) {
    //Empties the parent node
    remove();
    basicTile = document.createElement('div');
    //Define the space taken by each tile by modifying the gridTemplateColumn/Row CSS style
    gridContainer.style.gridTemplateColumns = (`repeat(${tiles}, ${500 / tiles}px`);
    gridContainer.style.gridTemplateRows = (`repeat(${tiles}, ${500 / tiles}px`);
    for (let i = 0; i < (tiles * tiles); i++) {
        cell = basicTile.cloneNode(true);
        cell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(cell);
    }
}


createGrid(25);