let s = 35
let c1 = 20
let c2 = 60 
let c3 = 100 
let c4 = 140 
let c5 = 180 
let c6 = 585
let c7 = 625 
let c8 = 665 
let c9 = 705 
let c10 = 745

let canv;
let randFill; 
    
var d = 9;
var n = 5;
var sliderD;
var sliderN;

function setup() {
  canv = createCanvas(800, 800);
  let canvas = createCanvas(800,800);
  canvas.center('horizontal');
  noStroke();
  frameRate(4);
  canv.mouseClicked(newFill);
  randFill = 250;
  sliderD = createSlider(1, 50, 10, 1);
  sliderN = createSlider(1, 30, 10, 1);
 
}

function draw() {
  background(251,252,250);
  

//moving ellipses 
 for (let a = 0; a < width; a += 10) {
    for (let b = 0; b < height; b += 10) {
      const rFill = random(0, 100);
      fill(20,rFill,rFill);
      ellipse(a, b, 25, 25);
    }
  } 
  
  
//square
 //light blue 
 fill(194, 245, 240);
 rect(20,20,200,200);  
 rect(580,580,200,200);
 rect(580,20,200,200);
 rect(20,580,200,200);
 rect(225,225,350,350);
  
//dark turqouise  
 //Left Side
 //column 1 
  fill(0,103,105);
  rect(c1,220,s,s);
  fill(randFill, 200, 200);
  rect(c1,260,s,s);
  rect(c1,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c1,340,s,s);
  rect(c1,380,s,s);
  fill(randFill, 200, 200);
  rect(c1,420,s,s);
  fill(0,144,145);
  rect(c1,460,s,s);
  fill(randFill, 200, 200);
  rect(c1,500,s,s);
  rect(c1,540,s,s);
  
  //column 2
  fill(0,103,105);
  rect(c2,220,s,s);
  rect(c2,260,s,s);
  fill(randFill, 200, 200);
  rect(c2,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c2,340,s,s);
  rect(c2,380,s,s);
  rect(c2,420,s,s);
  fill(0,144,145);
  rect(c2,460,s,s);
  fill(randFill, 200, 200);
  rect(c2,500,s,s);
  rect(c2,540,s,s);
  
 //column 3 
  fill(0,103,105);
  rect(c3,220,s,s);
  rect(c3,260,s,s);
  rect(c3,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c3,340,s,s);
  rect(c3,380,s,s);
  rect(c3,420,s,s);
  fill(0,144,145);
  rect(c3,460,s,s);
  rect(c3,500,s,s);
  fill(randFill, 200, 200);
  rect(c3,540,s,s);
  
 //column 4 
  fill(0,103,105);
  rect(c4,220,s,s);
  rect(c4,260,s,s);
  rect(c4,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c4,340,s,s);
  rect(c4,380,s,s);
  fill(randFill, 200, 200);
  rect(c4,420,s,s);
  fill(0,144,145);
  rect(c4,460,s,s);
  rect(c4,500,s,s);
  rect(c4,540,s,s);
  
 //column 5
  fill(0,103,105);
  rect(c5,220,s,s);
  rect(c5,260,s,s);
  rect(c5,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c5,340,s,s);
  rect(c5,380,s,s);
  fill(randFill, 200, 200);
  rect(c5,420,s,s);
  fill(0,144,145);
  rect(c5,460,s,s);
  rect(c5,500,s,s);
  fill(randFill, 200, 200);
  rect(c5,540,s,s);
  
  //column 6 
  fill(0,103,105);
  rect(585,220,s,s);
  rect(c6,260,s,s);
  rect(c6,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c6,340,s,s);
  rect(c6,380,s,s);
  fill(randFill, 200, 200);
  rect(c6,420,s,s);
  fill(0,144,145);
  rect(c6,460,s,s);
  rect(c6,500,s,s);
  fill(randFill, 200, 200);
  rect(c6,540,s,s);
  
  //column 7
  fill(0,103,105);
  rect(c7,220,s,s);
  rect(c7,260,s,s);
  rect(c7,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c7,340,s,s);
  rect(c7,380,s,s);
  fill(randFill, 200, 200);
  rect(c7,420,s,s);
  fill(0,144,145);
  rect(c7,460,s,s);
  rect(c7,500,s,s);
  fill(randFill, 200, 200);
  rect(c7,540,s,s);
  
 //column 8 
  fill(0,103,105);
  rect(c8,220,s,s);
  fill(randFill, 200, 200);
  rect(c8,260,s,s);
  rect(c8,300,s,s);
  fill(0,124,125);
  rect(c8,340,s,s);
  rect(c8,380,s,s);
  rect(c8,420,s,s);
  fill(0,144,145);
  rect(c8,460,s,s);
  rect(c8,500,s,s);
  fill(randFill, 200, 200);
  rect(c8,540,s,s);
  
 //column 9 
 fill(0,103,105);
  rect(c9,220,s,s);
  rect(c9,260,s,s);
  rect(c9,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c9,340,s,s);
  rect(c9,380,s,s);
  rect(c9,420,s,s);
  fill(randFill, 200, 200);
  rect(c9,460,s,s);
  fill(0,144,145);
  rect(c9,500,s,s);
  rect(c9,540,s,s);
  
 //column 10
  fill(randFill, 200, 200);
  rect(c10,220,s,s);
  rect(c10,260,s,s);
  fill(0,103,105);
  rect(c10,300,s,s);
  fill(randFill, 200, 200);
  fill(0,124,125);
  rect(c10,340,s,s);
  rect(c10,380,s,s);
  rect(c10,420,s,s);
  fill(0,144,145);
  rect(c10,460,s,s);
  rect(c10,500,s,s);
  rect(c10,540,s,s);
  
  
//arc
 //left 
  //gold
  fill(218,165,32);      
  //row 1
  arc(75,255,s,s,PI,TWO_PI);
  arc(170,255,s,s,PI,TWO_PI);
  //row 2
  arc(130,295,s,s,PI,TWO_PI);
  //row 3
  arc(57,335,s,s,PI,TWO_PI);
  //row 4
  arc(195,375,s,s,PI,TWO_PI);
  //row 5
  arc(100,415,s,s,PI,TWO_PI);
  //row 6
  arc(100,455,s,s,PI,TWO_PI);
  //row7
  arc(100,495,s,s,PI,TWO_PI);
  //row8
  arc(200,535,s,s,PI,TWO_PI);
  //row9
  arc(40,575,s,s,PI,TWO_PI);
  
  //turqouise medium 
  fill(0,185,188); 
  arc(155,255,s,s,PI,TWO_PI);
  arc(180,375,s,s,PI,TWO_PI);
  arc(70,415,s,s,PI,TWO_PI);
  arc(80,495,s,s,PI,TWO_PI);
  arc(60,575,s,s,PI,TWO_PI);
  
  //turqouise light 
  fill(48,213,200); 
  arc(150,295,s,s,PI,TWO_PI);
  arc(70,335,s,s,PI,TWO_PI);
  arc(130,455,s,s,PI,TWO_PI);
  arc(175,535,s,s,PI,TWO_PI);
  
//right 
  //gold
  fill(218,165,32);      
  //row 1
  arc(700,255,s,s,PI,TWO_PI);
  arc(605,255,s,s,PI,TWO_PI);
  //row 2
  arc(760,295,s,s,PI,TWO_PI);
  //row 3
  arc(657,335,s,s,PI,TWO_PI);
  //row 4
  arc(695,375,s,s,PI,TWO_PI);
  //row 5
  arc(650,415,s,s,PI,TWO_PI);
  //row 6
  arc(700,455,s,s,PI,TWO_PI);
  //row7
  arc(746,495,s,s,PI,TWO_PI);
  //row8
  arc(659,535,s,s,PI,TWO_PI);
  //row9
  arc(635,575,s,s,PI,TWO_PI);
  
  //turqouise medium 
  fill(0,185,188); 
  arc(715,255,s,s,PI,TWO_PI);
  arc(693,335,s,s,PI,TWO_PI);
  arc(675,375,s,s,PI,TWO_PI);
  arc(763,495,s,s,PI,TWO_PI);
  arc(655,575,s,s,PI,TWO_PI);
  
  //turqouise light 
  fill(48,213,200); 
  arc(640,295,s,s,PI,TWO_PI);
  arc(745,295,s,s,PI,TWO_PI);
  arc(630,415,s,s,PI,TWO_PI);
  arc(730,455,s,s,PI,TWO_PI);
  arc(695,535,s,s,PI,TWO_PI);
  

//quadrant
 //top left 
  fill(0,124,125);
  quad(38, 31, 86, 30, 69, 63, 30, 76);
  quad(100, 131, 186, 130, 169, 163, 130, 76);
  fill(0,103,105);
  quad(100, 131, 186, 130, 169, 163, 130, 176);
  quad(100, 50, 86, 30, 69, 63, 30, 76);
  quad(100, 50, 86, 30, 69, 63, 30, 76);
  
 //top right
  fill(0,103,105);
  quad(700, 40, 720, 31, 750, 53, 720, 59);
  quad(700, 100, 720, 141, 750, 63, 720, 69);
  quad(750, 100, 620, 141, 630, 83, 680, 75);
  fill(0,124,125);
  quad(750, 100, 720, 141, 670, 63, 720, 69);
  
 //bottom left
  fill(0,124,125);
  quad(20, 731, 86, 730, 90, 763, 90, 776);
  quad(150, 731, 96, 730, 90, 763, 90, 776);
  quad(180, 631, 96, 650, 90, 663, 147, 676);
  fill(0,103,105);
  quad(150, 671, 101, 650, 100, 656, 95, 730);
  
 //bottom right 
  fill(0,103,105);
  quad(638, 631, 686, 630, 669, 663, 630, 676);
  quad(650, 680, 670, 700, 660, 703, 630, 696);
  fill(0,124,125);
  quad(700, 650, 700, 690, 660, 690, 650, 645);
  quad(720, 750, 777, 720, 780, 737, 730, 776);
  

//mathematical rose  
  d = sliderD.value();
  n = sliderN.value();
  var k = n / d;
  push();
  translate(width / 2, height / 2);

  beginShape();
  stroke(255);
  fill(randFill, 200, 200);
  strokeWeight(2);
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function reduceDenominator(numerator, denominator) {
  function rec(a, b) {
    return b ? rec(b, a % b) : a;
  }
  return denominator / rec(numerator, denominator);
}
//color fill
function newFill() {
  randFill = random(0, 360);
}