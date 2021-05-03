let a = 400
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(4);
  
}

function draw() {
  background(250);
  
   for (let i = 0; i < width; i += 30){
    for (let z = 0; z < height; z += 30){
      rect(i, z, 25,25)
      
  fill(random(0,a),random(0,a),random(0,a),70);
  for (let x = 0; x<width; x += 30){
    for(let y = 0; y<height; y += 30){
    rect(x, y, 20, 20)
    }
   }
  }
 }
}