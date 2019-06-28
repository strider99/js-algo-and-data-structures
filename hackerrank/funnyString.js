function funnyString(s) {
  let reverseOfString = s.split('').reverse().join('');
  let asciiString = s.split('').map(i => i.charCodeAt(0));
  let asciiReverse = reverseOfString.split('').map(i => i.charCodeAt(0));
  let i = 0;
  let asciiStringDifference = [];
  let asciiReverseDifference = [];

  while(i < asciiString.length - 1){
    asciiStringDifference.push(Math.abs(asciiString[i] - asciiString[i+1]));

    asciiReverseDifference.push(Math.abs(asciiReverse[i] - asciiReverse[i+1]));

    i++;
  }

  let isFunnyString = areArraysEqual(asciiStringDifference, asciiReverseDifference);

  return isFunnyString ? 'Funny' : 'Not Funny';


}

const areArraysEqual = (a,b) => {
  for(let i = 0; i < a.length; i++){
    if(a[i] != b[i]) return false
  }

  return true;
}

console.log(funnyString('acxz'))