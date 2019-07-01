function marsExploration(s) {


  let arrayOfSos = [];
  let countWrongSos = 0;
  for(let i = 0; i <= s.length - 3; i=i+3){
    arrayOfSos.push(s.slice(i, i+3));
  }


  arrayOfSos.forEach(ele => {
    if(ele[0] != 'S') countWrongSos++;
    if(ele[1] != 'O') countWrongSos++;
    if(ele[2] != 'S') countWrongSos++;
  })

  return countWrongSos;


}

console.log(marsExploration1('SOSOOSOSOSOSOSSOSOSOSOSOSOS'));

// * The way I have solved it is probably the hackiest way to do it.

// * The follwing solution was done by a Ukranian guy

function isEqual(a,b) {
  return a === b ? 0 : 1
}

function marsExploration1(s){
  let arr = s.split('');
  let countWrongSos = 0;
  for(let i = 0; i < arr.length; i += 3){
    countWrongSos += isEqual(arr[i], 'S') + isEqual(arr[i+1], 'O') + isEqual(arr[i+2], 'S')
  }
  return countWrongSos;
}