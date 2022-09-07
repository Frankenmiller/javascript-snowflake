function getRandomSize() {

    let r = pow(random(0.5, 1), 5);
    return constrain(r * 36, 2, 36);

}

class Snowflake {
    constructor(sx, sy, img) {
        let x = sx || random(width);
        let y = sy || random(-100, -10);
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0.0);
        this.acc = createVector();
        this.angle = random(TWO_PI);
        this.dir = (random(1) > 0.5) ? 1 : -1;
        this.r = getRandomSize();
    }
    
    applyForce(force) {
        let f = force.copy();
        f.mult(this.r);
        
        // let f = force.copy();
        // f.div(this.mass);
        this.acc.add(f);
    }
    
    randomize() {        
        let x = random(width);
        let y = random(-100, -50);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0.0);
        this.acc = createVector();
        this.r = getRandomSize();
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);
        if (this.vel.mag() < 1) {
            this.vel.normalize();
        }
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        if (this.pos.y > height + 150) {
            this.randomize();
        }

        this.angle += this.dir * this.vel.mag() / 100;

    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, 102, 49);
        pop();
        
    }

}