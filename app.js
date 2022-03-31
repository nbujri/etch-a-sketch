const gridContainer = document.querySelector('.grid-container');

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

checkSize(16)

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('mouseover', function(e) {
    e.target.classList.add('hover');
}))

items.forEach(item => item.addEventListener('mouseout', function(e) {
    e.target.classList.remove('hover');
}))