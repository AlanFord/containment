//
// based on https://aerotwist.com/tutorials/getting-started-with-three-js/
// and
// https://www.jonathan-petitcolas.com/2013/04/02/create-rotating-cube-in-webgl-with-threejs.html
//

var scene, camera, renderer, pointLight;

// Set the scene size.
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const VIEW_ANGLE = 70;  // not 45???????
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const SPEED = 0.01;

var cube;

function init() {
  scene = new THREE.Scene();
  initCube();
  initLight();

  initCamera();
  initRenderer();

  document.body.appendChild(renderer.domElement);
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR,FAR);
  camera.position.set(0,0,300);
  camera.lookAt(scene.position);
}

function initLight() {
  // create a point light
  pointLight = new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true});
  renderer.setSize(WIDTH, HEIGHT);
}

function initCube() {
  cube = new THREE.Mesh(new THREE.CubeGeometry(100,100,100), new THREE.MeshNormalMaterial());
  scene.add(cube);
}

function rotateCube() {
  cube.rotation.x -= SPEED *2;
  cube.rotation.y -= SPEED;
  cube.rotation.z -= SPEED *3;
}

function render() {
  requestAnimationFrame(render);
  rotateCube();
  renderer.render(scene, camera);
}

init();
render();
