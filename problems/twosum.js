function twoSum(arr, sum){
	var twopairs = [];
	var hastable = [];

	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i];
		var counterpart = sum - currentNum;

		// if counterpart doesnt exist in the hashtable
		if(hastable.indexOf(counterpart) !== -1){
			twopairs.push([currentNum, counterpart]);
		}
		// every current num will be pushed to hashtable,
		// so that every loop we check if counterpart is
		// present in hashtable, if it exists, then we got a pair

		hastable.push(currentNum);
	}
	return twopairs;
}

console.time('start')
console.log(twoSum([3, 9, 12, 20,15,6], 21));
console.timeEnd('start')