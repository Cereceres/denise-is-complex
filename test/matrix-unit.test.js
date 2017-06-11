const assert = require('assert');

const unit = require('../lib/matrix-unit');

const dim = 4;
const resultUnit = [1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1];

describe('matrix unit', () => {
  it('should return the matrix of all path possibles', () => {
    const result = unit(dim);
    assert.deepEqual(resultUnit, result);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = unit();
    assert.deepEqual(all, []);
  });
});
