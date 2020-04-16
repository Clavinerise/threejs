// TODO Webpack

// hit - true
function checkCollisionSpherePlane(sphere, plane) {
    
}

var velocity = 0.1;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#eeeeee");
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

camera.position.y = 3;
camera.position.z = 5;

// cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// sphere
var sphereGeom = new THREE.SphereGeometry(0.5, 32, 32);
var sphereMat = new THREE.MeshLambertMaterial({ color: 0x0000ff });
var sphere = new THREE.Mesh(sphereGeom, sphereMat);
scene.add(sphere);
sphere.position.y = 5;

// light
var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

// custom heart object
var object;
var loader = new THREE.GLTFLoader();
loader.load('../heart.glb', (gltf) => {
    object = gltf.scene;
    // scene.add(object);
}, undefined, (error) => {
    console.error(error);
})

// plane
var planeGeom = new THREE.PlaneGeometry(5, 5);
var planeMat = new THREE.MeshBasicMaterial({ color: 0x146894, side: THREE.DoubleSide });
var plane = new THREE.Mesh(planeGeom, planeMat);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

camera.lookAt(0,0,0);

let x, y, z;
let r = 5;
let t = 0.5;
function animate() {
    requestAnimationFrame(animate);
    // t += 0.02;
    // x = r * Math.cos(t);
    // y = 0;
    // z = r * Math.sin(t);
    // camera.position.set(x, y, z);
    // camera.lookAt(0,0,0);
    sphere.position.y -= velocity;

    if(sphere.position.y < 0.5 || sphere.position.y > 5) {
        velocity = -velocity;
    }
    renderer.render(scene, camera);
}

animate();