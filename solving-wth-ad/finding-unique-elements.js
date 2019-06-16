function getFrequencyMap(arr) {
  let counterMap = {};
	arr.forEach( currElem => {
		counterMap[currElem] = (counterMap[currElem] || 0) + 1;
	})
  return counterMap;
}

let res = getFrequencyMap([1,3,4,2,1,4,2,3,1,4,6,78,9,5,6,2]);
let countRepeatedElements = Object.keys(res).find(key => res[key] == 1)
console.log(countRepeatedElements)