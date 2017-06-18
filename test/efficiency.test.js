const effiency = require('../lib/efficiency')

const assert = require('assert');

const dim = 4;
const distance = [
1,1,1,1,
Infinity,1,Infinity,Infinity,
1,2,2,2,
Infinity,1,Infinity,Infinity 
];
distance._isDistance = true
describe('efficiency ', () => {
  it('should return the effiency calculated', () => {
    const _efficiency = effiency(distance)
    assert.equal(_efficiency, 1.4166666666666667)
  });

  it('should return undefined if array is not a distance matrix', () => {
    distance._isDistance = false
    const _efficiency = effiency(distance)
    assert(!_efficiency)
  });
});
