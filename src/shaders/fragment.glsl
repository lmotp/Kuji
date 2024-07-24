uniform float uTime;
uniform vec4 resolution;
uniform sampler2D uImage;

varying vec2 vUv;

#define PI 3.1415926535897932384626433832795

void main() {
  vec2 coord = vUv;
  vec4 image = texture2D(uImage, coord);

  // gl_FragColor = vec4(vUv, 1.0, 1.0);
  gl_FragColor = image;
}