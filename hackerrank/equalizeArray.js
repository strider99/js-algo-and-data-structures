function equalizeArray(arr) {
let max = 1;
let countOccurences = {}
  for(let i = 0; i < arr.length; i++){
    if(countOccurences[arr[i]]){
      countOccurences[arr[i]]++ ;
      if(max < countOccurences[arr[i]]){
        max = countOccurences[arr[i]]
      }
    }else{
      countOccurences[arr[i]] = 1;
    }
  }

  return arr.length - max;

}

console.log(equalizeArray([3,3,2,1,3]))