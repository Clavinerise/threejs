// TODO Webpack

import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import * as THREE from '.build/three.module.js';
// var THREE = require('../node_modules/three/build/three');

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

camera.position.z = 5;

// cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// sphere
var sphereGeom = new THREE.SphereGeometry();
var sphereMat = new THREE.MeshLambertMaterial({ color: 0x0000ff });
var sphere = new THREE.Mesh(sphereGeom, sphereMat);
scene.add(sphere);

var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += .01;
    // cube.rotation.y += .01;
    renderer.render(scene, camera);
}

animate();