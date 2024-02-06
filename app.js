// make a 16x16 grid for default size
// grid size can be changed
// limit size to 100x100
const grid = document.querySelector(".grid");
let gridSize = 16;
// prevent drag & drop of grid
grid.addEventListener("dragstart", (e) => e.preventDefault());
grid.addEventListener("drop", (e) => e.preventDefault());

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
      cell.addEventListener("mouseover", draw);
      cell.addEventListener("mousedown", draw);
      column.appendChild(cell);
    }
  }
}

// delete grid
// must remove all children from .grid when calling generateGrid()
// otherwise, we have more cells than we want
function deleteGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

let isMouseDown = false;
grid.addEventListener("mousedown", () => (isMouseDown = true));
grid.addEventListener("mouseup", () => (isMouseDown = false));

// toggles color class if mouse is down and hover over element
function draw(e) {
  if (e.type === "mouseover" && isMouseDown) {
    if (!e.target.classList.contains("color")) {
      e.target.classList.toggle("color");
    } else return;
  }
}
