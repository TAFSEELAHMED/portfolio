import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillNode } from '../types';
import { Cpu, Terminal, Sparkles, Share2, Layers, Info, ArrowRight } from 'lucide-react';

export default function SkillsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const [activeSkill, setActiveSkill] = useState<SkillNode | null>(SKILLS_DATA[0]);

  const categories = [
    { label: 'All', icon: Layers },
    { label: 'Deep Learning', icon: Cpu },
    { label: 'NLP', icon: Sparkles },
    { label: 'Computer Vision', icon: Cpu },
    { label: 'Languages', icon: Terminal },
    { label: 'Full-Stack & Tools', icon: Layers },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const currentFocus = hoveredSkill || activeSkill;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Section Background Transition: Black & Gold technical grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.08) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-950/[0.14] blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="SKILLS">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          02 // Technical Arsenal
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div data-cursor-text="SKILLS">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight cursor-default">
            Interactive Skill{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-[#EADBB6] text-sm sm:text-base mt-2 max-w-2xl">
            Hover or click any technology node to explore its cross-disciplinary connections and real-world implementation context.
          </p>
        </div>

        {/* Category Filter Pills (Black & Gold) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#0A0907] border border-amber-500/25 backdrop-blur-md shadow-md">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setSelectedCategory(label)}
              data-cursor="button"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === label
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-[0_0_12px_rgba(212,175,55,0.25)] font-bold'
                  : 'text-zinc-400 hover:text-amber-200 hover:bg-white/[0.04]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Left nodes (7 cols), Right inspector (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Node Cloud */}
        <div className="lg:col-span-7 bg-[#0A0907] border border-amber-500/25 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-amber-500/15 text-xs font-mono text-zinc-400">
            <span>SHOWING {filteredSkills.length} SKILLS</span>
            <span className="text-amber-400">CLICK TO LOCK INSPECTOR</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isFocused = currentFocus?.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ y: -3, scale: 1.02 }}
                  data-cursor="pointer"
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                    isFocused
                      ? 'bg-amber-500/15 border-amber-500/50 shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                      : 'bg-black/40 border-amber-500/15 hover:border-amber-500/35 hover:bg-black/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-2">
                    <span className="text-xs font-bold text-white tracking-tight">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      {skill.highlight ? '★ CORE' : 'ADV'}
                    </span>
                  </div>

                  <div className="text-[10px] text-zinc-400 font-mono mb-2 line-clamp-1">
                    {skill.category}
                  </div>

                  {/* Level bar in Gold */}
                  <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-yellow-200 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: skill.highlight ? '95%' : '80%' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Detail Card for Selected/Hovered Skill in Black & Gold (5 cols) */}
        <div className="lg:col-span-5 bg-[#0A0907] border border-amber-500/25 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentFocus ? (
              <motion.div
                key={currentFocus.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-500/30 font-bold">
                      {currentFocus.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-2">
                      {currentFocus.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-black/50 border border-amber-500/20 text-amber-200">
                    {currentFocus.proficiencyNote}
                  </span>
                </div>

                {/* Practical Description */}
                <div>
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    Engineering Application
                  </h4>
                  <p className="text-sm text-[#EADBB6] leading-relaxed bg-black/40 border border-amber-500/15 rounded-2xl p-4">
                    {currentFocus.description}
                  </p>
                </div>

                {/* Connected Technologies Graph */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                    Connected in Projects &amp; Pipelines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentFocus.connectedSkills.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-xl bg-amber-950/30 text-amber-200 border border-amber-500/25 flex items-center gap-1.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action: View Projects with this skill */}
                <div className="pt-2">
                  <button
                    onClick={scrollToProjects}
                    data-cursor="button"
                    data-cursor-text="PROJECTS"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all hover:brightness-105 active:scale-95"
                  >
                    <span>View Projects Using {currentFocus.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-zinc-400 py-12">
                <Share2 className="w-8 h-8 text-amber-500/40 mb-3" />
                <p className="text-sm">Hover over a skill node to inspect technical connections</p>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>No vanity percentages</span>
            <span className="text-amber-400">Real project applications</span>
          </div>
        </div>
      </div>
    </section>
  );
}
