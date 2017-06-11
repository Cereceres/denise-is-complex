const prod = require('./matrix-prod');
const sum = require('./matrix-sum');

module.exports = function (graph = [], vertices = 0) {
  let graphMin = graph;
  let power = graph;
  for (let i = 0; i < vertices - 1; i += 1) {
    power = prod(power, graph, vertices);
    graphMin = sum(graphMin, power, vertices);
  }
  return graphMin;
};
