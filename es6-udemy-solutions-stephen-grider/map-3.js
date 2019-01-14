function pluck(array, property) {
  var pluckedArray = array.map(item => item[property]);
  return pluckedArray;
}