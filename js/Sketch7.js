let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() { 
  r = random(0,500);
  g = 200;
  b = random(0,255);
  x = random(width);
  y = random(height);
  fill(r,g,b,400);
  circle(x,y,24)  
}