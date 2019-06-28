function serviceLane(n, cases) {
  let largestVehicleTypes = [];

  cases.forEach(item => {
    let width = n.slice(item[0], item[1] + 1);
    largestVehicleTypes.push(Math.min(...width))
  })

  return largestVehicleTypes;

}

console.log(serviceLane([2,3,1,2,3,2,3,3], [[0,3], [4,6], [6,7],[3,5], [0,7]]));