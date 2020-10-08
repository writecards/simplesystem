class FilledCircle{
  constructor(){
    this.shapeSize = size / random(8,12)
    this.numShapes = floor(random(1, 2));
    this.position = (size / random(14)) - (this.shapeSize / 2)
    this.angle = 360 / this.shapeSize;
  }
  show(){
    fill(255)
    push()
    translate(width/2,height/2)
    for(let i = 0; i < this.numShapes; i++){
      if(randomSelectTwo()){
    ellipse(0,this.position,this.shapeSize)
      rotate(this.angle)
      }else{
         rect(0,this.position,this.shapeSize)
      }
      rotate(this.angle)
    }
    pop()
    
  }
}

class ShapeOutline {
  constructor() {
    this.shapeSize = size / 8;
     this.numShapes = floor(random(1, 5));
 
    this.position = (size / 4) - (this.shapeSize)
    this.angle = 360 / this.numShapes;
    this.strokeColor = getRandomFromPalette();
  }
  show(x,y) {
    noFill();
    stroke(this.strokeColor)
    push()
    translate(x,y)
    for (let i = 0; i < this.numShapes; i++) {
      if(randomSelectTwo()){
      ellipse(this.position, 0, this.shapeSize)
      }else{
        rect(this.position, 0, this.shapeSize)
      }
      rotate(this.angle)
    }
     if(randomSelectTwo()){
    ellipse(0, 0, size/1.5)
  }else{
    rect(0,0,size/1.8)
  }

    pop()
  }
}

