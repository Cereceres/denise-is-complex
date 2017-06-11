const assert = require('assert');

const div = require('../lib/matrix-div');

const data = [1, 1, 1, 1,
  2, 1, 4, 6,
  1, 3, 3, 3,
  6, 1, 9, -1];
const dim = 4;
const resultOnes = [1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1];
describe('matrix div', () => {
  it('should return the matrix of all path possibles', () => {
    const all = div(data, data, dim);
    assert.deepEqual(all, resultOnes);
  });

  it('should return the same graph if vertices is not given', () => {
    const all = div(data);
    assert.deepEqual(all, []);
  });

  it('should return the empty array if a data is not given', () => {
    const all = div();
    assert.deepEqual(all, []);
  });
});
