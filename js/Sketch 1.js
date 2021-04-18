function setup(){ 
createCanvas(400,400);
  noLoop;
}

function draw() {
background(204,204,255);
  
//bottom of shell
noStroke();
arc(200,200,240,240,PI,TWO_PI);
arc(200,220,70,80,PI,TWO_PI);
  
  
//shell body
fill(255,255,204,)
noStroke(); arc(200,200,220,230,PI,TWO_PI);

//shell detail
fill(255,255,153)
noStroke();
ellipse(200,140,10,120);
ellipse(250,140,10,90);
ellipse(150,140,10,90);
} 