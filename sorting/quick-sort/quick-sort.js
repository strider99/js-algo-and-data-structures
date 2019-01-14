// call the pivot helper on the array
// when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of the index, and the subarray to the right of that index
// base case occurs when the subarray has less than 2 elements


function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){


    let pivotIndex = pivot(arr, left, right);

    // Left side
    quickSort(arr, left, pivotIndex - 1);
    // Right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;


}

var res = quickSort([4,6,9,1,2,5,3]);
console.log(res);
