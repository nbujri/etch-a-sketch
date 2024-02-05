// make a 16x16 grid for default size
// grid size can be changed
// limit size to 100x100
const grid = document.querySelector(".grid");
let gridSize = 16;

window.addEventListener("load", generateGrid(gridSize));

// slider
const sizeSlider = document.querySelector(".sizeSlider");
const sliderValue = document.querySelector(".sliderValue");
sliderValue.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
// update value text when slider is moved
sizeSlider.addEventListener("input", () => {
  sliderValue.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
  gridSize = sizeSlider.value;
});

// change the size of grid when apply button is clicked
const applyBtn = document.querySelector(".applyBtn");
applyBtn.addEventListener("click", () => generateGrid(gridSize));

// generates a grid
function generateGrid(size) {
  deleteGrid();

  for (let h = 0; h < gridSize; h++) {
    const column = document.createElement("div");
    column.classList.add("column");
    grid.appendChild(column);
    for (let w = 0; w < gridSize; w++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      column.appendChild(cell);
    }
  }

  draw();
}

// delete grid
function deleteGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function draw() {
  // when mouse cursor hovers over a cell
  // change the cell color

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      // toggle color class only for elements that do not
      // have the class to prevent "erasing"
      if (!cell.classList.contains("color")) cell.classList.toggle("color");
    });
  });
}
