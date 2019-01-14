function findWhere(array, criteria) {
  var result = array.find(item => {
    let propertyName = Object.keys(criteria)[0];
    return item[propertyName] == criteria[propertyName];
  })
  return result;
}