function getMean (arr) {
	var sum = 0;
	arr.forEach(num => {
		sum += num;
	});

	var mean = sum / arr.length;
	return mean;
}

function getMedian(arr){
	arr.sort( (a,b) => {
		return a - b;
	});
	// check whether the length of the array is even or odd
	// if its odd, then its easy
	if(arr.length % 2 != 0){
		return arr[Math.floor(arr.length/2)];
	}

	// if its even, then we need to do something more
	else {
		var mid1 = arr[arr.length/2 - 1];
		var mid2 = arr[arr.length / 2];
		var median = (mid1 + mid2) / 2;
		return median;
	}
	
	
}

function getMode(arr) {
	var modeObj = {};

	// iterate over the array and put the items and their counts in an obj
	arr.forEach(num => {
		if(!modeObj[num])
			modeObj[num] = 0;
		modeObj[num]++;
	});
	console.log(modeObj);

	var maxFrequency = 0;
	var modes = [];

	for(var num in modeObj) {
		if(modeObj[num] > maxFrequency){
			modes = [num];
			maxFrequency = modeObj[num];

		}
		else if(modeObj[num] == maxFrequency){
			modes.push(num);
		}


	}
		if(modes.length === Object.keys(modeObj).length) {
			modes = [];
		}
		return modes;
}

function meanMedianMode(arr) {

	return {
		mean : getMean(arr),
		median : getMedian(arr),
		mode : getMode(arr)
	};
}

;
console.log(meanMedianMode([1,2,3,4,5,4,6,1]));
