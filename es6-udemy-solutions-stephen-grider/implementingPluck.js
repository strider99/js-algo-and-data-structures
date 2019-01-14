function pluck(array, property) {
    var pluckedArray = array.map((item) => {
         console.log(item);
         return item[property];
    })
    return pluckedArray;
}
var paints = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'yellow'}
]
const result = pluck(paints,'color');
console.log(result);