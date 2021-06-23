const arr = [1, 2, 3, 4];

for (var i = 0; i < arr.length; i++) {
  setTimeout(
    ((i_copy) => {
      return function () {
        console.log(' i is ', i_copy, ' var is ', arr[i_copy]);
      };
    })(i),
    1000
  );
}
