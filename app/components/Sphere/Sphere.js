"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Sphere = () => {
  const canvasRef = useRef(null);
  // useEffect(() => {
  //   // Set up scene, camera, and renderer
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   canvasRef.current.appendChild(renderer.domElement);

  //   // Add orbit controls for easier navigation
  //   const controls = new OrbitControls(camera, renderer.domElement);

  //   // Create background sphere
  //   const backgroundGeometry = new THREE.SphereGeometry(5, 32, 32);
  //   const gradientTexture = new THREE.CanvasTexture(generateGradientCanvas());
  //   gradientTexture.wrapS = THREE.RepeatWrapping;
  //   gradientTexture.wrapT = THREE.RepeatWrapping;
  //   gradientTexture.repeat.set(1, 1);
  //   const backgroundMaterial = new THREE.MeshBasicMaterial({
  //     map: gradientTexture,
  //     side: THREE.DoubleSide,
  //   }); // Set background color
  //   const backgroundSphere = new THREE.Mesh(
  //     backgroundGeometry,
  //     backgroundMaterial
  //   );
  //   scene.add(backgroundSphere);

  //   function generateGradientCanvas() {
  //     const canvas = document.createElement("canvas");
  //     const context = canvas.getContext("2d");
  //     const gradient = context.createLinearGradient(
  //       0,
  //       0,
  //       0,
  //       window.innerHeight
  //     );

  //     gradient.addColorStop(0, "#ff0000"); // Starting color (red)
  //     gradient.addColorStop(1, "#00ff00"); // Ending color (green)

  //     context.fillStyle = gradient;
  //     context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  //     return canvas;
  //   }

  //   // Create dotted sphere
  //   const sphereGeometry = new THREE.SphereGeometry(5, 28, 32);
  //   const pointsMaterial = new THREE.PointsMaterial({
  //     color: 0xffffff,
  //     size: 0.1,
  //   });
  //   const points = new THREE.Points(sphereGeometry, pointsMaterial);
  //   scene.add(points);

  //   // Set camera position
  //   camera.position.z = 10;

  //   // Animation loop
  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     // Update controls
  //     controls.update();

  //     points.rotation.y += 0.005;

  //     // Render scene
  //     renderer.render(scene, camera);
  //   };

  //   // Start animation loop
  //   animate();

  //   // Handle window resize
  //   const handleResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    // Set up Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document
      .getElementById("canvas-container")
      .appendChild(renderer.domElement);

    // Create sphere geometry and material
    const sphereGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    // Create colored dots on the sphere
    for (let i = 0; i < 2500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);

      // Generate a random color for each dot
      // const color = new THREE.Color(
      //   Math.random(),
      //   Math.random(),
      //   Math.random()
      // );
      // colors.push(color.r, color.g, color.b);

      const color = new THREE.Color();
      color.setRGB(
        Math.random() * 0.5 + 0.5, // R component (varying shades of purple)
        Math.random() * 0.5, // G component (varying shades of violet)
        Math.random() * 0.5 + 0.5 // B component (varying shades of purple)
      );
      colors.push(color.r, color.g, color.b);
    }

    sphereGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    sphereGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    

    const material = new THREE.PointsMaterial({
      size: 3, // Adjust the dot size here
      vertexColors: true,
      sizeAttenuation: false,
    });

    const sphere = new THREE.Points(sphereGeometry, material);
    sphere.scale.set(1.2, 1.2, 1.2);
    // Add sphere to the scene
    scene.add(sphere);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the sphere
      // sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.005;

      // Render the scene
      renderer.render(scene, camera);
    }

    // Call the animate function to start the animation loop
    animate();

    // Clean up Three.js resources on component unmount
    return () => {
      renderer.dispose();
      // scene.dispose();
    };
  }, []); // Run useEffect only once on component mount
  return <div id="canvas-container" ref={canvasRef} />;
};

export default Sphere;
