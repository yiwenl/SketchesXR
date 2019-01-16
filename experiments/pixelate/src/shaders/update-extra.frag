// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texturePos;
uniform sampler2D textureExtra;
uniform float uRange;
uniform vec3 uCameraPos;

void main(void) {
	vec3 pos = texture2D(texturePos, vTextureCoord).xyz;
	vec3 extra = texture2D(textureExtra, vTextureCoord).xyz;
	float dx = abs(pos.x - uCameraPos.x);
	float dz = abs(pos.z - uCameraPos.z);

	extra.y = 0.0;

	if(dx > uRange) {
		extra.y = 1.0;
	}

	if(dz > uRange) {
		extra.y = 1.0;
	}


    gl_FragColor = vec4(extra, 1.0);
}