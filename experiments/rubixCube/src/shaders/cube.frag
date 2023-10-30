// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vNormalOrg;
varying vec3 vPosOrg;
varying vec2 vUVScreen;

uniform vec3 uColor;
uniform sampler2D uMap;
uniform float uOffsetOpen;

float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}


#define LIGHT vec3(1.0, .8, -.6)

void main(void) {
	float d = diffuse(vNormal, LIGHT);
	float p = mix(1.0, .85, uOffsetOpen);
	d = mix(d, 1.0, p);


	vec3 color = vec3(0.05);

	float dx = abs(vTextureCoord.x - 0.5);
	float dy = abs(vTextureCoord.y - 0.5);

	float offset = uOffsetOpen;

	float t = 0.57 - offset * 0.1;
	float t1 = 0.73 - offset * 0.1;
	float gap = 0.01;
	float gap1 = 0.03;
	dx = smoothstep(t + gap, t, dx);
	dy = smoothstep(t + gap, t, dy);
	float dist = distance(vTextureCoord, vec2(.5));
	dist = smoothstep(t1+gap1, t1, dist);


	vec3 colorMap = texture2D(uMap, vUVScreen).rgb;
	color = mix(color, colorMap, 1.0);

	color *= dist * dx * dy;


	gl_FragColor = vec4(color * d, 1.0);
}