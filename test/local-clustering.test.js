const assert = require('assert');

const localClustering = require('../lib/local-clustering');

const data = [1, 1, 1, 1,
  0, 1, 0, 0,
  1, 0, 0, 0,
  0, 1, 0, 0];
const dim = 4;
const result = [ 0.5833333333333334, 0, 0, 0 ];
result._islocalClustering = true
describe('localClustering ', () => {
  it('should return the matrix of clustering path possibles', () => {
    const clustering = localClustering(data, dim);
    assert.deepEqual(clustering, result);
    assert(clustering._islocalClustering === true)
  });

  it('should return the same graph if vertices is not given', () => {
    const clustering = localClustering(data);
    const result = Object.assign([], data)
    assert.deepEqual(clustering,result);
  });

  it('should return the empty array if a data is not given', () => {
    const clustering = localClustering();
    const result = []
    assert.deepEqual(clustering, result);
  });
});
