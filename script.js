// let env = new Environment(10, 10);
// env.addObstacle(new Obstacle(1,0,7,8));
// let automaton = new Automaton(0, 0, env, 9, 9);
// let path = automaton.aStar();
// document.write("aStar() finished and path's length is : " + path.length + "<br>");
// for (state of path) {
//     document.write(" " + state.x + " " + state.y + "<br>");
// }

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