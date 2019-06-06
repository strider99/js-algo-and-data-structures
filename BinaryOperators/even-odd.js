var arr = [10,13,413,13,456,10,68,413,456];

arr.forEach(ele => {
  console.log((ele).toString(2));
  if(ele & 1){
    console.log('ele is odd ', ele)
  }else{
    console.log('ele is even ',ele)
  }
})