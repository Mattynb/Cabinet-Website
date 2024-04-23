import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';  
import style from "../../styles/AboutPage/About.module.css";

const ThreeD = () => {
  const sceneRef = useRef();

  useEffect(() => {
    var renderer, controls, scene, camera, loader;

    window.onload = function() {
      // Set up scene
      scene = new THREE.Scene();

      // setup the camera
      var fov = 75;
      var ratio =  309 / 523; // figma layout
      var zNear = 0.1;
      var zFar = 1000;
      camera = new THREE.PerspectiveCamera(fov, ratio, zNear, zFar);
      camera.position.set(5, 10, 20);

      renderer = new THREE.WebGLRenderer({antialias: true},{alpha: true});
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(309, 523);
      sceneRef.current.appendChild(renderer.domElement);

      // set up ambient light
      var ambientLight = new THREE.AmbientLight();
      scene.add( ambientLight );

      // set up directional light
      var light = new THREE.DirectionalLight( 0xffffff, 10.0 );
      light.position.set( -50, 50, 50);
      scene.add( light );
      var light2 = new THREE.DirectionalLight( 0xffffff, 10.0 );
      light2.position.set( 50, -50, -50);
      scene.add( light2 );

      controls = new OrbitControls( camera, renderer.domElement);

      // Load GTFL model
      loader = new GLTFLoader();
      loader.load("cabinet.glb", function (gltf)  {
        var poly = gltf.scenes[0].children[0];
        poly.translateY(-3);
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
    <div className={style.model} ref={sceneRef} />
  );
};

export default ThreeD;
