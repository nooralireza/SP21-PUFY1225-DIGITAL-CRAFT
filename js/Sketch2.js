function setup() {
  createCanvas(400,400);
  noLoop;
}

function draw() {
background(204,255,255);
 
//curve six
fill(255,153,255)
arc(200,150,70,140,PI,TWO_PI);

//curve four 
fill(102,153,255)
noStroke();
arc(200,350,170,250,PI,TWO_PI);

//curve three
fill(153,153,255)
noStroke();
arc(200,300,150,210,PI,TWO_PI);

//curve two 
fill(204,204,255)
noStroke();
arc(200,250,130,150,PI,TWO_PI);
  
//curve one 
fill(204,153,255)
noStroke();
arc(200,200,100,140,PI,TWO_PI);
  
//curve five
fill(255,204,255)
arc(200,160,85,100,PI,TWO_PI);
  
}
