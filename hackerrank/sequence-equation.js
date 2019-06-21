function permutationEquation(p) {
  let len = p.length;
  let res = [];
  for(let i = 1; i <= len; i++){
    let indexOfFirstElement = p.indexOf(i) + 1;
    let indexOfSecondElement = p.indexOf(indexOfFirstElement) + 1;
    res.push(indexOfSecondElement);


  }
  return res;


}

console.log(permutationEquation([4,3,5,1,2]));