function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  noStroke();
  frameRate(5);
  noLoop();
}

function draw() {
  background(30,2,300);
  fill(random(0,450));
  for (let x = 0; x<width; x += 30){
    for (let y = 0; y < height; y += 30){
      rect(x, y, random(10,40), random(10,40))
    }
  }
    for (let x = 0; x<width; x += 2){
    for (let y = 0; y < height; y += 2){
      rect(x, y, 1,1)
    }
    }
    save();
}