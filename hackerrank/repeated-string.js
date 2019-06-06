function repeatedString(s,n){
let lengthOfString = s.length;
let total = 0;
let count = 0;
count = countA(s);

  total = count;

  let quotient = Math.floor(n/lengthOfString);
  let remainder = n % lengthOfString;
  // for(let j = )
  if(quotient >= 0){
    total = quotient * count;


  }
  if(remainder){
    let remainingA = countA(s.split('').slice(0,remainder));
    total = total + remainingA;

  }

  return total;
}

function countA(arr){
  // let arr = str.split('');
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'a'){
      count++;
    }
  }
  return count;
}


console.log(repeatedString('aba', 10))