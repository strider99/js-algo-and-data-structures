// without recursion

function factorial(n) {
  let fact = 1;
  for(let i = 1; i <= n; i++){
    fact = fact * i;
  }

  return fact;
}

console.log(factorial(5));

// with recursion
function recursiveFactorial(n) {
  if(n == 1) return 1;
  return  recursiveFactorial(n-1) * n
}

console.log(recursiveFactorial(6));