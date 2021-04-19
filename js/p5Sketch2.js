const P = 150
const p = 450
const diam = 300
const rad = 310

function setup() {
  createCanvas(600,600);
   noLoop();
   noStroke();
}
let g = "white"
function draw() {
  background(0,0,139);
  
//BACKROUND 
  fill(255,250,205);
  square(50,50,500,2);
  fill(95,158,160);
  square(125,125,350,2);
  
//LEFT SIDE
  //SHAPE
    //top
    fill(240,128,128);
    ellipse(P,P,diam,diam)
    //bottom 
    fill(240,128,128);
    ellipse(P,p,diam,diam);
  
//RIGHT SIDE
   //top 
    fill(240,128,128);
    ellipse(p,P,diam,diam);
   //bottom 
    fill(240,128,128);
    ellipse(p,p,diam,diam);

  //ARC
    fill(72,209,204);
    arc(P,P,diam,diam,PI,TWO_PI,)
    arc(P,p,diam,diam,PI,TWO_PI,)
    arc(p,p,diam,diam,PI,TWO_PI,)
    arc(p,P,diam,diam,PI,TWO_PI,)
}