window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("env");
  let context = canvas.getContext("2d");
  let bw = 1000;
  let bh = 1000;

  function drawBoard() {
    context.lineWidth = 1;
    for (let x = 0; x < bw; x += 10) {
      for (let y = 0; y < bh; y += 10) {
        context.strokeRect(x, y, 30, 30);
      }
    }
  }

  drawBoard();
});
