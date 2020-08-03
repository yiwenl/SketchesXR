// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform sampler2D texturePos;
uniform vec2 uViewport;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vDebug;
varying float vDepth;
varying vec4 vShadowCoord;

const float radius = 0.002;

void main(void) {
    vec3 pos = texture2D(texturePos, aTextureCoord).xyz;
    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);;
    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vDebug = pos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;
    gl_PointSize = distOffset * (1.0 + aVertexPosition.x);

    vDepth = gl_Position.z / gl_Position.w;
    vShadowCoord = uShadowMatrix * wsPos;
}