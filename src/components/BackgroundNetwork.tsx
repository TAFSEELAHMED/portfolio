import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function BackgroundNetwork() {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 3 : 300);

  const springConfig = { damping: 40, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* Subtle fine technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

      {/* Very faint ambient dots */}
      <div className="absolute inset-0 bg-tech-dots opacity-25" />

      {/* Top ambient glow in Gold */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-950/20 via-yellow-950/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Bottom right soft glow */}
      <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-amber-950/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Mouse dynamic follower light (desktop only) */}
      {mounted && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[100px] pointer-events-none"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}

      {/* Subtle scanline / vignette border */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)]" />
    </div>
  );
}
