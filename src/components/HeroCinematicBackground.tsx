import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function HeroCinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse coordinates normalized from -1 to 1 for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, premium lag-free parallax
  const springConfig = { damping: 30, stiffness: 80, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-layer parallax offsets
  const layer1X = useTransform(smoothX, [-1, 1], [-8, 8]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-8, 8]);

  const layer2X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const layer2Y = useTransform(smoothY, [-1, 1], [-18, 18]);

  const lightFollowX = useTransform(smoothX, [-1, 1], ['35%', '65%']);
  const lightFollowY = useTransform(smoothY, [-1, 1], ['25%', '65%']);

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(Math.max(-1, Math.min(1, x)));
      mouseY.set(Math.max(-1, Math.min(1, y)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // High-performance procedural Canvas for 3D gold neural structures & floating champagne particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Nodes in Gold tones
    interface NeuralNode3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
      layer: number;
    }

    const nodeCount = isTouch ? 28 : 55;
    const nodes: NeuralNode3D[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const z = Math.random() * 800 + 100;
      const x = (Math.random() - 0.5) * (width * 1.3);
      const y = (Math.random() - 0.5) * (height * 1.3);
      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        layer: Math.floor(Math.random() * 3), // 0: yellow-gold, 1: deep-gold, 2: champagne
      });
    }

    // Floating warm champagne dust particles
    interface DustParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      flicker: number;
    }

    const dustCount = isTouch ? 30 : 65;
    const dust: DustParticle[] = [];
    for (let i = 0; i < dustCount; i++) {
      dust.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.1 - Math.random() * 0.3,
        size: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        flicker: Math.random() * Math.PI,
      });
    }

    // Pulsing data packets in Gold
    interface DataPulse {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
      color: string;
    }

    const pulses: DataPulse[] = [];
    const maxPulses = isTouch ? 4 : 9;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const onMouseMoveCanvas = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) - width / 2;
      targetMouseY = (e.clientY - rect.top) - height / 2;
    };

    window.addEventListener('mousemove', onMouseMoveCanvas);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;

      const fov = 450;
      const centerX = width / 2;
      const centerY = height / 2;

      const projectedNodes: {
        px: number;
        py: number;
        scale: number;
        alpha: number;
        rawNode: NeuralNode3D;
      }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.baseX += node.vx;
        node.baseY += node.vy;
        node.pulse += node.pulseSpeed;

        const maxBoundX = width * 0.7;
        const maxBoundY = height * 0.7;
        if (node.baseX < -maxBoundX) node.baseX = maxBoundX;
        if (node.baseX > maxBoundX) node.baseX = -maxBoundX;
        if (node.baseY < -maxBoundY) node.baseY = maxBoundY;
        if (node.baseY > maxBoundY) node.baseY = -maxBoundY;

        const depthFactor = (1000 - node.z) / 1000;
        const screenX = node.baseX - curMouseX * depthFactor * 0.6;
        const screenY = node.baseY - curMouseY * depthFactor * 0.6;

        const scale = fov / (fov + node.z);
        const px = centerX + screenX * scale;
        const py = centerY + screenY * scale;

        const alpha = Math.max(0.1, Math.min(0.9, scale * 1.1)) * (0.7 + Math.sin(node.pulse) * 0.3);

        projectedNodes.push({ px, py, scale, alpha, rawNode: node });
      }

      // Draw Gold neural connections
      const connectionThreshold = 145;
      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionThreshold) {
            const lineAlpha = (1 - dist / connectionThreshold) * Math.min(p1.alpha, p2.alpha) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);

            // Gold to Champagne gradient stroke
            const grad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
            grad.addColorStop(0, `rgba(212, 175, 55, ${lineAlpha})`);
            grad.addColorStop(1, `rgba(245, 208, 97, ${lineAlpha * 0.8})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(0.6, (p1.scale + p2.scale) * 0.7);
            ctx.stroke();

            if (pulses.length < maxPulses && Math.random() < 0.003) {
              pulses.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
                color: Math.random() > 0.5 ? '#F5D061' : '#E5C158',
              });
            }
          }
        }
      }

      // Draw pulsing Gold data packets
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const p1 = projectedNodes[pulse.fromIdx];
        const p2 = projectedNodes[pulse.toIdx];
        if (!p1 || !p2) {
          pulses.splice(i, 1);
          continue;
        }

        const pulseX = p1.px + (p2.px - p1.px) * pulse.progress;
        const pulseY = p1.py + (p2.py - p1.py) * pulse.progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Gold nodes with glowing halos
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        const r = p.rawNode.radius * p.scale * 1.8;

        // Outer ambient glow
        ctx.beginPath();
        ctx.arc(p.px, p.py, r * 2.8, 0, Math.PI * 2);
        const glowAlpha = p.alpha * 0.22;
        ctx.fillStyle = p.rawNode.layer === 0
          ? `rgba(245, 208, 97, ${glowAlpha})`
          : p.rawNode.layer === 1
          ? `rgba(212, 175, 55, ${glowAlpha})`
          : `rgba(254, 240, 138, ${glowAlpha})`;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(1, r), 0, Math.PI * 2);
        ctx.fillStyle = p.rawNode.layer === 0
          ? `rgba(254, 243, 199, ${p.alpha})`
          : p.rawNode.layer === 1
          ? `rgba(245, 208, 97, ${p.alpha})`
          : `rgba(253, 224, 71, ${p.alpha})`;
        ctx.fill();
      }

      // Floating warm champagne dust particles
      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;
        d.flicker += 0.04;

        if (d.y < -10) {
          d.y = height + 10;
          d.x = Math.random() * width;
        }
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;

        const currentAlpha = d.alpha * (0.7 + Math.sin(d.flicker) * 0.3);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 230, 138, ${currentAlpha * 0.55})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMoveCanvas);
    };
  }, [isTouch]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* LAYER 1: Deep Black & Obsidian Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Volumetric Dark Amber & Gold Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_-15%,rgba(146,95,14,0.35)_0%,rgba(45,30,8,0.25)_45%,transparent_85%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_35%,rgba(180,83,9,0.18)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_75%,rgba(217,119,6,0.14)_0%,transparent_75%)]" />

      {/* LAYER 2: Subtle Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* LAYER 3: Volumetric Warm Gold Follower Light */}
      {!isTouch && (
        <motion.div
          className="absolute w-[750px] h-[750px] rounded-full blur-[140px] pointer-events-none opacity-40 mix-blend-screen"
          style={{
            left: lightFollowX,
            top: lightFollowY,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(245,208,97,0.22) 0%, rgba(180,83,9,0.14) 40%, transparent 70%)',
          }}
        />
      )}

      {/* LAYER 4: Deep Parallax Gold Geometric Grid & Orbital Halos */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          x: layer1X,
          y: layer1Y,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 119, 6, 0.08) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 15%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 15%, transparent 75%)',
          }}
        />

        <div className="absolute right-[5%] top-[18%] w-[520px] h-[520px] rounded-full border border-amber-500/[0.1] pointer-events-none opacity-60" />
        <div className="absolute right-[10%] top-[24%] w-[380px] h-[380px] rounded-full border border-yellow-500/[0.1] border-dashed pointer-events-none opacity-50" />
        <div className="absolute right-[16%] top-[32%] w-[220px] h-[220px] rounded-full border border-amber-600/[0.08] pointer-events-none opacity-40" />
      </motion.div>

      {/* LAYER 5: 3D Procedural Gold Neural Canvas */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          x: layer2X,
          y: layer2Y,
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full pointer-events-none block"
        />
      </motion.div>

      {/* LAYER 6: Text Readability Contrast Shield */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/75 to-transparent w-full lg:w-[65%]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.85)_100%)] pointer-events-none" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
    </div>
  );
}
