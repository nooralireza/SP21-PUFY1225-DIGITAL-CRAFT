function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

}

function draw() {
  background(300);
  const eFill=random(0,360);
  const eShape=random(0,300);
  fill(eFill,30,30,30);
  ellipse(20,eShape,20,20);
  fill(20,20,eFill,20);
  ellipse(300,eShape,20,20);
  fill(50,eFill,eFill,eFill);
  ellipse(200,eShape,20,20);
  fill(eFill,eFill,100,200);
  ellipse(100,eShape,20,20);
  fill(700,eFill,700,eFill);
  ellipse(370,eShape,20,20);

}