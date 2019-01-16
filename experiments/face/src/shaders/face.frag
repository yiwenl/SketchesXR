// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec3 vNormal;
varying vec3 vPosition;

const vec3 LIGHT = vec3(-1.0, .8, .6);

float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}

void main(void) {
	if(vPosition.z <= 0.2) {
		discard;
	}
	float d = diffuse(vNormal, LIGHT);
	d = mix(d, 1.0, .5);
    gl_FragColor = vec4(vec3(d), 1.0);
}