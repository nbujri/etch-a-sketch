const gridContainer = document.querySelector('.grid-container');
const drawBtn = document.querySelector('.draw-btn');
const clearBtn = document.querySelector('.clear-btn');
const eraseBtn = document.querySelector('.eraser-btn');
const sizeSlider = document.querySelector('.size-slider');
const sliderValue = document.querySelector('.slider-value');
defaultSize = 16;
sizeSlider.value = defaultSize;
let drawActive = true;

function generateGrid() {
    setGridSize(defaultSize);
}

// generate dynamic grid of divs based on two inputs
function setGridSize(size) {
    const gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        gridContainer.appendChild(item);
    }
    gridContainer.style.setProperty(
        'grid-template-columns', `repeat(${size}, 1fr)`
        );
}

function draw(e) {
    if (drawActive) {
        e.target.classList.add('draw');
    } else {
        e.target.classList.remove('draw');
    }
}

function clearGrid() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('draw'));
}

function clearNode() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function updateGrid() {
    clearGrid();
    clearNode();
    setGridSize(sizeSlider.value);
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('mouseover', draw));
}

generateGrid();

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('mouseover', draw));

clearBtn.addEventListener('click', clearGrid);

drawBtn.addEventListener('click', function() {
    drawActive = true;
    console.log(drawActive);
});

eraseBtn.addEventListener('click', function() {
    drawActive = false;
    console.log(drawActive);
});

sizeSlider.addEventListener('input', function(e) {
    sliderValue.textContent = sizeSlider.value;
});

sizeSlider.addEventListener('change', function() {
    updateGrid();
});

sliderValue.textContent = sizeSlider.value;


