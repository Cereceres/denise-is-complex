const assert = require('assert');

const distance = require('../lib/distance');

const data = [1, 1, 1, 1,
  0, 1, 0, 0,
  1, 0, 0, 0,
  0, 1, 0, 0];
const dim = 4;
const result = [1, 1, 1, 1, 0, 1, 0, 0, 1, 2, 2, 2, 0, 1, 0, 0];
describe('distance ', () => {
  it('should return the matrix of distanceMin path possibles', () => {
    const distanceMin = distance(data, dim);
    assert.deepEqual(distanceMin, result);
  });

  it('should return the same graph if vertices is not given', () => {
    const distanceMin = distance(data);
    assert.deepEqual(distanceMin, data);
  });

  it('should return the empty array if a data is not given', () => {
    const distanceMin = distance();
    assert.deepEqual(distanceMin, []);
  });
});
