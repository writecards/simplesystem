let size = 80;
let cells = [];
let palette = [];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
  rectMode(CENTER)
  palette = [
    color(242, 41, 41),
    color(140, 17, 17),
    color(242, 171, 39),
    color(27, 98, 191)
  ]
}

function draw() {
  background(0);
  noFill();
  stroke(255)
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
    cells[i] = new ShapeOutline();
    cells[i].show(30+size/1.2 * i,30+j*size/1.2)
      
    }
  }

setInterval(resetSketch, 1000)
  
noLoop();
}

function resetSketch(){
  background(0)
   for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
    cells[i] = new ShapeOutline();
    cells[i].show(30+size/1.2 * i,30+j*size/1.2)
      
    }
  }
}
