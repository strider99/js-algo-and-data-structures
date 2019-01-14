// Accepts a sorted array and counts the unique values in the array
function countUniqueValues(arr){
  if(arr.length == 0) return 0
  var i = 0;
  for(var j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;

}

let res = countUniqueValues([1,1,2,3,3,4,5,6,6,7]);
let res1 = countUniqueValues([]);
console.log(res);
console.log(res1);