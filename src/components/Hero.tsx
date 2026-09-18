import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Download, Layers, Terminal, Activity, Zap, Cpu, Sparkles, Github, Linkedin } from 'lucide-react';
import HeroCinematicBackground from './HeroCinematicBackground';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'weights' | 'attention' | 'metrics'>('weights');

  const scrollToSection = (id: string) => {
    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      {/* FULL-SCREEN CINEMATIC VISUAL BACKGROUND (Black & Gold) */}
      <HeroCinematicBackground />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Large Black & Gold Editorial Typography & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tag / Eyebrow Badge in Imperial Gold */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                AI &amp; MACHINE LEARNING ENGINEER
              </span>
            </div>

            {/* Large Typography Headline in Black & Gold */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Building{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                intelligent systems
              </span>{' '}
              <br className="hidden sm:inline" />
              that solve real problems.
            </h1>

            {/* Supporting Subtitle in Warm Oyster / Champagne Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#EADBB6] font-normal leading-relaxed max-w-2xl mb-10">
              I'm <span className="text-amber-200 font-semibold">Tafsil Ahmed</span> — an AI &amp; ML developer focused on Deep Learning, NLP, intelligent applications and modern software development.
            </p>

            {/* Action Buttons: Open & Scroll when clicked */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollToSection('projects')}
                data-cursor="button"
                data-cursor-text="PROJECTS"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 transition-all duration-300 shadow-[0_0_28px_rgba(212,175,55,0.45)] hover:shadow-[0_0_42px_rgba(212,175,55,0.65)] active:scale-95"
              >
                <Layers className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-connect-btn"
                onClick={() => scrollToSection('contact')}
                data-cursor="button"
                data-cursor-text="CONNECT"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-amber-200 bg-amber-950/25 hover:bg-amber-950/40 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-md active:scale-95 shadow-lg"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:text-amber-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>

              {/* Direct GitHub & LinkedIn shortcuts */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="pointer"
                  data-cursor-text="GITHUB"
                  className="p-3.5 rounded-full text-amber-300 hover:text-white bg-black/60 hover:bg-amber-950/50 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-md flex items-center justify-center group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="pointer"
                  data-cursor-text="LINKEDIN"
                  className="p-3.5 rounded-full text-amber-300 hover:text-white bg-black/60 hover:bg-amber-950/50 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-md flex items-center justify-center group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Secondary Action: Direct Resume PDF Trigger */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <button
                onClick={onOpenResume}
                data-cursor="button"
                data-cursor-text="RESUME"
                className="group inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-100 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
                <span className="underline underline-offset-4 decoration-amber-500/50 group-hover:decoration-amber-300">
                  Download Resume (PDF)
                </span>
              </button>
              <span className="text-amber-500/40">•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for ML Roles
              </span>
            </div>
          </motion.div>

          {/* Right Column: Holographic Futuristic Model Console in Black & Gold (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Glassmorphic Cyber Terminal Frame */}
            <div
              data-cursor="image"
              data-cursor-text="EXPLORE"
              className="w-full rounded-3xl bg-[#0B0906]/90 border border-amber-500/25 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
            >
              {/* Gold top spotlight */}
              <div className="absolute top-0 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between pb-4 border-b border-amber-500/15 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="text-xs font-mono text-amber-200 ml-2 font-medium flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    model_inference_engine.py
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>CUDA ACCELERATED</span>
                </div>
              </div>

              {/* Inspector Mode Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-black/50 border border-amber-500/20 mb-4">
                {[
                  { id: 'weights', label: 'Latent Tensors' },
                  { id: 'attention', label: 'Self-Attention' },
                  { id: 'metrics', label: 'Inference Telemetry' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 py-1.5 text-[11px] font-mono rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                        : 'text-zinc-400 hover:text-amber-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Tab View */}
              <div className="min-h-[220px] font-mono text-xs flex flex-col justify-between">
                {activeTab === 'weights' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20 space-y-2">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>Tensor Representation</span>
                        <span className="text-amber-400">Dim: [1, 512, 768]</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center">
                        {[0.824, -0.412, 0.991, 0.128, -0.054, 0.742, -0.893, 0.315].map((val, idx) => (
                          <div
                            key={idx}
                            className={`p-1.5 rounded bg-black/40 border ${
                              val > 0 ? 'border-amber-500/30 text-amber-200' : 'border-zinc-800 text-zinc-400'
                            }`}
                          >
                            {val.toFixed(3)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-amber-500/15 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-amber-400" />
                        <div>
                          <div className="text-white text-[11px] font-sans font-semibold">PyTorch Architecture</div>
                          <div className="text-[10px] text-zinc-400">Multi-Head Cross Attention</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
                        Float16 Precision
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'attention' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20 space-y-2">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>Query-Key Softmax Routing</span>
                        <span className="text-amber-400">12 Heads Active</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { token: 'Neural', weight: 88 },
                          { token: 'Network', weight: 94 },
                          { token: 'Transformer', weight: 79 },
                        ].map((t) => (
                          <div key={t.token} className="flex items-center gap-2 text-[11px]">
                            <span className="w-20 text-[#EADBB6]">{t.token}</span>
                            <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-amber-400 to-yellow-200 rounded-full"
                                style={{ width: `${t.weight}%` }}
                              />
                            </div>
                            <span className="w-8 text-right text-amber-300 text-[10px]">{t.weight}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-400 leading-relaxed">
                      Softmax dot-product weights dynamically prioritize semantic context tokens in real time.
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20">
                        <span className="text-[10px] text-zinc-400 block">Latency (Batch 1)</span>
                        <span className="text-lg font-bold text-amber-200">1.84 ms</span>
                        <span className="text-[10px] text-emerald-400 block mt-0.5">99th Percentile</span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20">
                        <span className="text-[10px] text-zinc-400 block">VRAM Footprint</span>
                        <span className="text-lg font-bold text-amber-200">1.28 GB</span>
                        <span className="text-[10px] text-amber-400 block mt-0.5">Optimized KV-Cache</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/15 flex items-center justify-between text-[11px]">
                      <span className="text-[#EADBB6] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        Throughput
                      </span>
                      <span className="text-white font-bold">14,200 tokens/sec</span>
                    </div>
                  </div>
                )}

                {/* Footer status line */}
                <div className="pt-3 mt-3 border-t border-amber-500/15 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Interactive Live Sandbox
                  </span>
                  <span className="text-amber-400/80">Tafsil Ahmed Portfolio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="pt-12 flex flex-col items-center justify-center text-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            data-cursor="button"
            className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-amber-300 transition-colors"
            aria-label="Scroll to About Section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-amber-300">
              Scroll to explore
            </span>
            <div className="w-5 h-9 rounded-full border border-amber-500/30 group-hover:border-amber-400/70 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-amber-400"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
