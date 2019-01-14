function getTotalX(a, b){
    // Complete this function
    var count = 0;
    a.sort(function(c,d){return c - d});
    b.sort(function(c,d){return c - d});
    var arr = [];
    for(var i = a[a.length - 1]; i <= b[0]; i++){
    	arr.push(i);
    }
    for(var i = 0; i < arr.length; i++){
    	var temp = 0;
    	for(var j = 0; j < a.length; j++){
    		if(arr[i] % a[j] !== 0){
    			
    			temp = 1;
    			break;
    		}

    			
    	}
    	if(temp == 0){
    		for(var k = 0; k < b.length; k++){
    			if(b[k] % arr[i] == 0){

    				continue;
    			}
    			else {
    				temp = 1;
    				break;
    			}
    		}

    	}
    	if(temp == 0)
    		count++;
    }
    // console.log(count);
    return count;
}

var result = getTotalX([2, 4], [16, 32, 96]);
console.log(result);