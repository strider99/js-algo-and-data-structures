// function solve(n, s, d, m){
//     // Complete this function
//     var count = 0;
//     for(var i = 0; i <= n-m; i++){
//     	var temp = 0;
//     	var sum = 0;
//     	for(var j = i; temp < m; j++,temp++){
//     		sum += s[j];
//     	}
//     	if(sum == d)
//     		count++;
//     }
//     return count;
// }

var result = solve(5, [1, 2, 1, 3, 2], 3, 2);
console.log(result);

function solve(n, s, d, m){
	// Complete this function
	var count = 0;
	for(var i = 0; i <= n; i++){
		var temp = 0;
		var sum = 0;
		for(var j = i; j < i + m; j++){
			sum += s[j];
		}
		if(sum == d)
			count++;
	}
	return count;
}