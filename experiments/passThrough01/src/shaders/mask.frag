// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
uniform float uTime;
uniform float uOffset;
varying vec2 vTextureCoord;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}


#define PI 3.141592653

void main(void) {
	float d = distance(vTextureCoord, vec2(.5));

	if(d > .5) {
		discard;
	}

	d /= 0.5;

	vec2 uvRel = vTextureCoord - vec2(.5);
	float a = sin(d * PI * 2.0);

	uvRel = rotate(uvRel, (a * 3.0 + uTime) * uOffset);
	// uvRel += vec2(.5);

	// d = smoothstep(.8, 1.0, d);
	uvRel *= uOffset;

	d = mix(1.0, d, uOffset);

	gl_FragColor = vec4(uvRel, d , 1.0);
}