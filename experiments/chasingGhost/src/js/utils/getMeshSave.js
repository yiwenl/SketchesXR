import alfrid, { GL } from 'alfrid'
import Config from '../Config'
import Assets from '../Assets'
import { randomFloor } from 'randomutils'

export default () => {
  const { vertices } = Assets.get('giant')
  const { numParticles } = Config
  const mesh = new alfrid.Mesh(GL.POINTS)
  const positions = []
  const uvs = []
  const normals = []
  const indices = []
  let count = 0

  const numTris = vertices.length / 3

  const getRandomPos = () => {
    const i = randomFloor(numTris)

    const A = vertices[i * 3]
    const B = vertices[i * 3 + 1]
    const C = vertices[i * 3 + 2]

    const r1 = Math.random()
    const r2 = Math.random()
    const s1 = Math.sqrt(r1)

    const x = A[0] * (1.0 - s1) + B[0] * (1.0 - r2) * s1 + C[0] * r2 * s1
    const y = A[1] * (1.0 - s1) + B[1] * (1.0 - r2) * s1 + C[1] * r2 * s1
    const z = A[2] * (1.0 - s1) + B[2] * (1.0 - r2) * s1 + C[2] * r2 * s1

    return [x, y, z]
  }

  for (let i = 0; i < numParticles; i++) {
    for (let j = 0; j < numParticles; j++) {
      positions.push(getRandomPos())
      uvs.push([i / numParticles * 2 - 1, j / numParticles * 2 - 1])
      normals.push([Math.random(), Math.random(), Math.random()])

      indices.push(count)
      count++
    }
  }
  mesh.bufferVertex(positions)
  mesh.bufferTexCoord(uvs)
  mesh.bufferNormal(normals)
  mesh.bufferIndex(indices)

  return mesh
}
