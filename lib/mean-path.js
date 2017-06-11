const prod = require('./matrix-prod');
const sum = require('./matrix-sum');
const prodScalar = require('./matrix-scalar-prod');
const div = require('./matrix-div');

module.exports = function (graph = [], vertices = 0) {
  let graphMean = graph;
  let graphMin = graph;
  let power = graph;
  let scalar;
  for (let i = 0; i < vertices - 1; i += 1) {
    power = prod(power, graph, vertices);
    scalar = prodScalar(power, i + 1, vertices);
    graphMin = sum(graphMin, power, vertices);
    graphMean = sum(graphMean, scalar, vertices);
  }
  return div(graphMean, graphMin, vertices);
};
