const assert = require('assert');

const pow = require('../lib/matrix-pow');

const data = [1, 1, 1, 1,
  2, 1, 4, 6,
  1, 3, 3, 3,
  6, 1, 9, -1];
const dim = 4;
const power = 3;
const result = [93.0000, 76.0000, 166.0000, 88.0000,
  242.0000, 295.0000, 470.0000, 372.0000,
  259.0000, 216.0000, 464.0000, 246.0000,
  345.0000, 168.0000, 587.0000, 253.0000];

describe('matrix pow', () => {
  it('should return the matrix of all path possibles', () => {
    const resultPow = pow(data, dim, power);
    assert.deepEqual(resultPow, result);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = pow(data);
    assert.deepEqual(all, []);
  });

  it('should return the empty array if a data is not given', () => {
    const all = pow();
    assert.deepEqual(all, []);
  });
});
