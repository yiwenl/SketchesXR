// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uOffset;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vColor;

#define PI 3.141592653
#pragma glslify: rotate    = require(./glsl-utils/rotate.glsl)

#define uRadius 1.0

void main(void) {
    vec3 pos = aVertexPosition;

    float d = pos.z;
    float r = uRadius * PI * 0.5;
    vec3 color = vec3(0.0);



    vec2 centerOffset = vec2(uRadius, 0.0);

    if(d < 0.0) {
        color = vec3(aTextureCoord, 0.0);

        pos.yz -= centerOffset;
        float distToCenter = abs(pos.z);
        float theta = distToCenter / uRadius * uOffset * 1.5;
        pos.yz = rotate(pos.yz, theta);


        pos.yz += centerOffset;
    } else {
        color = vec3(0.1);
    }

    pos.yz = rotate(pos.yz, PI * 0.25);

    vec3 posOrg = aVertexPosition;
    posOrg.yz = rotate(posOrg.yz, PI * 0.25);

    vec4 screenPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(posOrg, 1.0);


    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = screenPos.xy / screenPos.w * .5 + .5;
    vNormal = aNormal;
    vColor = color;
}