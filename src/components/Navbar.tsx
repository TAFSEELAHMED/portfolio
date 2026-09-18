import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Sparkles, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'AI Lab', href: '#ailab' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const currentScroll = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentScroll) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#050505]/90 backdrop-blur-xl border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo in Black & Gold */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            data-cursor="pointer"
            className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-lg sm:text-xl transition-transform"
            aria-label="Tafsil Ahmed Portfolio Home"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_#f59e0b]" />
            <span className="font-mono font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500">
              TAFSIL.
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              AI Engineer
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A0907]/90 border border-amber-500/20 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-cursor="pointer"
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
                    isActive ? 'text-amber-200 font-semibold' : 'text-zinc-400 hover:text-amber-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-amber-500/15 border border-amber-500/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Social links, Resume & Mobile toggle */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Quick Social Links */}
            <div className="hidden sm:flex items-center gap-1.5 mr-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                data-cursor-text="GITHUB"
                className="p-2 rounded-full text-zinc-400 hover:text-amber-300 hover:bg-amber-950/40 border border-transparent hover:border-amber-500/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                data-cursor-text="LINKEDIN"
                className="p-2 rounded-full text-zinc-400 hover:text-amber-300 hover:bg-amber-950/40 border border-transparent hover:border-amber-500/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              data-cursor="button"
              data-cursor-text="CV"
              className="group relative inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 transition-all duration-200 shadow-[0_0_15px_rgba(212,175,55,0.35)] active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-amber-200 hover:text-white bg-black/50 border border-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#0A0907]/95 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-amber-300 mb-1 border-b border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NAVIGATION PORTAL</span>
              </div>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold'
                        : 'text-[#EADBB6] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-amber-500/20 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  <FileText className="w-4 h-4 text-black" />
                  <span>View / Download Resume (PDF)</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-black/60 border border-amber-500/20 text-xs font-mono text-amber-200 hover:text-white flex items-center justify-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5 text-amber-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-black/60 border border-amber-500/20 text-xs font-mono text-amber-200 hover:text-white flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
