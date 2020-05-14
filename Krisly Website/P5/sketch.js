// Catch the Ball
// by Krisly Rosario - aka: Mushroom
//Coding for my MMP class Spring class 2020

var ballx = 300;
var bally = 300;
var ballsize = 40;
var score = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(255, 0, 255);
  
  levelOne();
  
 text(("Score: " + score),width/2,40);
} // end of draw

function levelOne(){
  text("level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballsize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score> 5)
    background(random(255));
  

  line(ballx,bally,mouseX,mouseY);
  fill(255, 255, 0);
  ellipse(ballx,bally, ballsize, ballsize);

  
} // end of level 1