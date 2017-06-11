module.exports = function (array1 = [], array2 = array1, rows = 0, columns = rows) {
  const array = [];
  const length = rows * columns;
  let i = -1;
  let j;
  for (let _i = 0; _i < length; _i += 1) {
    j = _i % columns;
    if (!(_i % columns)) i += 1;
    array[_i] = array1[(i * rows + j) % array1.length] - array2[(i * rows + j) % array2.length];
  }
  return array;
};
