const prod = require('./matrix-prod');
const unit = require('./matrix-unit');

module.exports = function (_array = [], rows = 0, pow = 1) {
  let array = unit(rows);
  for (let i = 0; i < pow; i += 1) {
    array = prod(array, _array, rows);
  }
  return array;
};
