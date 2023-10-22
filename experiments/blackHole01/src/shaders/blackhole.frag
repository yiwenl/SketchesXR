// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uMap;

uniform vec2 uCenter;
uniform float uRatio;
uniform float uTime;
uniform float uOffset;

#define PI 3.14159265359
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

void main(void) {
	float uRadius = 0.2 * uOffset;
	float uDistance = 1.05;

	vec2 uv          = vTextureCoord - uCenter;
	uv.y             /= uRatio;

	vec2 diff        = uv;
	float rad        = length(uv);
	float deform     = 1.0 / pow(rad * pow(uDistance, 0.5), 2.0) * uRadius * 0.1;
	uv               = uv * ( 1.0 - deform);

	float offsetRot  = smoothstep(uRadius * 1.25, 0.0, rad);
	offsetRot 		   = sin(offsetRot * PI);
	float theta      = -offsetRot * PI * 4.0 * uOffset;
	uv               = rotate(uv, theta);

	uv.y             *= uRatio;
	uv               += uCenter;

	float t          = rad * uDistance;
	float d 				 = smoothstep(uRadius * 1.5, uRadius, t) * 0.02;

	float r 				 = texture2D(uMap, uv - vec2(d, 0.0)).r; 
	float g 				 = texture2D(uMap, uv).g; 
	float b 				 = texture2D(uMap, uv + vec2(d, 0.0)).b; 


	vec4 color       = vec4(r, g, b, 1.0);
	color.rgb        *= smoothstep(uRadius * 0.8, uRadius, t);


	gl_FragColor = color;


}