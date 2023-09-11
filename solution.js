function generateRange(min, max, step){

  // Where values are pushed
  let holdReturn = [];
  
  for(let i = min; i <= max; i += step){
    holdReturn.push(i);
  }
  
  return holdReturn;
  
}
