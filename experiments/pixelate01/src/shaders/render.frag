precision highp float;
varying vec4 vColor;

varying vec4 vShadowCoord;
uniform sampler2D textureDepth;
uniform sampler2D textureParticle;
uniform vec3 uLightPos;

#define uMapSize vec2(1024.0)
// #define LIGHT_POS vec3(-1.0, 10.0, 5.0)
// #define FOG_DENSITY 0.2

float bias = 0.005;

float rand(vec4 seed4) {
	float dot_product = dot(seed4, vec4(12.9898,78.233,45.164,94.673));
	return fract(sin(dot_product) * 43758.5453);
}

float PCFShadow(sampler2D depths, vec2 size, vec4 shadowCoord) {
	float result = 0.0;
	float bias = 0.005;
	vec2 uv = shadowCoord.xy;

	for(int x=-1; x<=1; x++){
		for(int y=-1; y<=1; y++){
			vec2 off = vec2(x,y);
			off /= size;

			float d = texture2D(depths, uv + off).r;
			if(d < shadowCoord.z - bias) {
				result += 1.0;
			}

		}
	}
	return 1.0 -result/9.0;

}


float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}

void main(void) {
	// if(distance(gl_PointCoord, vec2(.5)) > .5) discard;

	vec2 uvPoint = gl_PointCoord;
	uvPoint.y = 1.0 - uvPoint.y;
	vec4 colorMap = texture2D(textureParticle, uvPoint);

	if(colorMap.r <= 0.0) {
		discard;
	}
	vec3 N = colorMap.rgb * 2.0 - 1.0;

	vec4 shadowCoord = vShadowCoord / vShadowCoord.w;

	//*/
	vec2 uv = shadowCoord.xy;
	float d = texture2D(textureDepth, uv).r;

	float s = 1.0;
	if(d < shadowCoord.z - bias) {
		s = 0.0;
	}
	/*/
	float s = PCFShadow(textureDepth, uMapSize, shadowCoord);
	//*/
	s = mix(s, 1.0, .25);

	float diff = diffuse(N, uLightPos);
	diff = mix(diff, 1.0, .1);

	vec4 color = vec4(vec3(diff), 1.0);
	color.rgb *= s;


	gl_FragColor = color;
	// gl_FragColor = vec4(shadowCoord.xy, 0.0, 1.0);
}