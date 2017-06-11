const assert = require('assert');

const prod = require('../lib/matrix-scalar-prod');

const data = [1, 1, 1, 1,
  2, 1, 4, 6,
  1, 3, 3, 3,
  6, 1, 9, -1];
const dim = 4;
const result = [0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0];

describe('matrix scalar prod', () => {
  it('should return the matrix of all path possibles', () => {
    const resultprod = prod(data, 0, dim);
    assert.deepEqual(resultprod, result);
  });

  it('should return the matrix of all path possibles', () => {
    const resultprod = prod(data, 1, dim);
    assert.deepEqual(resultprod, data);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = prod(data);
    assert.deepEqual(all, []);
  });

  it('should return the empty array if a data is not given', () => {
    const all = prod();
    assert.deepEqual(all, []);
  });
});
