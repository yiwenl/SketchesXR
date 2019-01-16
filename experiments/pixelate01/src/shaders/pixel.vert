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
uniform vec3 uCameraDir;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec4 vColor;

const float radius = 0.001;

float angleBetween(vec3 v1, vec3 v2) {
	return acos(dot(v1, v2));
}


void main(void) {
	vec3 position    = texture2D(texturePos, aVertexPosition.xy).xyz;
	gl_Position      = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
	vTextureCoord    = aTextureCoord;
	vNormal          = aNormal;


	float scale = uParticleScale - aVertexPosition.z;
	scale = smoothstep(0.0, 1.0, scale);


	float distToCam = distance(position, uCameraPos);
	float scaleCam = smoothstep(0.1, 0.2, distToCam);

	vec3 dirToCamera = normalize(position - uCameraPos);
	float angle = angleBetween(dirToCamera, uCameraDir);
	angle = smoothstep(-0.2, 1.0, angle);

	
	float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;
	gl_PointSize     = distOffset * scale * scaleCam * 2.0 * angle;
	
	vColor           = texture2D(textureColor, aVertexPosition.xy);
	// vColor = vec4(vec3(angle), 1.0);
}