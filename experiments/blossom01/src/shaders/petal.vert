#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;

// instancing
in vec2 aUV;
in vec3 aExtra;
in vec3 aAxis;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;

uniform sampler2D uPosMap;
uniform sampler2D uColorMap;

uniform float uNumSets;
uniform vec2 uUVOffset;

uniform float uOffset;
uniform float uTime;


out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;
out vec3 vPosition;
out vec4 vShadowCoord;

#pragma glslify: curlNoise    = require(./glsl-utils/curlNoise.glsl)
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)
#pragma glslify: ease    = require(glsl-easings/circular-in-out.glsl)


void main(void) {
    // float offset = clamp(uOffset * 1.2 - aExtra.z * 0.2 , 0.0, 1.0);
    float offset = clamp(uOffset * 2.0 - aExtra.z, 0.0, 1.0);
    offset = ease(offset);

    vec3 pos = aVertexPosition;
    // pos.xz = rotate(pos.xz, sin(uTime));

    float angle = aExtra.y + uTime * 3.0;
    angle *= smoothstep(0.0, 0.1, offset);
    
    pos = rotate(pos, aAxis, angle);
    pos *= aExtra.x;


    float total = uNumSets * uNumSets;


    float frame = floor(offset * total);
    frame = min(frame, total - 1.0);
    float u = mod(frame, uNumSets)/uNumSets;
    float v = floor(frame/uNumSets)/uNumSets;

    vec2 uv = aUV / uNumSets + vec2(u, v);
    // uv = aUV / uNumSets + uUVOffset;

    vec3 posOffset = texture(uPosMap, uv).xyz;

    vec3 noise = curlNoise(posOffset * 2.1 + uTime * 0.1);
    float t = smoothstep(0.05, 0.5, posOffset.y);
    posOffset += noise * 0.05 * t;

    pos += posOffset;

    vPosition = posOffset;

    vec4 wsPos = uModelMatrix * vec4(pos, 1.0);

    gl_Position = uProjectionMatrix * uViewMatrix * wsPos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    vColor = texture(uColorMap, aUV).rgb; 
    vShadowCoord = uShadowMatrix * wsPos;
}