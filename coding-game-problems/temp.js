
// let inputs = [1, -2, -8, 4, 5]
// let sortedTemp = inputs.sort((a,b) => Math.abs(a) -Math.abs(b) || b -a);



// console.log(sortedTemp[0] || 0);

var arr = [10,23,4,67,32];

const sortf = (a,b) => {
  return b - a;

}

console.log(arr.sort(sortf));