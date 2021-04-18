//variables 
  const diam = 200
  const rad = 100

//shape orientations 
 
 // center 
   let c = 300
 // left side xPos
   let l = 140 
 //right side xPos
   let r = 480


function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

function draw() {
  background(255,204,51);
  
//LEFT 
 //top  
   fill(255,153,255)
   ellipse(l,120,diam,diam)
   ellipse(l,500,diam,diam)
 //bottom  
   fill(255,204,255)
   ellipse(l,120,rad,rad)
   ellipse(l,500,rad,rad)
  
//CENTER 
  fill(255,153,255)
  ellipse(300,300,diam,diam)
  fill(255,204,255)
  ellipse(c,c,rad,rad)
  
//RIGHT  
 //top 
  fill(255,153,255)
  ellipse (r,120,diam,diam)
  ellipse(r,500,diam,diam)
 //bottom
  fill(255,204,255)
  ellipse(r,120,rad,rad)
  ellipse(r,500,rad,rad)
}