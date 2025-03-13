class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  isUnder(xState, yState) {
    return (
      xState >= this.x &&
      xState < this.x + this.width &&
      yState >= this.y &&
      yState < this.y + this.height
    );
  }
}
