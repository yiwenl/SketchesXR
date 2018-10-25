// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texturePos;
uniform sampler2D textureExtra;
uniform float uRange;
uniform vec3 uCameraPos;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main(void) {
	vec3 extra = texture2D(textureExtra, vTextureCoord).xyz;
	vec3 pos = texture2D(texturePos, vTextureCoord).xyz;

	vec3 newPos = uCameraPos;

	float r2 = uRange * 2.0;
	float dx = pos.x - uCameraPos.x;
	dx = mod(dx + uRange, r2) - uRange;

	float dy = pos.y - uCameraPos.y;
	dy = mod(dy + uRange, r2) - uRange;

	float dz = pos.z - uCameraPos.z;
	dz = mod(dz + uRange, r2) - uRange;

	newPos += vec3(dx, dy, dz);

	pos = mix(pos, newPos, extra.y);

    gl_FragColor = vec4(pos, 1.0);
}