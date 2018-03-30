//
// based on https://aerotwist.com/tutorials/getting-started-with-three-js/
// https://www.jonathan-petitcolas.com/2013/04/02/create-rotating-cube-in-webgl-with-threejs.html
// and
// http://blog.teamtreehouse.com/the-beginners-guide-to-three-js
//

// Set the scene size.
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;

  // Get the DOM element to attach to
  const container =
      document.querySelector('#container');

  // Create a WebGL renderer, camera
  // and a scene
  const renderer = new THREE.WebGLRenderer();
  const camera =
      new THREE.PerspectiveCamera(
          VIEW_ANGLE,
          ASPECT,
          NEAR,
          FAR
      );

  const scene = new THREE.Scene();

  // Add the camera to the scene.
  camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
  scene.add(camera);

  // Start the renderer.
  renderer.setSize(WIDTH, HEIGHT);

  // Attach the renderer-supplied
  // DOM element.
  container.appendChild(renderer.domElement);

  // create a point light
  const pointLight =
    new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);

  // create the sphere's material
  const sphereMaterial =
    new THREE.MeshLambertMaterial(
      {
        color: 0xCC0000
      });

  // Set up the sphere vars
  const RADIUS = 2;
  const SEGMENTS = 16;
  const RINGS = 16;

  const box = new THREE.Mesh(

    new THREE.BoxGeometry(
      RADIUS*2,
      RADIUS*2,
      RADIUS*2),

    sphereMaterial);

  // Move the Box
  box.position.x = -4;
	box.position.y = 3;
	box.position.z = 0;

  // Finally, add the sphere to the scene.
  scene.add(box);

  // Add OrbitControls so that we can pan around with the mouse.
  var controls = new THREE.OrbitControls(camera);

  function update () {
    // Draw!
    renderer.render(scene, camera);
    controls.update();
    // Schedule the next frame.
    requestAnimationFrame(update);
  }

  // Schedule the first frame.
  requestAnimationFrame(update);
