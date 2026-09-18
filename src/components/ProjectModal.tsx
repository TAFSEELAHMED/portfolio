import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle, AlertTriangle, Cpu, Layers, Sparkles, Activity, ShieldAlert, Heart, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'case-study' | 'architecture' | 'simulator'>('case-study');
  const [simStep, setSimStep] = useState<number>(0);
  const [simAlertSent, setSimAlertSent] = useState<boolean>(false);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window in Luxury Black & Gold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0907] border border-amber-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/20 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/40 font-bold">
                CASE STUDY
              </span>
              <span className="text-xs text-amber-200/80 font-mono hidden sm:inline">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-amber-300 hover:text-amber-100 bg-amber-950/40 border border-amber-500/40 transition-colors"
                  title="Open Live Deployment"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/40 transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Header */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-amber-500/15 bg-gradient-to-b from-amber-500/[0.05] to-transparent">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#EADBB6] mt-1 font-medium">
              {project.subtitle}
            </p>

            {/* View Switcher Tabs in Gold */}
            <div className="flex items-center gap-2 mt-5">
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'case-study'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                    : 'text-zinc-400 hover:text-amber-200 bg-black/40 border border-amber-500/20'
                }`}
              >
                01-06 Engineering Study
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                    : 'text-zinc-400 hover:text-amber-200 bg-black/40 border border-amber-500/20'
                }`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'simulator'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                    : 'text-zinc-400 hover:text-amber-200 bg-black/40 border border-amber-500/20'
                }`}
              >
                Interactive Feature Simulator
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {activeTab === 'case-study' && (
              <div className="space-y-8">
                {/* 01 Problem */}
                <div className="relative pl-6 border-l-2 border-amber-500/60">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    01 — Problem Definition
                  </span>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                {/* 02 Approach */}
                <div className="relative pl-6 border-l-2 border-yellow-500/60">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-yellow-400 font-bold block mb-1">
                    02 — Engineering Approach
                  </span>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {caseStudy.approach}
                  </p>
                </div>

                {/* 03 Technology */}
                <div className="relative pl-6 border-l-2 border-amber-600/60">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-2">
                    03 — Technology Stack &amp; Tools
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.technology.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-amber-500/20 text-xs font-mono text-zinc-300"
                      >
                        <Cpu className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 04 Implementation */}
                <div className="relative pl-6 border-l-2 border-amber-400/60">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    04 — Implementation Details
                  </span>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {caseStudy.implementation}
                  </p>
                </div>

                {/* 05 Impact & 06 Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-2">
                      05 — Impact &amp; Utility
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {caseStudy.impact}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
                      06 — Quantitative Results &amp; Metrics
                    </span>
                    <ul className="space-y-2">
                      {caseStudy.results.map((res, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Technical Challenges */}
                {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                  <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1.5 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      Key Technical Challenges &amp; Trade-offs
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                      {caseStudy.challenges.map((ch, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-black/60 border border-amber-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    High-Level Pipeline &amp; Data Flow
                  </h4>

                  <div className="p-4 rounded-xl bg-black/50 border border-amber-500/15 font-mono text-xs text-zinc-300 mb-6 overflow-x-auto whitespace-pre-wrap">
                    {caseStudy.architectureSummary}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20">
                      <div className="text-[11px] font-mono text-amber-400 mb-1">STAGE 1</div>
                      <div className="text-sm font-semibold text-white">Client Perception</div>
                      <div className="text-xs text-zinc-400 mt-1">Audio / Visual input processing, local sensor telemetry, and user intent parsing.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20">
                      <div className="text-[11px] font-mono text-yellow-400 mb-1">STAGE 2</div>
                      <div className="text-sm font-semibold text-white">Model Inference</div>
                      <div className="text-xs text-zinc-400 mt-1">Feature extraction, neural classification, and cognitive scoring algorithms.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20">
                      <div className="text-[11px] font-mono text-amber-300 mb-1">STAGE 3</div>
                      <div className="text-sm font-semibold text-white">Action &amp; Feedback</div>
                      <div className="text-xs text-zinc-400 mt-1">Real-time caregiver alerts, adaptive memory tasks, and emergency SOS routing.</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/20">
                  <h4 className="text-sm font-semibold text-white mb-2">Architectural Highlights</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      Strict decoupling between neural inference backend and touch/voice frontend clients.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Low-latency WebSockets for instantaneous real-time emergency dispatch and sensor synchronization.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      Fail-safe offline state handling ensuring critical safety features operate under connectivity loss.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'simulator' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-black/60 border border-amber-500/25">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-mono font-semibold uppercase text-white">
                        Live Feature Simulation: Cognitive AI Guardian
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40">
                      INTERACTIVE DEMO
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6">
                    Simulate how the cognitive assistance platform supports an elder with daily memory stimulus and emergency caregiver synchronization.
                  </p>

                  {/* Simulator Screen */}
                  <div className="rounded-xl bg-black/80 border border-amber-500/20 p-5">
                    {simStep === 0 && (
                      <div className="space-y-4 text-center py-4">
                        <Heart className="w-10 h-10 text-amber-400 mx-auto animate-pulse" />
                        <h5 className="text-base font-bold text-white">Morning Memory Stimulation Check-in</h5>
                        <p className="text-xs text-[#EADBB6] max-w-md mx-auto">
                          "Good morning! Can you identify the familiar photo of your grandson Liam from the options below?"
                        </p>
                        <div className="flex justify-center gap-3 pt-2">
                          <button
                            onClick={() => setSimStep(1)}
                            className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-bold"
                          >
                            [Simulate Correct Recall]
                          </button>
                          <button
                            onClick={() => setSimStep(2)}
                            className="px-4 py-2 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-200 border border-yellow-500/40 text-xs font-bold"
                          >
                            [Simulate Hesitation / Delay]
                          </button>
                        </div>
                      </div>
                    )}

                    {simStep === 1 && (
                      <div className="space-y-3 py-3 text-center">
                        <div className="inline-flex p-3 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mb-2">
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h5 className="text-sm font-bold text-emerald-300">Prompt Recall Verified (1.4s)</h5>
                        <p className="text-xs text-zinc-300">
                          Neural model logs positive response velocity (+15 Cognitive Vitality). Caregiver portal updated with daily routine confirmation.
                        </p>
                        <button
                          onClick={() => setSimStep(0)}
                          className="mt-2 text-xs font-mono text-amber-400 underline hover:text-amber-300"
                        >
                          Reset Demo
                        </button>
                      </div>
                    )}

                    {simStep === 2 && (
                      <div className="space-y-3 py-3 text-center">
                        <div className="inline-flex p-3 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 mb-2">
                          <Activity className="w-8 h-8" />
                        </div>
                        <h5 className="text-sm font-bold text-amber-300">Adaptive Voice Prompt Activated</h5>
                        <p className="text-xs text-zinc-300">
                          The system detects cognitive hesitation, plays a soothing contextual clue, and softly schedules a follow-up check-in.
                        </p>
                        <button
                          onClick={() => setSimStep(0)}
                          className="mt-2 text-xs font-mono text-amber-400 underline hover:text-amber-300"
                        >
                          Reset Demo
                        </button>
                      </div>
                    )}
                  </div>

                  {/* SOS Simulation */}
                  <div className="mt-4 pt-4 border-t border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-zinc-300 font-mono">Emergency SOS Routine:</span>
                    </div>
                    <button
                      onClick={() => setSimAlertSent(!simAlertSent)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        simAlertSent
                          ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                          : 'bg-red-950/40 text-red-300 border border-red-500/30 hover:bg-red-900/50'
                      }`}
                    >
                      {simAlertSent ? '🚨 SOS Alert Dispatched (<2s)!' : 'Trigger SOS Test'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 sm:px-8 py-4 bg-black/40 border-t border-amber-500/20 flex items-center justify-between">
            <span className="text-xs text-[#EADBB6] font-mono">
              Designed &amp; Built by Tafsil Ahmed
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
