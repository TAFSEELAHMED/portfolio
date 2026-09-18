import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Spatial3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // References to three.js scene objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rootGroupRef = useRef<THREE.Group | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const neuralGroupRef = useRef<THREE.Group | null>(null);
  const ringsGroupRef = useRef<THREE.Group | null>(null);
  const cosmosGroupRef = useRef<THREE.Points | null>(null);

  // High-precision butter-smooth physics state
  const physics = useRef({
    // Accumulated 3D rotation angles (driven by sliding pointer)
    currentRotX: 0.15,
    currentRotY: -0.2,
    targetRotX: 0.15,
    targetRotY: -0.2,

    // Instant pointer normalized coordinates (-1 to 1)
    pointerNormX: 0,
    pointerNormY: 0,
    smoothPointerX: 0,
    smoothPointerY: 0,

    // Pointer sliding velocity
    pointerVelX: 0,
    pointerVelY: 0,
    lastPointerX: 0,
    lastPointerY: 0,
    hasMoved: false,

    // Camera positional orbital offsets
    camX: 0,
    camY: 4,
    camZ: 70,
    targetCamX: 0,
    targetCamY: 4,
    targetCamZ: 70,

    // Scroll depth tracking
    scrollProgress: 0,
  });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene with warm dark gold atmospheric fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.007);
    sceneRef.current = scene;

    // 2. Camera setup with wide optical field
    const camera = new THREE.PerspectiveCamera(54, width / height, 0.1, 2000);
    camera.position.set(0, 4, 70);
    cameraRef.current = camera;

    // 3. Renderer with high-performance settings
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Completely transparent so dark CSS shows through
    rendererRef.current = renderer;

    // 4. Subtle Luxury Gold & Amber Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5db, 0.85);
    scene.add(ambientLight);

    const goldPoint1 = new THREE.PointLight(0xf5d061, 2.5, 200);
    goldPoint1.position.set(40, 50, 60);
    scene.add(goldPoint1);

    const goldPoint2 = new THREE.PointLight(0xd4af37, 2.0, 180);
    goldPoint2.position.set(-50, -40, 50);
    scene.add(goldPoint2);

    const amberPoint = new THREE.PointLight(0xb45309, 1.8, 140);
    amberPoint.position.set(0, 0, -30);
    scene.add(amberPoint);

    // 5. Main Root Spatial 3D Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    rootGroupRef.current = rootGroup;

    // Smooth circular particle sprite
    const createParticleTexture = () => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 250, 225, 1)');
        grad.addColorStop(0.25, 'rgba(245, 208, 97, 0.9)');
        grad.addColorStop(0.6, 'rgba(212, 175, 55, 0.35)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    };

    const particleTexture = createParticleTexture();

    // ========================================================
    // LAYER 1: Deep Cosmic Latent Field (Stardust)
    // ========================================================
    const cosmosCount = 2200;
    const cosmosGeom = new THREE.BufferGeometry();
    const cosmosPos = new Float32Array(cosmosCount * 3);
    const cosmosCols = new Float32Array(cosmosCount * 3);

    for (let i = 0; i < cosmosCount; i++) {
      const x = (Math.random() - 0.5) * 420;
      const y = (Math.random() - 0.5) * 320;
      const z = (Math.random() - 0.5) * 420;

      cosmosPos[i * 3] = x;
      cosmosPos[i * 3 + 1] = y;
      cosmosPos[i * 3 + 2] = z;

      const p = Math.random();
      if (p > 0.75) {
        cosmosCols[i * 3] = 0.98;
        cosmosCols[i * 3 + 1] = 0.88;
        cosmosCols[i * 3 + 2] = 0.48;
      } else if (p > 0.35) {
        cosmosCols[i * 3] = 0.84;
        cosmosCols[i * 3 + 1] = 0.70;
        cosmosCols[i * 3 + 2] = 0.30;
      } else {
        cosmosCols[i * 3] = 0.48;
        cosmosCols[i * 3 + 1] = 0.40;
        cosmosCols[i * 3 + 2] = 0.24;
      }
    }

    cosmosGeom.setAttribute('position', new THREE.BufferAttribute(cosmosPos, 3));
    cosmosGeom.setAttribute('color', new THREE.BufferAttribute(cosmosCols, 3));

    const cosmosMat = new THREE.PointsMaterial({
      size: 1.6,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const cosmosField = new THREE.Points(cosmosGeom, cosmosMat);
    rootGroup.add(cosmosField);
    cosmosGroupRef.current = cosmosField;

    // ========================================================
    // LAYER 2: 3D Neural Synapse Lattice (Interactive Nodes & Synapses)
    // ========================================================
    const neuralGroup = new THREE.Group();
    rootGroup.add(neuralGroup);
    neuralGroupRef.current = neuralGroup;

    const nodeCount = 160;
    const nodeCoords: THREE.Vector3[] = [];
    const nodeGeom = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);

    const cLightGold = new THREE.Color(0xf5d061);
    const cDeepGold = new THREE.Color(0xd4af37);
    const cWarmAmber = new THREE.Color(0xb45309);

    for (let i = 0; i < nodeCount; i++) {
      const radius = 22 + Math.random() * 28;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.8;
      const z = radius * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;
      nodeCoords.push(new THREE.Vector3(x, y, z));

      const chosen = Math.random() > 0.4 ? cLightGold : (Math.random() > 0.5 ? cDeepGold : cWarmAmber);
      nodeColors[i * 3] = chosen.r;
      nodeColors[i * 3 + 1] = chosen.g;
      nodeColors[i * 3 + 2] = chosen.b;
    }

    nodeGeom.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeom.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 2.6,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeom, nodeMat);
    neuralGroup.add(nodePoints);

    // Neural Synapse Connection Lines
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const maxLinkDist = 15;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const d = nodeCoords[i].distanceTo(nodeCoords[j]);
        if (d < maxLinkDist) {
          linePositions.push(nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z);
          linePositions.push(nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z);

          const alpha = (1 - d / maxLinkDist) * 0.45;
          lineColors.push(0.96 * alpha, 0.82 * alpha, 0.38 * alpha);
          lineColors.push(0.96 * alpha, 0.82 * alpha, 0.38 * alpha);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeom.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeom, lineMat);
    neuralGroup.add(lines);

    // ========================================================
    // LAYER 3: Central Quantum AI Polyhedra Core
    // ========================================================
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);
    coreGroupRef.current = coreGroup;

    // 1. Inner Gold Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(7.5, 1);
    const icoWire = new THREE.WireframeGeometry(icoGeom);
    const icoLine = new THREE.LineSegments(
      icoWire,
      new THREE.LineBasicMaterial({
        color: 0xf5d061,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      })
    );
    coreGroup.add(icoLine);

    // 2. Middle Dodecahedron
    const dodGeom = new THREE.DodecahedronGeometry(11.5, 0);
    const dodWire = new THREE.WireframeGeometry(dodGeom);
    const dodLine = new THREE.LineSegments(
      dodWire,
      new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      })
    );
    coreGroup.add(dodLine);

    // 3. Outer Geodesic Sphere
    const sphereGeom = new THREE.IcosahedronGeometry(16.5, 2);
    const sphereWire = new THREE.WireframeGeometry(sphereGeom);
    const sphereLine = new THREE.LineSegments(
      sphereWire,
      new THREE.LineBasicMaterial({
        color: 0x92400e,
        transparent: true,
        opacity: 0.24,
        blending: THREE.AdditiveBlending,
      })
    );
    coreGroup.add(sphereLine);

    // Glowing Core Nucleus
    const nucleusGeom = new THREE.SphereGeometry(2.5, 24, 24);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xfff3c4,
      transparent: true,
      opacity: 0.85,
    });
    const nucleus = new THREE.Mesh(nucleusGeom, nucleusMat);
    coreGroup.add(nucleus);

    // ========================================================
    // LAYER 4: Concentric Gyroscopic Tensor Rings
    // ========================================================
    const ringsGroup = new THREE.Group();
    rootGroup.add(ringsGroup);
    ringsGroupRef.current = ringsGroup;

    const ringConfig = [
      { r: 25, tube: 0.08, color: 0xf5d061, opacity: 0.6, speed: 0.0028 },
      { r: 32, tube: 0.06, color: 0xd4af37, opacity: 0.42, speed: -0.002 },
      { r: 39, tube: 0.05, color: 0xb45309, opacity: 0.32, speed: 0.0015 },
    ];

    const ringsList: { mesh: THREE.Mesh; speed: number }[] = [];

    ringConfig.forEach((cfg, idx) => {
      const rGeom = new THREE.TorusGeometry(cfg.r, cfg.tube, 16, 120);
      const rMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
        blending: THREE.AdditiveBlending,
      });
      const rMesh = new THREE.Mesh(rGeom, rMat);
      rMesh.rotation.x = Math.PI / (2.6 + idx * 0.45);
      rMesh.rotation.y = (Math.PI / 4) * idx;
      ringsGroup.add(rMesh);
      ringsList.push({ mesh: rMesh, speed: cfg.speed });
    });

    // ========================================================
    // Scroll Progress Telemetry
    // ========================================================
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        physics.current.scrollProgress = window.scrollY / maxScroll;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ========================================================
    // Window Resize Handler
    // ========================================================
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      width = window.innerWidth;
      height = window.innerHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // ========================================================
    // BUTTER-SMOOTH POINTER SLIDING INTERACTION
    // Tracks pointer slides across the entire window effortlessly
    // DOES NOT affect text selection, clicking, or copying!
    // ========================================================
    const handlePointerMove = (e: PointerEvent) => {
      const p = physics.current;
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Normalized coordinates: -1 (left/top) to +1 (right/bottom)
      const normX = (clientX / window.innerWidth) * 2 - 1;
      const normY = (clientY / window.innerHeight) * 2 - 1;

      p.pointerNormX = normX;
      p.pointerNormY = normY;

      if (!p.hasMoved) {
        p.lastPointerX = clientX;
        p.lastPointerY = clientY;
        p.hasMoved = true;
        return;
      }

      // Delta movement of the sliding pointer
      const deltaX = clientX - p.lastPointerX;
      const deltaY = clientY - p.lastPointerY;

      p.lastPointerX = clientX;
      p.lastPointerY = clientY;

      // Sliding sensitivity: every slide of the pointer rotates the 3D universe
      const slideSensitivity = 0.0028;
      p.targetRotY += deltaX * slideSensitivity;
      p.targetRotX += deltaY * slideSensitivity;

      // Clamping pitch so universe doesn't flip upside down
      p.targetRotX = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, p.targetRotX));

      // Velocity for smooth liquid glide
      p.pointerVelX = deltaX * 0.0004;
      p.pointerVelY = deltaY * 0.0004;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // ========================================================
    // Animation Render Loop (Butter & Ice Physics)
    // ========================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();
      const p = physics.current;

      // 1. Subtle natural orbital idle drift (continuous silky ambient motion)
      p.targetRotY += 0.0009;
      p.targetRotX += Math.sin(elapsed * 0.3) * 0.0002;

      // Inertial glide decay from pointer sliding
      p.targetRotX += p.pointerVelY;
      p.targetRotY += p.pointerVelX;
      p.pointerVelX *= 0.94;
      p.pointerVelY *= 0.94;

      // 2. Exponential smoothing (Frame-rate independent butter-smooth damping)
      // Lerp rate tuned to feel instantly responsive yet liquid-smooth
      const smoothFactor = 1.0 - Math.exp(-9.0 * delta);

      p.currentRotX += (p.targetRotX - p.currentRotX) * smoothFactor;
      p.currentRotY += (p.targetRotY - p.currentRotY) * smoothFactor;

      p.smoothPointerX += (p.pointerNormX - p.smoothPointerX) * smoothFactor;
      p.smoothPointerY += (p.pointerNormY - p.smoothPointerY) * smoothFactor;

      // 3. Apply 3D Rotation to Root Group:
      // Rotates along accumulated sliding angle + responsive pointer perspective tilt
      if (rootGroupRef.current) {
        rootGroupRef.current.rotation.x = p.currentRotX + p.smoothPointerY * 0.35;
        rootGroupRef.current.rotation.y = p.currentRotY + p.smoothPointerX * 0.45;
      }

      // 4. Multi-Layer Stereoscopic Depth (Differential speeds on pointer slide)
      // Core polyhedra rotates dynamically with pointer position
      if (coreGroupRef.current) {
        coreGroupRef.current.rotation.x = elapsed * 0.22 + p.smoothPointerY * 0.6;
        coreGroupRef.current.rotation.y = -elapsed * 0.28 + p.smoothPointerX * 0.7;
        const breathing = 1 + Math.sin(elapsed * 1.4) * 0.045;
        coreGroupRef.current.scale.set(breathing, breathing, breathing);
      }

      // Gyroscopic rings flex and rotate independently
      if (ringsGroupRef.current) {
        ringsList.forEach((r, idx) => {
          r.mesh.rotation.z += r.speed + p.pointerVelX * 2;
          r.mesh.rotation.y += r.speed * 0.5 * (idx % 2 === 0 ? 1 : -1) + p.smoothPointerX * 0.15;
          r.mesh.rotation.x += p.smoothPointerY * 0.12;
        });
      }

      // Neural lattice gentle oscillation
      if (neuralGroupRef.current) {
        neuralGroupRef.current.rotation.z = Math.sin(elapsed * 0.14) * 0.08 + p.smoothPointerX * 0.1;
      }

      // Cosmic starfield deep parallax shift
      if (cosmosGroupRef.current) {
        cosmosGroupRef.current.rotation.y = elapsed * 0.015 - p.smoothPointerX * 0.08;
        cosmosGroupRef.current.rotation.x = p.smoothPointerY * 0.06;
      }

      // 5. Cinematic 3D Camera Orbital Parallax
      // As pointer slides, the camera moves on a 3D arc around the focal center
      if (cameraRef.current) {
        p.targetCamX = p.smoothPointerX * 14;
        p.targetCamY = 4 - p.smoothPointerY * 10 - p.scrollProgress * 15;
        p.targetCamZ = 70 - p.scrollProgress * 22;

        p.camX += (p.targetCamX - p.camX) * smoothFactor;
        p.camY += (p.targetCamY - p.camY) * smoothFactor;
        p.camZ += (p.targetCamZ - p.camZ) * smoothFactor;

        cameraRef.current.position.set(p.camX, p.camY, p.camZ);
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up WebGL resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      renderer.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="spatial-3d-universe-container"
      className="fixed inset-0 overflow-hidden select-none pointer-events-none z-0 bg-[#050505]"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />

      {/* Ambient Dark-to-Gold Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.72)_100%)]" />

      {/* Subtle Technical Grid Matrix */}
      <div className="absolute inset-0 pointer-events-none bg-tech-grid opacity-30" />
    </div>
  );
}
