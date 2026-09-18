import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CheckCircle2, Sparkles, Compass, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function About() {
  const journeySteps = [
    {
      period: 'Phase 1: Foundations',
      title: 'Algorithmic Mastery & Software Systems',
      description:
        'Deep dive into Data Structures, Discrete Mathematics, and C/Python software patterns to build core problem-solving intuition.',
      tech: ['Python', 'C++', 'Data Structures', 'Linux'],
      icon: Code2,
    },
    {
      period: 'Phase 2: Deep Learning & Vision',
      title: 'Neural Networks & Computer Vision',
      description:
        'Engineered custom PyTorch convolutional networks, transfer learning pipelines, and facial feature landmark predictors.',
      tech: ['PyTorch', 'CNNs', 'OpenCV', 'Scikit-Learn'],
      icon: Lightbulb,
    },
    {
      period: 'Phase 3: Production AI Systems',
      title: 'Cognitive Health & Autonomous Pipelines',
      description:
        'Designed the Cognitive AI Guardian system for senior care, integrating real-time telemetry, low-latency inference, and human-in-the-loop triggers.',
      tech: ['Cognitive AI', 'React', 'FastAPI', 'Production UI'],
      icon: Rocket,
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Section Background Transition: Black & Gold subtle moving light */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ['-20%', '30%', '-20%'],
            y: ['0%', '15%', '0%'],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-transparent blur-[110px] rounded-full pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-transparent pointer-events-none" />
      </div>

      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="ABOUT ME">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          01 // About Tafsil
        </span>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading and Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight cursor-default"
            data-cursor-text="ABOUT ME"
          >
            More than{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              just code.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#EADBB6] font-normal leading-relaxed" data-cursor-text="ABOUT ME">
            <p>
              I focus on the sweet spot where <strong className="text-amber-200 font-semibold">Deep Learning theory meets real-world software engineering</strong>. Rather than treating machine learning as a sterile notebook experiment, my mission is to build intelligent systems that people actually rely on.
            </p>
            <p className="text-[#EADBB6]/90">
              Whether architecting neural models for fine-grained landmark detection, designing semantic search pipelines with NLP transformers, or developing responsive full-stack applications, I believe true craftsmanship comes from hands-on experimentation, hackathon pressure, and relentless iteration.
            </p>
          </div>

          {/* Compact Statistics Area in Black & Gold */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {PERSONAL_INFO.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                data-cursor-text="ABOUT ME"
                className="relative rounded-2xl bg-[#0A0907] border border-amber-500/25 p-4 text-center group hover:border-amber-400/60 transition-colors shadow-lg cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300 group-hover:text-amber-200 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#FAF5E8] mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-zinc-400 mt-0.5 font-mono">
                  {stat.note}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Principles */}
          <div className="pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Engineering Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Practical Problem-First Architecture',
                'Deep Mathematical & Model Intuition',
                'Empirical Validation & Benchmarks',
                'Accessible, High-Craft User Interfaces',
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-[#FAF5E8] bg-[#0A0907] border border-amber-500/20 rounded-xl px-3 py-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button: Scrolls to Projects */}
          <div className="pt-2">
            <button
              id="about-explore-projects-btn"
              onClick={() => scrollToSection('projects')}
              data-cursor="button"
              data-cursor-text="PROJECTS"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 transition-all shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95"
            >
              <span>Explore Project Builds</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Visual Journey & Milestone Tabs (Black & Gold) */}
        <div className="lg:col-span-6 bg-[#0A0907] border border-amber-500/25 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                Technical Journey &amp; Evolution
              </h3>
            </div>
            <span className="text-[11px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-500/30">
              LEARNING BY DOING
            </span>
          </div>

          {/* Step Timeline */}
          <div className="space-y-6 relative before:absolute before:inset-y-3 before:left-4 before:w-[2px] before:bg-amber-500/20">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-start gap-4 group"
                >
                  {/* Step icon node */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-xl bg-[#080705] border border-amber-500/30 group-hover:border-amber-400 text-amber-400 group-hover:text-amber-200 transition-colors shadow-sm shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-black/40 border border-amber-500/15 rounded-2xl p-4 group-hover:border-amber-500/35 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                        {step.period}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#EADBB6]/80 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/30 text-amber-200/90 border border-amber-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
