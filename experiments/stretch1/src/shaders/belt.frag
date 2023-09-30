// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vUV;
varying vec2 vTextureCoord;
varying vec2 vUVOrg;
varying vec3 vExtra;

uniform sampler2D uEnvMap;
uniform float uTime;
uniform float uOffset;

void main(void) {
    vec2 uv = vTextureCoord;
    gl_FragColor = texture2D(uEnvMap, vTextureCoord);

    float alpha = smoothstep(0.0, 0.1, vUV.y);
    if(alpha < 0.01) discard;
    gl_FragColor *= alpha;
}