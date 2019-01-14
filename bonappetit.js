function bonAppetit(n, k, b, ar) {
    // Complete this function
    var sum = 0;
    ar.forEach(num => {
    	sum += num;
    });
    var realSum = sum - ar[k];
    if(b == realSum/2){
    	return "Bon Appetit";
    }
    else
    	return b - (realSum/2);

}