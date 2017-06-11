const assert = require('assert');

const sum = require('../lib/matrix-sum');

const data = [1, 1, 1, 1,
  2, 1, 4, 6,
  1, 3, 3, 3,
  6, 1, 9, -1];
const dim = 4;
const resultZeros = [0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0];
const result = [2, 2, 2, 2,
  4, 2, 8, 12,
  2, 6, 6, 6,
  12, 2, 18, -2];

describe('matrix sum', () => {
  it('should return the matrix of all path possibles', () => {
    const resultsum = sum(data, data, dim);
    assert.deepEqual(resultsum, result);
  });

  it('should return the matrix of all path possibles', () => {
    const resultsum = sum(data, resultZeros, dim);
    assert.deepEqual(resultsum, data);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = sum(data);
    assert.deepEqual(all, []);
  });

  it('should return the empty array if a data is not given', () => {
    const all = sum();
    assert.deepEqual(all, []);
  });
});
