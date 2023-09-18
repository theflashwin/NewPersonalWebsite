import * as THREE from 'three'
import './style.css'
import VanillaTilt from 'vanilla-tilt';
import gsap from "gsap"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// Scene
const scene = new THREE.Scene()

const loader = new GLTFLoader()

// Christmas Room
loader.load('/christmas.gltf', function(gltf) {
  const gltfScene = gltf.scene
  gltfScene.position.y = -1
  scene.add(gltfScene)
})

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Lights

  // Light 1
  const light1 = new THREE.PointLight(0xffffff, 1, 100)
  light1.position.set(10, 10, 10)
  scene.add(light1)

  // Light 1
  const light2 = new THREE.PointLight(0xffffff, 1, 100)
  light2.position.set(-10, 10, 10)
  scene.add(light2)

  // Light 1
  const light3 = new THREE.PointLight(0xffffff, 1, 100)
  light1.position.set(10, 10, -10)
  scene.add(light3)

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 8
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 0.5

// Resize 
window.addEventListener('resize', () => {
  // Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Camera
  camera.aspect = sizes.width/sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
})

// Make sure canvas isn't getting messed up
const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

// Timeline
const t1 = gsap.timeline({defaults: {duration: 1}})
t1.fromTo(mesh.scale, {z:0, x:0, y:0}, {z: 1, x: 1, y: 1})
t1.fromTo('nav', {y:'-100%'}, {y: '0%'})
t1.fromTo('.title', {opacity: 0}, {opacity: 1})

// Mouse Animation [Color]
let mouseDown = true
let rgb = []
// window.addEventListener('mousedown', () => (mouseDown = true))
// window.addEventListener('mouseup', () => (mouseDown = false))

window.addEventListener('mousemove', (e) => {
  if(mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      50,
    ]
    // Animation
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color, {r:newColor.r, g:newColor.g, b:newColor.b})
  }
})