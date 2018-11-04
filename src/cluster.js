exports.cluster = function cluster(points) {
  const clusters = new Map()
  for (const point of points) {
    const hash = hashPoint(point)
    if (clusters.has(hash)) {
      clusters.get(hash).push(point)
    } else {
      clusters.set(hash, [point])
    }
  }

  const result = []
  for (const {1: cluster} of clusters) {
    if (cluster.length === 1) {
      result.push(cluster[0])
    } else {
      result.push({
        type: 'cluster',
        points: cluster
      })
    }
  }

  return result
}

function hashPoint({x, y}) {
  return `${x},${y}`
}
