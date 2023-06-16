'use client'

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Cubo from "./test";

function Simulation() {
  const canvasRef = useRef(null);
  const cuboRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const cubo = new Cubo();

    scene.add(cubo.mesh);
    camera.position.z = 5;

    renderer.setSize(200, 200);
    // @ts-ignore
    canvasRef.current.appendChild(renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);
      cubo.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      // @ts-ignore
      scene.dispose();
      cubo.dispose();
    };
  }, []);

  return (
    <div
      style={{
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        width: "100%",
        marginRight: 0
      }}
    >
      <div ref={canvasRef} />
    </div>
  );
}

export default Simulation;
