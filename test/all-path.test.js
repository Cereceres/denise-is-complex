const assert = require('assert');

const allPath = require('../lib/all-path');

const data = [1, 1, 1, 1,
  0, 1, 0, 0,
  1, 0, 0, 0,
  0, 1, 0, 0];
const dim = 4;
const result = [11, 21, 7, 7, 0, 4, 0, 0, 7, 10, 4, 4, 0, 4, 0, 0];
describe('all-path', () => {
  it('should return the matrix of all path possibles', () => {
    const all = allPath(data, dim);
    assert.deepEqual(all, result);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = allPath(data);
    assert.deepEqual(all, data);
  });

  it('should return the empty array if a data is not given', () => {
    const all = allPath();
    assert.deepEqual(all, []);
  });
});
