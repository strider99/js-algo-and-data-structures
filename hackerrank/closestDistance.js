const calculateClosestDistance = (arr) => {
  let arrayOfDistance = arr.map(item => {
    let powered = (item[0] ** 2) + (item[1] ** 2);
    return Math.sqrt(powered);

  });

  arrayOfDistance.sort((a,b) => a - b);
  return arrayOfDistance;

}

const arr = [[14,10],[4,1],[-10,15],[6,2],[67,12],[34,13],[43,543],[100,243],[3,090],[18,28],[14,17],[10,21]
];

let res = calculateClosestDistance(arr);
console.log('the resulting array are ', res);
