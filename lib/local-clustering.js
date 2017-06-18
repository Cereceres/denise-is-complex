const prod = require('./matrix-prod');
const sum = require('./matrix-sum');

module.exports = function (graph = [], vertices = 0) {
  if(!Array.isArray(graph) || !vertices) return graph
  return getClustering(graph, vertices)
};

const whoAreConnected = function (graph, neighbours, vertices, row) {
    if (neighbours.length < 2) return 0
    let localClustering = 0
    neighbours.forEach(neighbour_1 => {
        neighbours.forEach(neighbour_2 => {
            const isConnected = graph[neighbour_1 * vertices + neighbour_2]
            if (isConnected) localClustering++
        })
    })
    return localClustering / neighbours.length / (neighbours.length - 1)
}

const getClustering = function(graph, vertices) {
  const clustering = []
  let localClustering = 0
  let neighbours = []
  let row = 0
  graph.forEach((node, index) => {
    if(index && index % vertices === 0){
        clustering.push(whoAreConnected(graph, neighbours, vertices, row))
        localClustering = 0
        neighbours = []
        row++
    }
    if (graph[index]) neighbours.push(index % vertices)
  })
  clustering.push(whoAreConnected(graph, neighbours, vertices, row))
  clustering._islocalClustering = true
  return clustering
}

console.log(module.exports([0,1,1,0,
1,0,0,1,
1,1,0,1,
0,0,1,0], 4))