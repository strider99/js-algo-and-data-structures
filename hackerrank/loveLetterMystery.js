function theLoveLetterMystery(s) {

  let minimumOperationsRequired = 0;

  let arrayOfAscii = s.split('').map(char => char.charCodeAt(0));
  let tempArrayOfAscii = [...arrayOfAscii]

  let reverseArrayOfAscii = tempArrayOfAscii.reverse();


  for(let i = 0; i < reverseArrayOfAscii.length; i++){
    if(reverseArrayOfAscii[i] > arrayOfAscii[i]){
      minimumOperationsRequired += reverseArrayOfAscii[i] - arrayOfAscii[i]
    }
  }

  return minimumOperationsRequired;



}

console.log(theLoveLetterMystery('abb'));