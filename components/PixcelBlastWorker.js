// PixelBlastWorker.js
import * as THREE from 'three';

let renderer, scene, camera, material, clock, uniforms;

self.onmessage = (e) => {
  const { canvas, width, height, config, time } = e.data;

  if (!renderer) {
    // Init THREE renderer on worker thread
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(width, height);

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    clock = new THREE.Clock();

    uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uColor: { value: new THREE.Color(config.color || '#457B9D') },
    };

    material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        varying vec2 vUv;

        void main() {
          float wave = sin(vUv.x * 20.0 + uTime * 2.0) * 0.5 + 0.5;
          gl_FragColor = vec4(uColor * wave, wave * 0.8);
        }
      `,
      transparent: true,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);
  }

  uniforms.uTime.value = time;
  renderer.render(scene, camera);
};
