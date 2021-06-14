// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D texturePos;
uniform vec2 uViewport;

const float radius = 0.02;

void main(void) {
    vec3 pos = texture2D(texturePos, aVertexPosition.xy).xyz;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);

    float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;
    gl_PointSize = distOffset * mix(1.0, 2.0, aVertexPosition.z);
}