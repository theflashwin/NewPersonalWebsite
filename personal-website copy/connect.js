import * as THREE from 'three'
import './style.css'
import VanillaTilt from 'vanilla-tilt';
import gsap from "gsap"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene()

const loader = new GLTFLoader()

// LinkedIn
loader.load('/linkedin.gltf', function(gltf) {
    
    const gltfScene = gltf.scene
    gltfScene.scale.set(3, 3, 3)
    gltfScene.position.x = 0.25
    gltfScene.position.y = -0.35
    scene.add(gltfScene)

}, undefined, function(error) {
    console.log(error)
})

// GitHub
loader.load('/github.gltf', function(gltf) {
    scene.add(gltf.scene)
}, undefined, function(error) {
    console.log(error)
})

// Gmail
loader.load('/gmail.gltf', function(gltf) {
    
    const gltfScene = gltf.scene
    gltfScene.scale.set(0.25, 0.25, 0.25)
    gltfScene.position.x = -7
    gltfScene.position.y = -0.25
    gltfScene.position.z = 0.25
    scene.add(gltfScene)

}, undefined, function(error) {
    console.log(error)
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
  
    // Light 2
    const light2 = new THREE.PointLight(0xffffff, 1, 100)
    light2.position.set(-10, -10, -10)
    scene.add(light2)
  
    // Light 3
    const light3 = new THREE.PointLight(0xffffff, 1, 100)
    light3.position.set(-10, 10, -10)
    scene.add(light3)
  
    // Light 4
    const light4 = new THREE.PointLight(0xffffff, 1, 100)
    light4.position.set(10, -10, 10)
    scene.add(light4)
  
    // Light 5
    const light5 = new THREE.PointLight(0xffffff, 1, 100)
    light5.position.set(0, 10, 0)
    scene.add(light5)
  
    // Light 6
    const light6 = new THREE.PointLight(0xffffff, 1, 100)
    light6.position.set(0, -10, 0)
    scene.add(light6)
  
    // Light 7
    const light7 = new THREE.PointLight(0xffffff, 1, 100)
    light7.position.set(0, 50, 0)
    scene.add(light7)
  
    // Light 8
    const light8 = new THREE.PointLight(0xffffff, 1, 100)
    light8.position.set(0, -50, 0)
    scene.add(light8)
  
    // Light 9
    const light9 = new THREE.PointLight(0xffffff, 1, 100)
    light9.position.set(50, 0, 0)
    scene.add(light9)
  
    // Light 10
    const light10 = new THREE.PointLight(0xffffff, 1, 100)
    light10.position.set(-50, 0, 0)
    scene.add(light10)
  
  // Camera
  const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
  camera.position.z = 20
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
  controls.autoRotateSpeed = 2
  
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