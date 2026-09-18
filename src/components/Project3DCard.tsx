import { useState, useRef, MouseEvent, ReactNode } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

interface Project3DCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  cursorText?: string;
}

export default function Project3DCard({
  children,
  className = '',
  onClick,
  cursorText = 'PROJECTS',
}: Project3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for 3-4 degree maximum rotation (subtle, non-exaggerated)
  const springConfig = { damping: 25, stiffness: 260, mass: 0.5 };
  const smoothRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springConfig);
  const smoothRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    // Normalized coordinates from -0.5 to 0.5
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor="project"
      data-cursor-text={cursorText}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
      animate={{
        y: isHovered ? -6 : 0,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-colors duration-300 ${className}`}
    >
      {/* Local Spotlight Glow Following Cursor Inside Card (Rich Gold) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(212, 175, 55, 0.18), transparent 75%)`,
        }}
      />

      {/* Card Content with 3D Depth */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between" style={{ transform: 'translateZ(10px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
