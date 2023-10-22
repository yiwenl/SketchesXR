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

#define UP vec3(0.0, 1.0, 0.0)
#define DOWN vec3(0.0, -1.0, 0.0)
#define LEFT vec3(-1.0, 0.0, 0.0)
#define RIGHT vec3(1.0, 0.0, 0.0)
#define FRONT vec3(0.0, 0.0, 1.0)
#define BACK vec3(0.0, 0.0, -1.0)

#define THRESHOLD .9

#define WHITE vec3(1.0)
#define BLUE vec3(0.0, 69.0/255.0, 173.0/255.0)
#define GREEN vec3(0.0, 155.0/255.0, 72.0/255.0)
#define RED vec3(185.0/255.0, 0.0, 0.0)
#define ORANGE vec3(1.0, 89.0/255.0, 0.0)
#define YELLOW vec3(1.0, 213.0/255.0, 0.0)


float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}


#define LIGHT vec3(1.0, .8, -.6)

void main(void) {
	float d = diffuse(vNormal, LIGHT);
	d = mix(d, 1.0, .85);


	vec3 color = vec3(0.05);

	//	UP
	if(dot(vNormalOrg, UP) > THRESHOLD && vPosOrg.y > 0.0) {
		color = WHITE;
	}

	//	DOWN
	if(dot(vNormalOrg, DOWN) > THRESHOLD && vPosOrg.y < 0.0) {
		color = BLUE;
	}

	//	LEFT
	if(dot(vNormalOrg, LEFT) > THRESHOLD && vPosOrg.x < 0.0) {
		color = ORANGE;
	}

	//	RIGHT
	if(dot(vNormalOrg, RIGHT) > THRESHOLD && vPosOrg.x > 0.0) {
		color = RED;
	}

	//	FRONT
	if(dot(vNormalOrg, FRONT) > THRESHOLD && vPosOrg.z > 0.0) {
		color = GREEN;
	}

	//	BACK
	if(dot(vNormalOrg, BACK) > THRESHOLD && vPosOrg.z < 0.0) {
		color = YELLOW;
	}

	float dx = abs(vTextureCoord.x - 0.5);
	float dy = abs(vTextureCoord.y - 0.5);

	float t = 0.45;
	float t1 = 0.61;
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