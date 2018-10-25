// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE
#extension GL_OES_standard_derivatives : enable


precision highp float;
varying vec2 vTextureCoord;
varying vec3 vExtra;
varying vec3 vPosition;
// varying vec3 vPos;
uniform sampler2D texture;
uniform float uTime;
uniform mat3 uNormalMatrix;

float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}


vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}


#define LIGHT vec3(1.0, 1.0, 0.5)

void main(void) {
	vec2 uv = vTextureCoord;
	uv.x *= 1.0 + vExtra.z;
	uv.x += uTime * mix(vExtra.y, 1.0, .25);
	uv.x = mod(uv.x, 1.0);
	vec4 color = texture2D(texture, uv);
	float r = length(vPosition.xz);
	float a1 = smoothstep(0.25, 0.75, r);
	float a2 = smoothstep(3.0, 2.0, r);

	color.rgb *= a1;
	color *= a2;

    gl_FragColor = color;

    vec3 vPos = vPosition;

    // Replace vec3 fdx = dFdx(vPos)  by:
    vec3 fdx = vec3(dFdx(vPos.x),dFdx(vPos.y),dFdx(vPos.z));

    // Replace vec3 fdy = dFdy(vPos)  by:
    vec3 fdy = vec3(dFdy(vPos.x),dFdy(vPos.y),dFdy(vPos.z));

    vec3 N = normalize(cross(fdx,fdy)); 
    float d = diffuse(N, LIGHT);
    d = smoothstep(0.0, 0.8, d);

    gl_FragColor.rgb *= mix(d, 1.0, .25);
    // gl_FragColor.rgb = N;
}