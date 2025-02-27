
class Panel {
    constructor(x, y, env) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;


        this.scene = this.env;
        this.ctx = this.scene.getContext("2d");
        
        scene.this.width = window.innerthis.width;
        scene.this.height = window.innerHeight;
    }

    drawGrid() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.linethis.width = 1;
        this.ctx.strokeStyle = color;
      
        for (let lx = this.x; lx <= this.x + this.width; lx += gridCellSize) {
          this.ctx.moveTo(lx, this.y);
          this.ctx.lineTo(lx, this.y + this.height);
        }
      
        for (let ly = this.y; ly <= this.y + this.height; ly += gridCellSize) {
          this.ctx.moveTo(this.x, ly);
          this.ctx.lineTo(this.x + this.width, ly);
        }
      
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    }

}