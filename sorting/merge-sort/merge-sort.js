// Total merge sort here
// Pseudocode

// Break up arrays into halves until you have aaray that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with othet sortyed arrays until you are back at the full length of the array
// once the array has been merged back together, return the merged and the sorted array
const merge = (arr1, arr2) => {
  // create a var to store results
  let results = [];
  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;

    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j])
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);


}

let res = mergeSort([4, 8, 14, 18,19,5,7,36,43,67]);
console.log(res);
// google developer tool check
// found a great tutorial for it
// still not working