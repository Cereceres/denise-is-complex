const assert = require('assert');

const distance = require('../lib/distance');

const data = [1, 1, 1, 1,
  0, 1, 0, 0,
  1, 0, 0, 0,
  0, 1, 0, 0];
const dim = 4;
const result = [
1,1,1,1,
Infinity,1,Infinity,Infinity,
1,2,2,2,
Infinity,1,Infinity,Infinity 
];
result._isDistance = true
describe('distance ', () => {
  it('should return the matrix of distanceMin path possibles', () => {
    const distanceMin = distance(data, dim);
    assert.deepEqual(distanceMin, result);
    assert(distanceMin._isDistance === true)
  });

  it('should return the same graph if vertices is not given', () => {
    const distanceMin = distance(data);
    const result = data.map((path) => !path ? Infinity : path)
    result._isDistance = true 
    assert.deepEqual(distanceMin,result);
  });

  it('should return the empty array if a data is not given', () => {
    const distanceMin = distance();
    const result = []
    result._isDistance = true
    assert.deepEqual(distanceMin, result);
  });
});
