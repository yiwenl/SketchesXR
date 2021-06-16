#version 300 es

precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
in vec3 aNormal;
in vec3 aPosOffset;
in vec3 aScale;
in vec3 aExtra;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uShadowMatrix;
uniform sampler2D uColorMap;

uniform float uTime;
uniform float uNum;
uniform float uRadius;
uniform float uOffsetOpen;

out vec2 vTextureCoord;
out vec3 vNormal;
out vec3 vColor;
out vec3 vPosition;
out vec4 vShadowCoord;

#pragma glslify: rotate    = require(glsl-utils/rotate.glsl)
#pragma glslify: easing    = require(glsl-easings/circular-in-out.glsl);

#define PI 3.141592653

void main(void) {
    vec3 pos = aVertexPosition;
    float s = clamp(uOffsetOpen * 2.0 - aExtra.z, 0.0, 1.0);
    pos *= easing(s);

    float theta = aPosOffset.x / uNum * PI * 2.0;
    float t = sin(aPosOffset.x / uNum * PI * 6.0);
    float thetaOffset = t - uTime * 0.5 * aPosOffset.y;
    float rotXZ = thetaOffset;
    float rotXY = theta + aPosOffset.z;
    float rotYZ = 0.3;

    pos.xy *= aScale.xy;
    pos.yz = rotate(pos.yz, rotYZ );

    pos.xz = rotate(pos.xz, rotXZ);

    pos.x += uRadius * ( 1.0 - t * 0.4);
    pos.xy = rotate(pos.xy, rotXY);


    vec4 vWsPos = uModelMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * uViewMatrix * vWsPos;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;

    vec3 n = aNormal;
    n.yz = rotate(n.yz, rotYZ);
    n.xz = rotate(n.xz, rotXZ);
    n.xy = rotate(n.xy, rotXY);

    vNormal = normalize(n);

    vPosition = vWsPos.xyz/vWsPos.w;
    vShadowCoord = uShadowMatrix * vWsPos;

    vColor = pow(texture(uColorMap, aExtra.xy).rgb * 1.25, vec3(1.2));
}