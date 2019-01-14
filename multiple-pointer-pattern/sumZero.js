// Accepts a sorted array of inetegrs and returns the first pair where the sum is zero
// Return an array that includes both values that sum to 0 or undefined if the pair doesnt exist

function sumZero(arr){
  let left = 0
  let right = arr.length - 1;

  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum == 0){
      return [arr[left], arr[right]];
    }else if(sum > 0){
      right--;
    }else{
      left++;
    }
  }


}

let res = sumZero([-5,-4,-3,-2,-1,0,1,2,3,7,9]);
console.log(res);