module.exports = (graphDistance, vertices = Math.sqrt(graphDistance.length)) => {
    if(!graphDistance._isDistance || !Array.isArray(graphDistance)) return

    return 2 * graphDistance.reduce(reductor, 0) / vertices / (vertices - 1)
}

const reductor = (init,distance) => typeof distance === 'number' ? init + 1 / distance : init