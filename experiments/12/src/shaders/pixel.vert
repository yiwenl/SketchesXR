// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D texturePos;
uniform sampler2D textureColor;
uniform vec2 uViewport;
uniform float uParticleScale;
uniform vec3 uCameraPos;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec4 vColor;

const float radius = 0.001;


void main(void) {
	vec3 position    = texture2D(texturePos, aVertexPosition.xy).xyz;
	gl_Position      = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
	vTextureCoord    = aTextureCoord;
	vNormal          = aNormal;


	float scale = uParticleScale - aVertexPosition.z;
	scale = smoothstep(0.0, 1.0, scale);


	float distToCam = distance(position, uCameraPos);
	float scaleCam = smoothstep(0.1, 0.2, distToCam);

	
	float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;
	gl_PointSize     = distOffset * scale * scaleCam * 2.0;
	
	vColor           = texture2D(textureColor, aVertexPosition.xy);
}