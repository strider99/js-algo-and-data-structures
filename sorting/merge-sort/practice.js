const merge = (arr1, arr2) => {
  let result=[],i=0,j=0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      result.push(arr1[i]);
      i++;
    }else{
      result.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    result.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}


var arr = [5,3,9,1,0,2,6,8,7,10];

console.log(mergeSort(arr));