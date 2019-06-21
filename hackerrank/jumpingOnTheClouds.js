function jumpingOnClouds(c, k) {
  let energyConsumed = 0;
  let totalEnergy = 100;
  let lengthOfClouds = c.length;
  for(let i = 0; i < lengthOfClouds; i += k){

    c[i % lengthOfClouds] == 1 ? energyConsumed += 3 : energyConsumed += 1;
  }
  return totalEnergy - energyConsumed;

}

console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3))
// console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2))

// * A different solution by someone else using do while
// var pos = 0;
// var E = 100;
// do {
//     pos = (pos + k) % n;
//     E -= 1;
//     if (c[pos] === 1) {
//         E -= 2;
//     }
// } while (pos != 0);