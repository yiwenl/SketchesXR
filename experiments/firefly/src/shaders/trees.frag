#version 300 es

precision highp float;
in vec2 vTextureCoord;
in vec3 vNormal;
in vec3 vPosition;

uniform sampler2D uColorMap;
uniform sampler2D uNormalMap;
uniform sampler2D uAoMap;
uniform vec3 uTreeColor;

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

void main(void) {
    // vec3 normal = texture(uNormalMap, vTextureCoord).rgb;
    vec3 normal = getNormal();;
    float ao = texture(uAoMap, vTextureCoord).r;
    ao = mix(ao, 1.0, .5);
    vec4 color = texture(uColorMap, vTextureCoord);
    color.rgb *= uTreeColor;
    color.rgb *= ao;

    float d = diffuse(LIGHT, normal, .5);
    color.rgb *= d;

    oColor = color;
}