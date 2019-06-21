function findDigits(n) {

  let operand = n;
  let factorsCount = 0;
  while(operand / 10 != 0){
    let remainder = operand % 10;
    if(n % remainder == 0) factorsCount++;
    operand = Math.floor(operand / 10) ;
  }

  return factorsCount;

}

console.log(findDigits(1012));