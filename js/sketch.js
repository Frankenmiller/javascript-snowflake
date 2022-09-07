let snow = [];
let gravity;
let spritesheet;
let textures = [];

function preload() {
    spritesheet = loadImage('images/kwacha_spritesheet.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.01);
    
    for (let x=0; x<spritesheet.width; x+=205) {
        for (let y=0; y<spritesheet.height; y+=99) {
            let img = spritesheet.get(x, y, 205, 99);
            image(img, x, y);
            textures.push(img);
        }
    }

    for (let i=0; i<500; i++) {
        let x = random(width);
        let y = random(height);
        let design = random(textures);
        snow.push(new Snowflake(x, y, design));
    }    
}

function draw() {
    background(0);
    // console.log(typeof textures)
    // image(textures, 0, 0);

    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
