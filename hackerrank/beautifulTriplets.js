function beautifulTriplets(d, arr) {
  let count = 0;
  for(let i = 0; i < arr.length - 2; i++){
    if((arr[i + 2] - arr[i + 1] == d) && (arr[i + 1] - arr[i] == d)){
      count++;
      
    }
  }
  return count;

}

console.log(beautifulTriplets(3, [1,2,4,5,7,8,10]));