function cutTheSticks(arr) {


  while(arr.length >= 1){
    console.log(arr.length);
    let min = Math.min(...arr);
     arr = arr.map(item => item - min).filter(item => item != 0);


  }


}

cutTheSticks([5,4,4,2,2,8]);
// cutTheSticks([1,2,3,4,3,3,2,1]);

