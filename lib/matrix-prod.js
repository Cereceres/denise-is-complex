module.exports = function (array1 = [], array2 = array1, rows = 0, interRows = rows, columns = rows) {
  const array = [];
  const length = rows * columns;
  let i = -1;
  let j;
  for (let _i = 0; _i < length; _i += 1) {
    j = _i % columns;
    if (!(_i % columns)) i += 1;
    array[_i] = 0;
    for (let k = 0; k < interRows; k += 1) {
      array[_i] += array1[(i * rows + k) % array1.length] *
                        array2[(k * interRows + j) % array2.length];
    }
  }
  return array;
};
