// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform sampler2D textureNoise;

uniform float uOffset;
uniform float uRatio;

void main(void) {
	vec2 uv = vTextureCoord;
	if(uRatio > 1.0) {
		uv.y /= uRatio;	
	} else {
		uv.x *= uRatio;
	}

	vec2 uvOrg = vec2(uv);
	float p = 0.01 * uOffset;
	uv = floor(uv / p) * p;

	vec3 noise = texture2D(textureNoise, uv).rgb;	
	p = 0.01 * uOffset * (1.0 + noise.z * 0.5);
	uv = floor(vTextureCoord / p) * p;	

    gl_FragColor = texture2D(texture, uv);
}