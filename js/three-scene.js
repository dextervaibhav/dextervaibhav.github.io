/**
 * Three.js Interactive 3D Background Engine
 * Renders a particle constellation, rotating holographic polyhedra,
 * and mouse-reactive 3D parallax effects.
 */

(function () {
  let scene, camera, renderer;
  let particleSystem, wireframeIcosahedron, wireframeTorus;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let isAnimationActive = true;

  const container = document.getElementById('three-canvas-container');
  if (!container) return;

  function init() {
    // 1. Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b14, 0.0012);

    // 2. Camera setup
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2500
    );
    camera.position.z = 800;

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // 4. Create 3D Particle Constellation
    createParticleConstellation();

    // 5. Create Floating Holographic Wireframe Meshes
    createWireframeMeshes();

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 2, 1000);
    pointLight1.position.set(200, 300, 400);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 1000);
    pointLight2.position.set(-300, -200, 300);
    scene.add(pointLight2);

    // 7. Event Listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('scroll', onScroll, false);

    // 8. Start Animation Loop
    animate();
  }

  function createParticleConstellation() {
    const particleCount = 2200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorPurple = new THREE.Color(0xa855f7);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 2400;
      positions[i3 + 1] = (Math.random() - 0.5) * 2400;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;

      // Random color assignment
      const rand = Math.random();
      let c = colorCyan;
      if (rand > 0.65) c = colorPurple;
      else if (rand > 0.9) c = colorWhite;

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.7)');
    gradient.addColorStop(0.8, 'rgba(168, 85, 247, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 6,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
  }

  function createWireframeMeshes() {
    // Holographic Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(110, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    wireframeIcosahedron = new THREE.Mesh(icoGeom, icoMat);
    wireframeIcosahedron.position.set(400, 80, -100);
    scene.add(wireframeIcosahedron);

    // Holographic Torus Knot
    const torusGeom = new THREE.TorusKnotGeometry(75, 22, 100, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    wireframeTorus = new THREE.Mesh(torusGeom, torusMat);
    wireframeTorus.position.set(-450, -180, -150);
    scene.add(wireframeTorus);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.4;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.4;
  }

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (camera) {
      camera.position.y = -scrollY * 0.35;
    }
  }

  function animate() {
    if (!isAnimationActive) return;
    requestAnimationFrame(animate);

    // Smooth mouse parallax interpolation
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    camera.position.x = targetX * 0.6;
    camera.lookAt(new THREE.Vector3(0, camera.position.y, 0));

    // Rotate particles gently
    if (particleSystem) {
      particleSystem.rotation.y += 0.0006;
      particleSystem.rotation.x += 0.0003;
    }

    // Rotate 3D wireframe shapes
    if (wireframeIcosahedron) {
      wireframeIcosahedron.rotation.x += 0.004;
      wireframeIcosahedron.rotation.y += 0.006;
    }

    if (wireframeTorus) {
      wireframeTorus.rotation.x -= 0.005;
      wireframeTorus.rotation.z += 0.004;
    }

    renderer.render(scene, camera);
  }

  // Global toggle for user control widget
  window.toggle3DScene = function () {
    isAnimationActive = !isAnimationActive;
    if (isAnimationActive) animate();
    return isAnimationActive;
  };

  // Check WebGL availability and start
  if (window.WebGLRenderingContext) {
    window.addEventListener('DOMContentLoaded', init);
  }
})();
