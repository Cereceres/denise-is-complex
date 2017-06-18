const prod = require('./matrix-prod');
const sum = require('./matrix-sum');

module.exports = function (graph = [], vertices = 0) {
  if(!Array.isArray(graph)) return

  const graphDistance = Object.assign([], graph);
  let power = graph;
  for (let i = 0; i < vertices - 1; i += 1) {
    power = prod(power, graph, vertices);
    power.forEach((distance, index) => {
      if (distance && !graphDistance[index]) graphDistance[index] = i + 2;
    });
  }
  const _graphDistance = graphDistance.map((path) => !path ? Infinity : path)
  _graphDistance._isDistance = true
  return _graphDistance
};
