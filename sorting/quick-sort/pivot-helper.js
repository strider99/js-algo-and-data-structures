// In order to implement merge sort, its useful to first implement a function responsible for arraging elements in an array on either side of the pivot
// given an array, this helper function should designate an element as pivot
// it should then rearrange elements in an array so that all the values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot

// the order of elements on either side of the pivot doesnt matter
// the helper should do this in place, that is, it shouldnt create a new array
// When complete the helper should return the index of the pivot
// probably the toughest sort to understand
// The runtime of quick sort depends in part on how one selects pivot
// Ideally the pivot should be chosen so that its roughly the median value in the data set you are sorting
// For simplicity we will always choose the pivot to be the first element

// Pivot pseudo code
//  - It will help to accept three arguments: an array, a start index, and an end index(these can default to 0 and array length - 1 respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable(this will keep track of where the pivot should end up)
// loop through the array from the start until the end
//    - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

// Swap the  starting element (ie the pivot ) with the pivot index
// Return the pivot index
function pivot(arr, start=0, end=arr.length+1){

  function swap(array,i,j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

  }
  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }

  }
  swap(arr, start, swapIdx);
  return swapIdx;

}

let result = pivot([9,4,8,2,1,5,7,6,3]);

console.log(result);
