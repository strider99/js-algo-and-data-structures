function maximizingXor(l, r) {
  let max = 0;
  for(let i = l; i <= r; i++){
    for(let j = l; j <= r; j++){
      if(parseInt(i^j) > parseInt(max)){
        max = i^j;
      }
    }
  }

  return max;

}


console.log(maximizingXor(10,15));