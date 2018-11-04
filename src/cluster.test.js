const {cluster} = require('./cluster.js')

test('should not cluster single point', () => {
  const points = [{x: 0, y: 0}]
  expect(cluster(points)).toEqual(points)
})

test('should cluster two points that are at the same position', () => {
  const points = [
    {x: 0, y: 0},
    {x: 0, y: 0},
  ]
  expect(cluster(points)).toEqual([
    {
      type: 'cluster',
      points
    }
  ])
})
