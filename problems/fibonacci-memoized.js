// this will have a 0(n) runtime

function fiboMemoized(index, cache) {
	cache = cache || [];
	if(cache[index]) return cache[index];
	else {
		if(index < 3 )
			return 1;
		else
			cache[index] = fiboMemoized(index - 1, cache) + fiboMemoized(index - 2, cache);
	}
	return cache[index];
}

console.log(fiboMemoized(15));