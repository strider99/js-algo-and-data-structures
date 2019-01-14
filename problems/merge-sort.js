function mergeSort(arr) {
	if(arr.length < 2) return arr;
	var middleElement = Math.floor(arr.length / 2);
	var firstHalf = arr.slice(0, middleElement);
	var secondHalf = arr.slice(middleElement);

	return merge(mergeSort(firstHalf), mergeSort(secondHalf));


}


function merge(firstArray, secondArray){
	var result = []; 
	while(firstArray.length && secondArray.length){
		var minElement;
		if(firstArray[0] < secondArray[0]) minElement = firstArray.shift();
		else minElement = secondArray.shift();
		result.push(minElement);
	}
	if(firstArray.length) result = result.concat(firstArray);
	else result = result.concat(secondArray);

	return result;

}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));