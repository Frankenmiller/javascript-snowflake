let snow = [];
let gravity;
let textures = [];

function preload() {
    textures = loadImage('images/100_kwacha_front.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.01);
    for (let i=0; i<500; i++) {
        let x = random(width);
        let y = random(height);
        snow.push(new Snowflake(x, y));
    }
}

function draw() {
    background(0);
    image(textures, 0, 0);

    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }

    // for (let i = snow.length-1; i>=0; i--) {
    //     if (snow[i].offScreen()) {
    //         snow.splice(i, 1);
    //     }
    // }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
