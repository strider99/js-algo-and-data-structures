function minimumDistances(a) {
  let minimumDistance;

  for(let  i = 0; i < a.length; i++){
    for(let j = i + 1; j < a.length; j++){
      if(a[i] == a[j] && minimumDistance == undefined){
        minimumDistance = Math.abs(i - j)
      }else if(a[i] == a[j] && minimumDistance != undefined){
        if(Math.abs(i - j) < minimumDistance){
          minimumDistance = Math.abs(i - j)
        }
      }
    }
  }

  if(minimumDistance){
    return minimumDistance
  }else{
    return -1
  }

}

console.log(minimumDistances([7,1,3,4,1,7]));