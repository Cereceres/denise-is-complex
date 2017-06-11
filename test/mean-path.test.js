const assert = require('assert');

const meanPath = require('../lib/mean-path');

const data = [1, 1, 1, 1,
  0, 1, 0, 0,
  1, 0, 0, 0,
  0, 1, 0, 0];
const dim = 4;
const result = [2.1818181818181817,
  2.3333333333333335,
  2.142857142857143,
  2.142857142857143,
  Infinity,
  1.75,
  Infinity,
  Infinity,
  2.142857142857143,
  2.5,
  2.25,
  2.25,
  Infinity,
  1.75,
  Infinity,
  Infinity];
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
