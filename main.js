function createGrid(rows, cols, size) {
  const svg = document.querySelector("#grid");

  svg.innnerHTML = "";

  svg.setAttribute("width", cols * size);
  svg.setAttribute("height", rows * size);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      rect.setAttribute("x", col * size);
      rect.setAttribute("y", row * size);
      rect.setAttribute("width", size);
      rect.setAttribute("height", size);
      rect.setAttribute("fill", "none");
      rect.setAttribute("stroke", "grey");
      rect.setAttribute("stroke-width", 0.6);

      rect.setAttribute("id", `cell-${row}-${col}`);

      rect.addEventListener("click", (event) => {
        setSelected(svg, row, col);
        console.log(`row: ${row}, col: ${col}`);
      });

      svg.appendChild(rect);
    }
  }
}

function setSelected(svg, row, col) {
  svg.getElementById(`cell-${row}-${col}`).setAttribute("fill", "lightblue");

  const allCells = document.querySelectorAll("rect");
  allCells.forEach((cell) => {
    if (cell.getAttribute("id") == `cell-${row}-${col}`) {
      cell.setAttribute("fill", "none");
    }
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  createGrid(
    document.body.scrollHeight / 30,
    document.body.scrollWidth / 30,
    30
  );
});
