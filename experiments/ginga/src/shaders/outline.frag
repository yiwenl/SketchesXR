precision highp float;
varying vec2 vTextureCoord;

uniform sampler2D texture;
uniform vec2 uResolution;
uniform float uLineWidth;

float sample(sampler2D map, vec2 uv) {
float value = texture2D(map, uv).r;
return step(value, 0.5);
}

void main(void) {
vec2 res = uResolution * 0.5;
vec3 off = vec3(-1.0, 0.0, 1.0) * uLineWidth;
float top = sample(texture, vTextureCoord + off.yz / res);
float bottom = sample(texture, vTextureCoord + off.yx / res);
float left = sample(texture, vTextureCoord + off.xy / res);
float right = sample(texture, vTextureCoord + off.zy / res);

float dx = abs(left - right);
float dy = abs(top - bottom);
float g = dx + dy;
gl_FragColor = vec4(vec3(1.0), g);
}