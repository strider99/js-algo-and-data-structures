function twoArrays(k, A, B) {
  let lengthOfA = A.length;

  for(let i = 0; i < lengthOfA; i++){
    if(A[i] + B[i] < k){
      return 'NO'

    }
  }
  return 'YES'

}

console.log(twoArrays(10, [2,1,3], [7,8,9]));
console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]));