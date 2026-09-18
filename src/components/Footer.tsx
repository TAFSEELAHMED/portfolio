import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-amber-500/20 bg-[#050505] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#d4af37]" />
            <span className="font-mono font-extrabold tracking-wider text-white text-base">
              TAFSIL AHMED
            </span>
          </div>
          <p className="text-xs text-[#EADBB6]/80 mt-1 font-mono">
            "Building, learning and experimenting with AI."
          </p>
        </div>

        {/* Center links in Gold */}
        <div className="flex items-center gap-5 text-xs font-mono text-[#EADBB6]/80">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="pointer"
            data-cursor-text="GITHUB"
            className="hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5 text-amber-400" />
            <span>GitHub</span>
          </a>
          <span className="text-amber-500/40">•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="pointer"
            data-cursor-text="LINKEDIN"
            className="hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5 text-amber-400" />
            <span>LinkedIn</span>
          </a>
          <span className="text-amber-500/40">•</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            data-cursor="pointer"
            data-cursor-text="EMAIL"
            className="hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Right copyright & Back to top */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
          <span>© 2026 Tafsil Ahmed</span>
          <button
            onClick={scrollToTop}
            data-cursor="button"
            className="p-2 rounded-xl bg-black/60 hover:bg-amber-950/40 text-[#FAF5E8] hover:text-amber-300 border border-amber-500/25 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
