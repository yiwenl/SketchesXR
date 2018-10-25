// copy.frag

#extension GL_OES_standard_derivatives : enable


precision highp float;
varying vec2 vTextureCoord;
varying vec3 vExtra;
varying vec3 vPosition;
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
	vec2 uv = vTextureCoord + vec2(vExtra.z, 0.0);
	uv.x += uTime * 0.2 * mix(vExtra.y, 1.0, .5);
	uv.x = mod(uv.x, 1.0);
	uv.y = (uv.y - 0.5) * 0.5 + 0.5;
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

    vec3 N = uNormalMatrix * normalize(cross(fdx,fdy)); 
    float d = diffuse(N, LIGHT);

    gl_FragColor.rgb *= mix(d, 1.0, .15);
}