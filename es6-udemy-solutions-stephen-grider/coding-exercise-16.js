function unique(array) {
  var uniqueArray = array.reduce((newArray, element) => {
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
    return newArray;
  }, []);
  return uniqueArray;
}