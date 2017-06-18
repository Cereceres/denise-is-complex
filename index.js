const mean = require('./lib/mean-path');
const all = require('./lib/all-path');
const distance = require('./lib/distance');
const efficiency = require('./lib/efficiency')


module.exports = {
  meanPath: mean,
  allPath: all,
  getDistance: distance,
  getEfficiency: efficiency
};
