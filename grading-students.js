function solve(grades) {
	var n = grades.length;
	for(var i = 0; i < n ; i++){
		if(grades[i] < 38){
			console.log(grades[i]);
		}
		else {
			var rem;
			rem = grades[i] % 5;
			if(rem < 3){
				console.log(grades[i]);
			}
			else {
				console.log(grades[i] + 5 - rem);
			}
		}
	}
}
solve([ 73, 67, 38, 33 ]);