let cell = [];

const gridContainer = document.querySelector('#grid-container');
console.log(gridContainer.innerHTML)

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear)

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
    event.target.style.backgroundColor = 'black';
}

function createGrid(tiles) {
    remove();
    for (let i = 0; i < (tiles * tiles); i++) {
        singleTile = 500 / tiles;
        gridContainer.style.gridTemplateColumns = (`repeat(${tiles}, ${singleTile}px`);
        gridContainer.style.gridTemplateRows = (`repeat(${tiles}, ${singleTile}px`);
        cell[i] = document.createElement('div');
        cell[i].addEventListener('mouseover', changeColor)
        gridContainer.appendChild(cell[i]);
        console.log('grid created')
    }
}

createGrid(10);