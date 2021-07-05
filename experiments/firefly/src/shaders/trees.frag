#version 300 es

precision highp float;
in vec2 vTextureCoord;
in vec3 vNormal;
in vec3 vPosition;
in vec4 vScreenPos;

uniform sampler2D uColorMap;
uniform sampler2D uNormalMap;
uniform sampler2D uAoMap;
uniform vec3 uTreeColor;
uniform vec3 uBgColor;
uniform mat3 uNormalMatrix;

#define uNormalScale 0.5

out vec4 oColor;


#pragma glslify: diffuse = require(glsl-utils/diffuse.glsl)

#define LIGHT vec3(1.0, 0.2, 1.0)

vec3 getNormal() {
	vec2 uv = vTextureCoord;
	uv.y = 1.0 - uv.y;
	vec3 pos_dx = dFdx(vPosition);
	vec3 pos_dy = dFdy(vPosition);
	vec3 tex_dx = dFdx(vec3(uv, 0.0));
	vec3 tex_dy = dFdy(vec3(uv, 0.0));
	vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

	vec3 ng = normalize(vNormal);

	t = normalize(t - ng * dot(ng, t));
	vec3 b = normalize(cross(ng, t));
	mat3 tbn = mat3(t, b, ng);

	vec3 n = texture(uNormalMap, uv).rgb;
	n = normalize(tbn * ((2.0 * n - 1.0) * vec3(uNormalScale, uNormalScale, 1.0)));
	return n;
}

float fogFactorExp2(
  const float dist,
  const float density
) {
  const float LOG2 = -1.442695;
  float d = density * dist;
  return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);
}

float fogFactorExp(
  const float dist,
  const float density
) {
  return 1.0 - clamp(exp(-density * dist), 0.0, 1.0);
}


void main(void) {
	// vec3 normal = texture(uNormalMap, vTextureCoord).rgb;
	vec3 normal = getNormal();;
	float ao = texture(uAoMap, vTextureCoord).r;
	ao = mix(ao, 1.0, .5);
	vec4 color = texture(uColorMap, vTextureCoord);
	color.rgb *= uTreeColor;
	color.rgb *= ao;

	float d = diffuse(LIGHT, uNormalMatrix * normal, .95);
	d = pow(d, 25.0);
	color.rgb *= d;

	float z = vScreenPos.z / vScreenPos.w;
	z = 1.0 - pow(z, 5.0);

	// float fogAmount = fogFactorExp(vScreenPos.z / vScreenPos.w, 2.0);
	float fogAmount = fogFactorExp2(gl_FragCoord.z - 0.2, 2.0);

	vec3 bgColor = mix(uBgColor, vec3(0.0), .1);

	color.rgb = mix(color.rgb, bgColor, fogAmount);
	oColor = color;
}