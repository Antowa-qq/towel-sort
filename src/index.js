
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (matrix === undefined || matrix.length === 0) { return [] }
  return matrix.flatMap((item, index) => index % 2 != 0 ? item.reverse() : item);
  
}
