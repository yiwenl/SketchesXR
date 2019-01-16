// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D textureColor;
uniform sampler2D textureExtra;
uniform sampler2D texturePos;
uniform sampler2D textureBg;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;


void main(void) {
	vec3 pos = texture2D(texturePos, vTextureCoord).xyz;
	vec3 extra = texture2D(textureExtra, vTextureCoord).xyz;
	vec4 screenPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
	screenPos.xy /= screenPos.w;
	screenPos.xy = screenPos.xy * .5 + .5;


	vec4 color = texture2D(textureColor, vTextureCoord);
	vec4 colorScreen = texture2D(textureBg, screenPos.xy);

	color = mix(color, colorScreen, extra.y);
    gl_FragColor = color;
    // gl_FragColor = vec4(screenPos.xy, 0.0, 1.0);
    // gl_FragColor = vec4((pos * 5.0).xy, 1.0, 1.0);
}