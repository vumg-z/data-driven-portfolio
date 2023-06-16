'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import PropulsionSimulator from './Propulsion';

const PropulsionSimulatorComponent = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Define the propulsion zone
    const propulsionZone = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.5, 2),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    propulsionZone.position.set(0, 0, 0);

    // Add propulsion zone to the scene
    scene.add(propulsionZone);

    // Position the camera
    camera.position.z = 5;

    // Initialize PropulsionSimulator
    const simulator = new PropulsionSimulator(scene, propulsionZone, renderer, camera);


    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // @ts-ignore
      simulator.animate(renderer, camera);  // Passing renderer and camera as arguments
    };

    // Start the simulator
    simulator.start();

    // Start animation
    animate();

    // Add renderer to container
    // @ts-ignore
    containerRef.current.appendChild(renderer.domElement);

    return () => {
      // Clean up on unmount
      renderer.dispose();
      // @ts-ignore
      scene.dispose();
    }
  }, []);

  return (
    // @ts-ignore
    <div ref={containerRef} />
  );
};

export default PropulsionSimulatorComponent;
