function randomSelectTwo(){
  let rando = random(1)
   
  if(rando > 0.5){
   return true;
  }else{
    return false;
  }
}

function randomSelectFive(){
  let rando = random(1)
   
  if(rando < 0.2){
   return 1;
  }else if (rando > 0.2 && rando < 0.4){
    return 2;
  }else if (rando > 0.4 && rando < 0.6){
    return 3;
  }else if (rando > 0.6 && rando < 0.8){
    return 4;
  }else if (rando > 0.8){
    return 5;
  }
}

function getRandomFromPalette(){
  let rando2 = floor(random(0, palette.length))
  return palette[rando2]
}
