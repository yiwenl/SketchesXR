import alfrid, { GL } from 'alfrid'
import Config from '../Config'
import Assets from '../Assets'
import { random, randomFloor, getRandomElement } from 'randomutils'

export default () => {
  const { vertices } = Assets.get('giant')
  const { vec3, quat } = window
  const { numParticles } = Config
  const mesh = new alfrid.Mesh(GL.POINTS)
  const positions = []
  const uvs = []
  const normals = []
  const indices = []
  let count = 0
  // let m = mat4.create();
  const q = quat.create()
  const axis = vec3.create()

  const numTris = vertices.length / 3
  const getRandomPos = () => {
    const i = randomFloor(numTris)
    const i1 = randomFloor(3)
    const i2 = i1 === 2 ? 0 : i1 + 1
    const a = vertices[i * 3 + i1]
    const b = vertices[i * 3 + i2]
    const v = vec3.create()

    vec3.lerp(v, a, b, Math.random())

    // vec3.set(axis, random(-1, 1), random(-1, 1), random(-1, 1))
    // vec3.normalize(axis, axis)
    // quat.setAxisAngle(q, axis, Math.random() * Math.PI * 2)
    // const v = vec3.fromValues(random(-1, 1), random(-1, 1), random(-1, 1))
    // vec3.normalize(v, v)
    // vec3.scale(v, v, Math.sqrt(Math.random()))
    // vec3.transformQuat(v, v, q)
    return v
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
