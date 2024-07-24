import * as THREE from "three";
import * as dat from "lil-gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

import textureSrc from "./images/test_texture.jpeg";

const width = window.innerWidth;
const height = window.innerHeight;

// init
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const frustumSize = 1;
const camera = new THREE.OrthographicCamera(
  frustumSize / -2,
  frustumSize / 2,
  frustumSize / 2,
  frustumSize / -2,
  -1000,
  1000
);
camera.position.set(0, 0, 2);

const scene = new THREE.Scene();

// Textures
const textureLoad = new THREE.TextureLoader();
const texture = textureLoad.load(textureSrc);

const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uImage: { value: texture },
  },
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// const controls = new OrbitControls(camera, renderer.domElement);

// debug
const gui = new dat.GUI();
const settings = {
  x: 3,
  y: 4,
};
// gui.add(settings, "x").min(0).max(5).step(1);
// gui.add(settings, "y").min(0).max(5).step(1);

const testAnimation = () => {
  
}

// helpers
const boxHelper = new THREE.BoxHelper(mesh, 0xffff00);
// scene.add(boxHelper);

const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

// animation
function animate(time) {
  // controls.update();

  renderer.render(scene, camera);
}
