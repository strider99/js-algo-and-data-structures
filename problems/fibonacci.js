// starts from 1 not 0
function fibonacci(position) {
	if (position < 3 ){
		return 1;
	}
	else {
		return fibonacci(position - 1) + fibonacci(position - 2);
	}
}

console.log(fibonacci(6));

// the problem with the above algorith is its very inefficient and
// the time complexity is 2^n
// for better efficiency use memoization