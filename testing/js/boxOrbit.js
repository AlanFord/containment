//
// based on https://aerotwist.com/tutorials/getting-started-with-three-js/
// https://www.jonathan-petitcolas.com/2013/04/02/create-rotating-cube-in-webgl-with-threejs.html
// and
// http://blog.teamtreehouse.com/the-beginners-guide-to-three-js
// 

var scene, camera, renderer, pointLight, controls;

var box;

// Set the scene size.
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 1000;


  function init() {
    scene = new THREE.Scene();
	initAxes();
	initPlane();
	initCube();
	initLight();
	initCamera();
	initRenderer();
	initControls();
	
	// Get the DOM element to attach to
	const container =
      document.querySelector('#container');
	
	// Attach the renderer-supplied
	// DOM element.
	container.appendChild(renderer.domElement);
  }
  
  function initAxes() {
	var axes = new THREE.AxisHelper(20);
	scene.add(axes);
  }
  
  function initPlane() {
	var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
	var planeMaterial = new THREE.MeshBasicMaterial({
		color: 0xcccccc
	});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = -0.5 * Math.PI;
	plane.position = new THREE.Vector3(15, 0, 0);
	scene.add(plane);	
  }
  
  function  initCamera() {
    // Create a WebGL renderer, camera
	// and a scene
	camera =
      new THREE.PerspectiveCamera(
          VIEW_ANGLE,
          ASPECT,
          NEAR,
          FAR
      );
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);
  }
  
  function initLight() {
	// create a point light
	const pointLight =
    new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);
  }
  
  function initRenderer() {
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xEEEEEE);  // gives a nice background color
	// Start the renderer.
	renderer.setSize(WIDTH, HEIGHT);
  }
  
function initCube() {
	var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
	var cubeMaterial = new THREE.MeshBasicMaterial({
		color: 0xff0000,
		wireframe: true
		});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;
	scene.add(cube);
}

  //...........................................................
  // Is this useless code?
  // boxRotate.js does not add the camera to the scene
  //...........................................................
  // Add the camera to the scene.
  //scene.add(camera);


function initControls() {
  // Add OrbitControls so that we can pan around with the mouse.
  controls = new THREE.OrbitControls(camera, renderer.domElement );
 
	//controls.addEventListener( 'change', update ); // call this only in static scenes (i.e., if there is no animation loop) 
  
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled 
	controls.dampingFactor = 0.25; 

	controls.panningMode = THREE.HorizontalPanning; // default is THREE.ScreenSpacePanning 

	//controls.minDistance = 100; 
	controls.maxDistance = 500 

	controls.maxPolarAngle = Math.PI / 2; 
    
  }
  
  init();
  // this is equivalent to the render() command in boxRotate.js
  //
  // Schedule the first frame.
  //requestAnimationFrame(update);

(function animate() {
requestAnimationFrame(animate);
renderer.render(scene, camera);
controls.update();
})();

/*
  // this is equivalent to the render() function in boxRotate.js
  function update () {
    // Schedule the next frame.
    requestAnimationFrame(update);
    // Draw!
    renderer.render(scene, camera);
    controls.update();
  }
*/
