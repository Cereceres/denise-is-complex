const assert = require('assert');

const meanPath = require('../lib/mean-path');

const data = [1, 1, 1, 1,
  0, 1, 0, 0,
  1, 0, 0, 0,
  0, 1, 0, 0];
const dim = 4;
const result = [ 3.090909090909091,
  3.2857142857142856,
  3,
  3,
  Infinity,
  2.5,
  Infinity,
  Infinity,
  3,
  3.5,
  3.25,
  3.25,
  Infinity,
  2.5,
  Infinity,
  Infinity ]
describe('mean path ', () => {
  it('should return the matrix of all path possibles', () => {
    const all = meanPath(data, dim);
    assert.deepEqual(all, result);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = meanPath(data);
    assert.deepEqual(all, []);
  });

  it('should return the empty array if a data is not given', () => {
    const all = meanPath();
    assert.deepEqual(all, []);
  });
});
