function setup() {
  createCanvas(windowWidth, windowHeight);
  background(500)
  noStroke();
  frameRate(12);
}

function draw() {
  for (let a = 0; a < width; a += 20) {
    for (let b = 0; b < height; b += 20) {
      const rFill = random(0, 360);
      fill(20, rFill, 360);
      //fill(rFill, 20, 360);
      ellipse(a, b, 25, 25);
    }
  }
}