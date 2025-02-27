class Environment {

    obstacles = [];

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    addObstacle(o) {
        this.obstacles.push(o);
    }

    underObstacle(x, y) {
        for (const key in this.obstacles) {
            if (this.obstacles[key].isUnder(x, y)) {
                return true;
            }
        }
        return false;
    }

}
