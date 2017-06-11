const assert = require('assert');

const subs = require('../lib/matrix-subs');

const data = [1, 1, 1, 1,
  2, 1, 4, 6,
  1, 3, 3, 3,
  6, 1, 9, -1];
const dim = 4;
const result = [0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0];

describe('matrix subs', () => {
  it('should return the matrix of all path possibles', () => {
    const resultsubs = subs(data, data, dim);
    assert.deepEqual(resultsubs, result);
  });

  it('should return the matrix of all path possibles', () => {
    const resultsubs = subs(data, result, dim);
    assert.deepEqual(resultsubs, data);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = subs(data);
    assert.deepEqual(all, []);
  });

  it('should return the empty array if a data is not given', () => {
    const all = subs();
    assert.deepEqual(all, []);
  });
});
