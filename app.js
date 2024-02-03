// make a 16x16 grid for default size
// grid size can be changed
// limit size to 100x100
const grid = document.querySelector(".grid");
let gridHeight = 64;
let gridWidth = gridHeight;
let gridSize = gridHeight * gridWidth;

window.addEventListener("load", generateGrid(gridHeight, gridWidth));

function generateGrid(height, width) {
  for (let h = 0; h < height; h++) {
    const column = document.createElement("div");
    column.classList.add("column");
    grid.appendChild(column);
    for (let w = 0; w < width; w++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      column.appendChild(cell);
    }
  }
}

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
