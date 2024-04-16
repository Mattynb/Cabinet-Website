import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';  

const ThreeD = () => {
  const sceneRef = useRef();

  useEffect(() => {
    var renderer, controls, scene, camera, loader;

    window.onload = function() {
      // Set up scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xeeeeee);

      // setup the camera
      var fov = 75;
      var ratio =  (window.innerHeight/2) / window.innerWidth;
      var zNear = 0.1;
      var zFar = 10000;
      camera = new THREE.PerspectiveCamera(fov, ratio, zNear, zFar);
      camera.position.set(-20, 10, 30);

      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(window.innerHeight / 4, window.innerWidth / 2);
      sceneRef.current.appendChild(renderer.domElement);

      // set up ambient light
      var ambientLight = new THREE.AmbientLight();
      scene.add( ambientLight );

      // set up directional light
      var light = new THREE.DirectionalLight( 0xffffff, 5.0 );
      light.position.set( 0, 100, 10);
      scene.add( light );

      controls = new OrbitControls( camera, renderer.domElement);

      // Load GTFL model
      loader = new GLTFLoader();
      loader.load("cabinet.gltf", (gltf) => {
        var poly = gltf.scenes[0].children[0];
          //poly.scale.x = 10;
          //poly.scale.y = 10;
          //poly.scale.z = 10;

          poly.quaternion.w = 1;
          poly.quaternion.x = 0;
          poly.quaternion.y = 0;
          poly.quaternion.z = 0;

          poly.translateY(2);

        scene.add( gltf.scene );
      });

      animate();
    }

    // Update Three.js scene
    function animate() {
      requestAnimationFrame(animate);

      controls.update();

      renderer.render(scene, camera);
    };
  }, []);

  return (
    <div ref={sceneRef} />
  );
};

export default ThreeD;
