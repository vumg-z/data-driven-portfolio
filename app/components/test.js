import * as THREE from "three";

class Cubo {
  constructor() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }

  dispose() {
    this.material.dispose();
    this.geometry.dispose();
  }
}

export default Cubo;
