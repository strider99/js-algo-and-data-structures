function dayOfProgrammer(year) {

  let daysInFebruary = 28;
  let daysTillAugustExcludingFebruary = 215;
  if(year < 1918){
    daysInFebruary = year % 4 ? 28 : 29;
  }else if(year > 1918){
    daysInFebruary = !(year%400) || (year % 100 && !(year%4)) ? 29 : 28;
  }else {
    daysInFebruary = 15;
  }

  let requiredDate = 256 - (daysInFebruary + daysTillAugustExcludingFebruary);
  return requiredDate+'.09.'+year;

}

console.log(dayOfProgrammer(2017));