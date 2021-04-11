//runs once and setsups the scene
function setup() {
	createCanvas(600,600);
}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 50;
	backround("black");
	noStroke();
	fill("red");

	ellipse(width/2,ehight/2,100,100);
	stroke(0);
	fill("white");

	rec(0,600 - recHeight,30,50)
	noStroke();
	fill("orange");
	beginShape();
	vertex(-50,500);
	vertex(400,500);
	vertex(80,300);
	endShape(CLOSE);

	ellipse(200,200,20,20);
	stroke(0);
	fill(200,0,200,50);

	triangle(widht/2,100,320,100,100,310,80);
}


