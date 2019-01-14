function timeConversion(s){
	var hh,mm,ss,temp,type;
	type = s.substring(s.length-2);
	// console.log(type);
	var time = s.substring(0,s.length-2).split(':');
	// console.log(time);
	hh = time[0];
	mm = time[1];
	ss = time[2];
	// console.log(hh,mm,ss);
	if(type == 'AM'){
		if(hh == '12'){
			hh = '00'
			return(hh + ':' + mm + ':' + ss);
		}
		else {
			return(hh + ':' + mm + ':' + ss);
		}
	}
	else {
		if(hh == '12'){
			return(hh + ':' + mm + ':' + ss);
		}
		else {
			hh = parseInt(hh) + 12;
			return(hh + ':' + mm + ':' + ss);
		}
	}
	
}

timeConversion('12:40:30AM');
timeConversion('2:40:30AM');
timeConversion('12:40:30PM');
timeConversion('2:40:30PM');
