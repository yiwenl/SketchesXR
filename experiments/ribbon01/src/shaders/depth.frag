#version 300 es

precision mediump float;
in vec2 vTextureCoord;

uniform sampler2D uDepthMap;
uniform mat4 uUvTransform;
uniform float uRawValueToMeters;

out vec4 oColor;

float DepthGetMeters(in sampler2D depth_texture, in vec2 depth_uv) {
  // Depth is packed into the luminance and alpha components of its texture.
  // The texture is a normalized format, storing millimeters.
  vec2 packedDepth = texture(depth_texture, depth_uv).ra;
  return dot(packedDepth, vec2(255.0, 256.0 * 255.0)) * uRawValueToMeters;
}

void main(void) {
    vec2 texCoord = (uUvTransform * vec4(vTextureCoord.xy, 0, 1)).xy;
    float depthInMeters = DepthGetMeters(uDepthMap, texCoord);

    oColor = vec4(vec3(depthInMeters), 1.0);

    vec4 color = texture(uDepthMap, vTextureCoord);
    oColor = color;
    if(color.r > 0.0) {
        oColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
}