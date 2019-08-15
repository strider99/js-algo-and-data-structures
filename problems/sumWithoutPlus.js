function sumWithoutPlus(a,b){

  if(b == 0) return a;
  let sumWithoutCarry = a ^ b;
  let carryWithoutSum = (a & b) << 1;
  return sumWithoutPlus(sumWithoutCarry, carryWithoutSum);

}

// * Using itireation

function sumWithoutPlusWithoutRecursion(a,b){
  while(b != 0){
    let sum = a ^ b;
    let carry = (a & b) << 1;
    a = sum;
    b = carry;
  }

  return a;
}

console.log(sumWithoutPlus(17,12));
console.log(sumWithoutPlusWithoutRecursion(17,12));
