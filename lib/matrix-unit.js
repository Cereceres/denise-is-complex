module.exports = function (rows = 0, columns = rows) {
  const length = rows * columns;
  const array = [];
  let row = -1;
  for (let i = 0; i < length; i += 1) {
    if (!(i % columns)) row += 1;
    array[i] = 0;
    if (i % columns === row) array[i] = 1;
  }
  return array;
};
