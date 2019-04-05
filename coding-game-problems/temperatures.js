const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let closest = parseInt(inputs[0]);
let closestDiff = Math.abs(closest - 0);
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    // find absolute value of difference from of each element

    let diff = Math.abs(t - 0);

    if(diff < closestDiff){
      closest = t;
      closestDiff = diff;
    }else if(diff == closestDiff){
      if(t > closest){
        closest = t;
        closestDiff = diff;
      }
    }
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');
if(closest){

console.log(closest);
}else{
    console.log(0);
}

// Best solution
var count = readline(); // the number of temperatures to analyse
var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
// If Math.abs(a) - Math.abs(b) > 0 it will return or it will return b - a
printErr(sortedTemps);

var result = sortedTemps[0] || 0;

print(result);