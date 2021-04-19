const P = 150
const p = 450
const diam = 200
const rad = 310

function setup() {
  createCanvas(600,600);
   noLoop();
   noStroke();
}
let g = "white"
function draw() {
  background(0,0,255);
    
//BACKROUND 
    fill(g);
    square(90,250,120,2);
    square(400,250,120,2);
    square(240,-6,120,2);
    square(240,500,120,2);
  
  
//LEFT SIDE
 //shape
    //top
    fill(g);
    square(50,50,200,2)
    fill(0,0,139);
    ellipse(P,P,diam,diam)
    //bottom 
    fill(g);
    square(50,350,200,2) 
    fill(0,0,139);
    ellipse(P,p,diam,diam);
  
 //decoration
    //top
    fill (30,144,255);
    square(100,100,50,15);
    square(98,P,50,15);
    square(P,100,50,15);
    square(P,148,50,15);
    fill(135,236,250);
    ellipse(P,P,P,20);
    ellipse(P,P,20,P);
    //bottom
    fill (30,144,255);
    square(100,p,50,15);
    square(100,400,50,15);
    square(P,400,50,15);
    square(P,p,50,15);
    fill(135,236,250);
    ellipse(P,p,P,20);
    ellipse(P,p,20,P);
  
  
//RIGHT SIDE
 //shape
   //top 
    fill(g);
    square(350,50,200,2)
    fill(0,0,139);
    ellipse(p,P,diam,diam);
   //botom 
    fill(g);
    square(350,350,200,2)
    fill(0,0,139);
    ellipse(p,p,diam,diam);
  
 //decoration
   //top
    fill (30,144,255)
    square(400,100,50,15);
    square(400,150,50,15);
    square(p,100,50,15);
    square(p,150,50,15);
    fill(135,236,250);
    ellipse(p,P,P,20);
    ellipse(p,P,20,P);
  //bottom
    fill (30,144,255)
    square(400,400,50,15);
    square(400,p,50,15);
    square(p,400,50,15);
    square(p,p,50,15);
    fill(135,236,250)
    ellipse(p,p,P,20);
    ellipse(p,p,20,P);
  
//CENTER & BORDER
 //shape 
    fill(0,0,139);
    ellipse(300,300,rad,rad);
    fill(g);
    ellipse(300,300,220,220);

    fill(0,191,255);
    square(215,215,70,2);
    square(315,315,70,2);
    square(215,315,70,2);
    square(315,215,70,2);
 //decoration
    fill(30,144,255);
    ellipse(300,300,diam,20);
    ellipse(300,300,20,diam);
 
    fill(0,206,209);
    ellipse(300,300,20,20);
    ellipse(25,25,20,20);
    ellipse(25,575,20,20);
    ellipse(575,25,20,20);
    ellipse(575,575,20,20);
}