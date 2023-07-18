precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uMap;
uniform sampler2D uOutlineMap;
uniform sampler2D uPatternMap0;
uniform sampler2D uPatternMap1;
uniform sampler2D uPatternMap2;
uniform sampler2D uPatternMap3;
uniform sampler2D uPatternMap4;

uniform float uLevel;
uniform float uNum;

void main(void) {
float outline = texture2D(uOutlineMap, vTextureCoord).r; 
// if(outline > 0.0) discard;

vec4 colorMap = texture2D(uMap, vTextureCoord);
vec3 color = colorMap.rgb;
float level = color.r;
if(colorMap.a <= 0.0) discard;
if(abs(level - uLevel) > 1.0) discard;

float g = level / uLevel;

float t = fract(color.g);

vec3 colorPattern;
if(t < 0.2) {
colorPattern = texture2D(uPatternMap0, vTextureCoord).rgb;
} else if(t < 0.4) {
colorPattern = texture2D(uPatternMap1, vTextureCoord).rgb;
} else if(t < 0.6) {
colorPattern = texture2D(uPatternMap2, vTextureCoord).rgb;
} else if(t < 0.8) {
colorPattern = texture2D(uPatternMap3, vTextureCoord).rgb;
} else {
colorPattern = texture2D(uPatternMap4, vTextureCoord).rgb;
}

colorPattern *= colorMap.b;
g = 0.05;
colorPattern = mix(colorPattern, vec3(g, g, g * 0.92), outline);


gl_FragColor = vec4(colorPattern, colorMap.a);
}