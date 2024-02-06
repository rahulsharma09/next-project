"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useLoader } from "@react-three/fiber";
import { SphereGeometry, MeshBasicMaterial, TextureLoader } from "three";

const Sphere = () => {
  const canvasRef = useRef(null);
  //   useEffect(() => {
  //     // Set up scene, camera, and renderer
  //     const scene = new THREE.Scene();
  //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //     const renderer = new THREE.WebGLRenderer();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     canvasRef.current.appendChild(renderer.domElement);

  //     // Add orbit controls for easier navigation
  //     const controls = new OrbitControls(camera, renderer.domElement);

  //     // Create background sphere
  //     const backgroundGeometry = new THREE.SphereGeometry(5, 32, 32);
  //     const backgroundMaterial = new THREE.MeshBasicMaterial({ color: 0x101010 }); // Set background color
  //     const backgroundSphere = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
  //     scene.add(backgroundSphere);

  //     // Create dotted sphere
  //     const sphereGeometry = new THREE.SphereGeometry(5, 28, 32);
  //     const pointsMaterial = new THREE.PointsMaterial({
  //       color: 0xffffff,
  //       size: 0.1,
  //     });
  //     const points = new THREE.Points(sphereGeometry, pointsMaterial);
  //     scene.add(points);

  //     // Set camera position
  //     camera.position.z = 10;

  //     // Animation loop
  //     const animate = () => {
  //       requestAnimationFrame(animate);

  //       // Update controls
  //       controls.update();

  //       // Render scene
  //       renderer.render(scene, camera);
  //     };

  //     // Start animation loop
  //     animate();

  //     // Handle window resize
  //     const handleResize = () => {
  //       camera.aspect = window.innerWidth / window.innerHeight;
  //       camera.updateProjectionMatrix();
  //       renderer.setSize(window.innerWidth, window.innerHeight);
  //     };

  //     window.addEventListener('resize', handleResize);

  //     // Cleanup function
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Add orbit controls for easier navigation
    const controls = new OrbitControls(camera, renderer.domElement);

    // Load SVG texture
    const svgTexture = new THREE.TextureLoader().load(
      "../../assets/images/svg/globe.svg"
    );

    // Create sphere geometry
    const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);

    // Create material with SVG texture
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: svgTexture });

    // Create sphere with SVG texture
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Set camera position
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Render scene
      renderer.render(scene, camera);
    };

    // Start animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default Sphere;

