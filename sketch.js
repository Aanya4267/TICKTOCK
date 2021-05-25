var hr,min,sec;
var hrang,minang,secang;
function setup() {

  createCanvas(800,400);
  
  
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);
  hr = hour();
  min=minute();
  sec=second();
hrang=map(hr%12,0,12,0,360);
minang=map(min,0,60,0,360);
secang=map(sec,0,60,0,360);

push();
rotate(hrang);
stroke("red");
strokeWeight(7);
line(0,0,50,0);
pop();

push();
rotate(minang);
stroke("yellow");
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(secang);
stroke("blue");
strokeWeight(7);
line(0,0,100,0);
pop();
  
stroke(255,0,255);
point(0,0);
strokeWeight(10);
noFill();
stroke("red");
arc(0,0,260,260,0,hrang);

stroke("yellow");
arc(0,0,280,280,0,minang);

stroke("blue");
arc(0,0,300,300,0,secang);
}