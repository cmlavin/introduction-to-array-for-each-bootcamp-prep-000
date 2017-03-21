function changeCompletely(element, index, array) {
  array.forEach(function addOn(number) {index = array.push(1)});
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
