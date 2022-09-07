class Snowflake {
    constructor() {
        let x = random(width);
        let y = random(height);
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
    }

    render() {
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
    }
}