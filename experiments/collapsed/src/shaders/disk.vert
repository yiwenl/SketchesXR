// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uOrientMatrix;
uniform float uOffset;

varying vec2 vTextureCoord;
varying vec2 vUV;
varying vec3 vNormal;

void main(void) {
	vec3 pos      = aVertexPosition;
	float l       = length(pos.xy);
	pos.xy        = normalize(pos.xy) * l * (1.0 - uOffset * aTextureCoord.x);

    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * uOrientMatrix * vec4(pos, 1.0);
    vec4 posOrg = uProjectionMatrix * uViewMatrix * uModelMatrix * uOrientMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
    vUV = posOrg.xy / posOrg.w;
}