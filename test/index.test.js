const assert = require('assert');

const { meanPath, allPath, getDistance } = require('../index');

describe('index', () => {
  it('should exports the meanPath function', () => {
    assert(typeof meanPath === 'function');
  });

  it('should exports the allPath function', () => {
    assert(typeof allPath === 'function');
  });

  it('should exports the allPath function', () => {
    assert(typeof getDistance === 'function');
  });
});
