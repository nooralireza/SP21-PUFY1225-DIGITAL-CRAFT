
const Ypos = 50
const Ypos2 = 500
const s = 20
const s2 = 90
function setup() {
  createCanvas(600,600);
  noStroke();
  frameRate(5);
}

function draw() {
  background(500);
  const randF1 = random(0,400);
  const randF2 = random(0,360);


  fill(randF1,200,300);
  rect(15,15,600,600);

  //sqaures
  fill(randF2,100,300)
  rect(160,165,300,300);
  rect(30,35,130,130);
  rect(460,35,130,130);
  rect(460,465,130,130);
  rect(30,465,130,130);
  
  //middle rectangle top
  rect(180,Ypos,s,s2);
  rect(210,Ypos,s,s2);
  rect(240,Ypos,s,s2);
  rect(270,Ypos,s,s2);
  rect(300,Ypos,s,s2);
  rect(330,Ypos,s,s2);
  rect(360,Ypos,s,s2);
  rect(390,Ypos,s,s2);
  rect(420,Ypos,s,s2);
  
  //middle rectangle bottom
  rect(180,Ypos2,s,s2);
  rect(210,Ypos2,s,s2);
  rect(240,Ypos2,s,s2);
  rect(270,Ypos2,s,s2);
  rect(300,Ypos2,s,s2);
  rect(330,Ypos2,s,s2);
  rect(360,Ypos2,s,s2);
  rect(390,Ypos2,s,s2);
  rect(420,Ypos2,s,s2);
}