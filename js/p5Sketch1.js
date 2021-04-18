//variables 
  const diam = 200
  const rad = 100

//shape orientations 
 
 // center 
   let c = 300
 // left side xPos
   let l = 120 
 //right side xPos
   let r = 480

function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

function draw() {
  background(255,204,51);
  fill(255,4,204)
  square(25,25,550,2); 
  
//LEFT 
 //big  
  fill(255,153,255)
  ellipse(l,120,diam,diam)
  ellipse(l,480,diam,diam)
 //medium 
  fill(255,204,204)
  square(70,70,100,2)
  fill(255,204,204)
  square(70,430,100,2) 
 //small 
  fill(255,204,255)
  ellipse(l,120,rad,rad)
  ellipse(l,480,rad,rad)
  
//CENTER 
 //big 
  fill(255,153,255)
  ellipse(300,300,diam,diam)
 //medium
  fill(255,204,204)
  square(250,250,100,2)
 //small  
  fill(255,204,255)
  ellipse(c,c,rad,rad)
  
//RIGHT  
 //big
  fill(255,153,255)
  ellipse (r,120,diam,diam)
  ellipse(r,480,diam,diam)
//medium
  fill(255,204,204)
  square(430,70,100,2) 
  fill(255,204,204)
  square(430,430,100,2)  
 //small
  fill(255,204,255)
  ellipse(r,120,rad,rad)
  ellipse(r,480,rad,rad)
  
}