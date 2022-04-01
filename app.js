const gridContainer = document.querySelector('.grid-container');
const drawBtn = document.querySelector('.draw-btn');
const clearBtn = document.querySelector('.clear-btn');
const eraseBtn = document.querySelector('.eraser-btn');
let drawActive = true;

// generate dynamic grid of divs based on two inputs
function generateGrid(size) {
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

function checkSize(size) {
    if (size < 4) {
        alert("MINIMUM SIZE MUST BE 4!");
    } else if (size > 100) {
        alert("MAXIMUM SIZE IS 100!");
    } else {
        generateGrid(size);
    }
}

function draw(e) {
    if (drawActive) {
        e.target.classList.add('draw');
    } else {
        e.target.classList.remove('draw');
    }
}

function clearGrid() {
    items.forEach(item => item.classList.remove('draw'));
}

checkSize(16)

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('mouseover', draw))
clearBtn.addEventListener('click', clearGrid);
drawBtn.addEventListener('click', function() {
    drawActive = true;
    console.log(drawActive);
})
eraseBtn.addEventListener('click', function() {
    drawActive = false;
    console.log(drawActive);
})


