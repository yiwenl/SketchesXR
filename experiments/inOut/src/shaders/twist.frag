precision highp float;
varying vec2 vTextureCoord;
varying vec3 vNormal;
uniform sampler2D texture;

float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}

const vec3 LIGHT = vec3(0.5, -.8, -1.0);

void main(void) {
	gl_FragColor     = texture2D(texture, vTextureCoord);
	float diff       = diffuse(vNormal, LIGHT);
	diff             = mix(diff, 1.0, .5);
	gl_FragColor.rgb *= diff;
}