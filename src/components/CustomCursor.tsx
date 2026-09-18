import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type CursorMode = 'default' | 'pointer' | 'button' | 'image' | 'project' | 'pop';

export default function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring
  const springConfig = { damping: 26, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Direct springs for pinpoint center dot
  const dotSpringConfig = { damping: 45, stiffness: 900, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateCursorForElement = (target: HTMLElement | null, e?: MouseEvent) => {
      if (!target) return;

      // If user is currently dragging to select text or has text selected, keep cursor default & clean
      const hasActiveSelection = Boolean(window.getSelection()?.toString().trim());
      const isSelecting = e ? e.buttons === 1 && Boolean(target.closest('p, span, h1, h2, h3, h4, h5, h6, li, pre, code')) : false;

      if (hasActiveSelection || isSelecting) {
        setCursorMode('default');
        setCursorText('');
        return;
      }

      // 1. Explicit data-cursor-text on buttons, badges, pills, and social items has highest priority
      const textEl = target.closest('[data-cursor-text]');
      if (textEl) {
        const customText = textEl.getAttribute('data-cursor-text');
        if (customText) {
          setCursorMode('pop');
          setCursorText(customText);
          return;
        }
      }

      // 2. Interactive buttons & actionable controls
      const buttonElement = target.closest('[data-cursor="button"], button, [role="button"]');
      if (buttonElement) {
        setCursorMode('button');
        const customBtnText = buttonElement.getAttribute('data-cursor-text') || '';
        setCursorText(customBtnText);
        return;
      }

      // 3. Interactive links/inputs
      const interactive = target.closest('a, input, textarea, select');
      if (interactive) {
        setCursorMode('pointer');
        const customLinkText = interactive.getAttribute('data-cursor-text') || '';
        setCursorText(customLinkText);
        return;
      }

      // 4. Project Card hover -> pop "PROJECT"
      const projectCard = target.closest('[data-cursor="project"], [data-cursor-project="true"], .project-card-interactive');
      if (projectCard) {
        setCursorMode('pop');
        setCursorText('PROJECT');
        return;
      }

      // 5. Image / Mockup hover -> pop "EXPLORE"
      const imageElement = target.closest('[data-cursor="image"], img, .mockup-interactive');
      if (imageElement) {
        setCursorMode('pop');
        const customImgText = imageElement.getAttribute('data-cursor-text') || 'EXPLORE';
        setCursorText(customImgText);
        return;
      }

      // 6. Section Detection: Show current section name on pointer
      const section = target.closest('section[id], header, footer');
      if (section) {
        const sectionId = section.getAttribute('id') || (section.tagName.toLowerCase() === 'footer' ? 'footer' : '');
        const sectionLabels: Record<string, string> = {
          'hero': 'AI DEV',
          'about': 'ABOUT ME',
          'skills': 'SKILLS',
          'projects': 'PROJECTS',
          'experience': 'EXPERIENCE',
          'achievements': 'AWARDS',
          'education': 'EDUCATION',
          'ailab': 'AI LAB',
          'ai-lab': 'AI LAB',
          'contact': 'CONNECT',
          'footer': 'CONNECT',
        };

        if (sectionLabels[sectionId]) {
          setCursorMode('pop');
          setCursorText(sectionLabels[sectionId]);
          return;
        }
      }

      // Default idle state
      setCursorMode('default');
      setCursorText('');
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      updateCursorForElement(target, e);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      updateCursorForElement(target, e);
    };

    const handleSelectionChange = () => {
      if (window.getSelection()?.toString().trim()) {
        setCursorMode('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  // Determine dynamic dimensions based on cursor mode & text length
  const getDimensions = () => {
    if (cursorText) {
      const len = cursorText.length;
      // Dynamically scale circle so labels like "ABOUT ME", "EXPERIENCE", "PROJECTS" fit without crowding
      const size = Math.max(82, Math.min(108, 68 + len * 3.6));
      return { width: size, height: size };
    }

    switch (cursorMode) {
      case 'pop':
      case 'project':
        return { width: 90, height: 90 };
      case 'image':
        return { width: 80, height: 80 };
      case 'button':
        return { width: 54, height: 54 };
      case 'pointer':
        return { width: 44, height: 44 };
      default:
        return { width: 28, height: 28 };
    }
  };

  const dims = getDimensions();
  const isPopping = Boolean(cursorText) || cursorMode === 'pop' || cursorMode === 'project' || cursorMode === 'image';

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden" aria-hidden="true">
      {/* Outer Morphing Ring in Luxury Gold & Obsidian Glass */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full backdrop-blur-md select-none pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: dims.width,
          height: dims.height,
          backgroundColor: isPopping
            ? 'rgba(10, 9, 7, 0.88)' // Deep obsidian glass
            : cursorMode === 'button'
            ? 'rgba(212, 175, 55, 0.16)'
            : cursorMode === 'pointer'
            ? 'rgba(212, 175, 55, 0.1)'
            : 'rgba(212, 175, 55, 0.04)',
          borderColor: isPopping
            ? 'rgba(245, 208, 97, 0.95)' // Brilliant radiant gold
            : cursorMode === 'button'
            ? 'rgba(212, 175, 55, 0.7)'
            : cursorMode === 'pointer'
            ? 'rgba(212, 175, 55, 0.5)'
            : 'rgba(212, 175, 55, 0.3)',
          borderWidth: isPopping ? '1.5px' : '1px',
          boxShadow: isPopping
            ? '0 0 28px rgba(212, 175, 55, 0.45), inset 0 0 16px rgba(212, 175, 55, 0.18)'
            : cursorMode === 'button'
            ? '0 0 16px rgba(212, 175, 55, 0.35)'
            : '0 0 10px rgba(212, 175, 55, 0.15)',
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 320,
          mass: 0.35,
        }}
      >
        {/* Text inside cursor: High-clarity Gold typography */}
        {cursorText && (
          <motion.span
            key={cursorText}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.18 }}
            className="font-mono text-[11px] sm:text-xs tracking-widest font-extrabold uppercase text-amber-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] text-center px-1.5 whitespace-nowrap select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Pinpoint Core Dot in Gleaming Gold */}
      <motion.div
        className="fixed top-0 left-0 rounded-full select-none pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPopping ? 0 : cursorMode === 'default' ? 5 : cursorMode === 'button' ? 4 : 0,
          height: isPopping ? 0 : cursorMode === 'default' ? 5 : cursorMode === 'button' ? 4 : 0,
          opacity: isPopping ? 0 : 1,
          backgroundColor: '#F5D061',
          boxShadow: '0 0 8px #D4AF37',
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
