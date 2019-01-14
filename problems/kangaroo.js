function kangaroo(x1, v1, x2, v2) {
    // Complete this function
    var temp = ((x2 - x1)/(v1 - v2));
    // console.log(temp);
    if(x2 > x1 && v2 > v1){
    	return "NO";
    }
    else if(temp > 0 && Number.isInteger(temp) == true)
    	return "YES";
    else
    	return "NO";

}

var result = kangaroo(0, 3, 4, 2);
console.log(result);