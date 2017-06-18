module.exports = (graphClustering, vertices = Math.sqrt(graphClustering.length)) => {
    if(!graphClustering._islocalClustering || !Array.isArray(graphClustering)) return

    return 2 * graphClustering.reduce(reductor, 0) / vertices
}

const reductor = (init,distance) => typeof distance === 'number' ? init + 1 / distance : init