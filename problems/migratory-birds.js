function migratoryBirds(n, ar) {
    // Complete this function
    var countObj = {};
    ar.forEach(num => {
    	if(!countObj[num]){
    		countObj[num] = 1;
    	}
    	else {
    		countObj[num]++;
    	}
    });
    console.log(countObj);
    
}
migratoryBirds(6, [1,4,4,4,5,3]);