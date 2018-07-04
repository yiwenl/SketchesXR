// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec3 vNormal;
varying vec2 vTextureCoord;
varying vec4 vScreenPos;
varying vec3 vCenter;
uniform sampler2D textureBg;
uniform sampler2D textureWorld;

uniform vec3 uCameraPos;
uniform vec3 uSideCameraPos;

const vec3 LIGHT = vec3(1.0, .8, .6);


float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}

#define PI 3.141592653
#define MIN_ANGLE 0.3
void main(void) {

	
    
	vec2 uv = vScreenPos.xy * .5 + .5;
	float d = diffuse(vNormal, LIGHT);
	d       = mix(d, 1.0, .8);


	vec4 colorBg = texture2D(textureBg, uv);
	vec4 colorWorld = texture2D(textureWorld, uv);

	// vec2 dirCube = normalize(vCenter.xz);
	vec2 dirCube = normalize(vNormal.xz);
	vec2 dirSideCam = normalize(uSideCameraPos.xz);
	vec2 dirCam = normalize(uCameraPos.xz);

	float a = acos(dot(dirSideCam, dirCube));
	a /= PI;

	float aCam = acos(dot(dirCam, dirSideCam));
	float offset = smoothstep(0.1, MIN_ANGLE, aCam);

 	float temp = a;

	a = mix(a, 1.0, offset);

	vec4 color = mix(colorWorld, colorBg, offset * temp);

    gl_FragColor = color;
    // gl_FragColor.rgb *= d;
    gl_FragColor.rgb = vec3(temp);
}