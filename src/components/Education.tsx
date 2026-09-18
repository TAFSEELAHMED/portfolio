import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  Terminal, 
  MapPin, 
  Calendar, 
  Award, 
  Sparkles, 
  Building2, 
  Cpu, 
  Binary, 
  Layers, 
  ArrowUpRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationProps {
  onOpenResume?: () => void;
}

export default function Education({ onOpenResume }: EducationProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'systems' | 'math'>('all');

  const moduleCategories = [
    { id: 'all', label: 'All Subjects', icon: Layers },
    { id: 'ai', label: 'AI & Neural Systems', icon: Cpu },
    { id: 'systems', label: 'Algorithms & Computing', icon: Terminal },
    { id: 'math', label: 'Applied Mathematics', icon: Binary },
  ];

  const getFilteredModules = () => {
    if (!EDUCATION_DATA.keyModules) return [];
    if (activeTab === 'all') return EDUCATION_DATA.keyModules;
    if (activeTab === 'ai') return EDUCATION_DATA.keyModules.filter(m => m.category.includes('AI'));
    if (activeTab === 'systems') return EDUCATION_DATA.keyModules.filter(m => m.category.includes('Algorithms'));
    if (activeTab === 'math') return EDUCATION_DATA.keyModules.filter(m => m.category.includes('Mathematics'));
    return EDUCATION_DATA.keyModules;
  };

  return (
    <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/[0.07] via-yellow-500/[0.04] to-transparent blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-amber-950/[0.12] blur-[120px] rounded-full" />
      </div>

      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="EDUCATION">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          06 // Academic Pedigree &amp; Foundations
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl" data-cursor-text="EDUCATION">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight cursor-default">
            Academic Rigor &amp;{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Computer Science Mastery
            </span>
          </h2>
          <p className="text-[#EADBB6] text-sm sm:text-base mt-3 leading-relaxed">
            Pursuing high-distinction undergraduate engineering at <strong className="text-white">SR University, Warangal</strong>, fusing mathematical depth with modern deep learning research and practical software systems.
          </p>
        </div>

        {/* Quick Credentials Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-2xl bg-[#0A0907] border border-amber-500/30 flex items-center gap-2.5 shadow-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-mono font-bold text-amber-200 uppercase tracking-wider">
              {EDUCATION_DATA.batch}
            </span>
          </div>
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              data-cursor="button"
              className="px-4 py-2 rounded-2xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/30 text-xs font-mono font-bold text-amber-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <FileCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Verify Records</span>
            </button>
          )}
        </div>
      </div>

      {/* Key Academic Impression Metric Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Metric 1: CGPA */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0A0907] border border-amber-500/30 p-5 group hover:border-amber-400/60 transition-all shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase font-bold text-amber-400/80 tracking-wider">
              Academic Performance
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text font-mono tracking-tight">
              8.5
            </span>
            <span className="text-xs font-mono text-zinc-500 font-bold">/ 10.0 CGPA</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-[#EADBB6]">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-amber-200">Top Decile Academic Merit</span>
          </div>
        </div>

        {/* Metric 2: University & Location */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0A0907] border border-amber-500/30 p-5 group hover:border-amber-400/60 transition-all shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase font-bold text-amber-400/80 tracking-wider">
              Institution &amp; Campus
            </span>
            <Building2 className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl font-extrabold text-white font-mono tracking-tight leading-tight">
            SR University
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-[#EADBB6]">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">Warangal, Telangana, India</span>
          </div>
        </div>

        {/* Metric 3: Program & Specialization */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0A0907] border border-amber-500/30 p-5 group hover:border-amber-400/60 transition-all shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase font-bold text-amber-400/80 tracking-wider">
              Degree Track
            </span>
            <GraduationCap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl font-extrabold text-white font-mono tracking-tight leading-tight">
            B.Tech CSE
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-200">
            <Cpu className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate font-semibold">Specialization in AI &amp; ML</span>
          </div>
        </div>

        {/* Metric 4: Batch & Timeline */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0A0907] border border-amber-500/30 p-5 group hover:border-amber-400/60 transition-all shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase font-bold text-amber-400/80 tracking-wider">
              Graduation Timeline
            </span>
            <Calendar className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl font-extrabold text-white font-mono tracking-tight leading-tight">
            2024 – 2028
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">Currently Active &amp; Enrolled</span>
          </div>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: University Profile & Academic Honors (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Institution Card */}
          <div className="rounded-3xl bg-[#0A0907] border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 border border-amber-500/30 text-amber-300">
                  Accredited Program
                </span>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">Four-Year Honors Program</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                Undergraduate Degree
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-base text-amber-200 font-semibold leading-snug">
                {EDUCATION_DATA.major}
              </p>
            </div>

            {/* University & Location Metadata */}
            <div className="mt-6 pt-5 border-t border-amber-500/15 space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Institution:</span>
                <span className="text-white font-bold">{EDUCATION_DATA.institution}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Location:</span>
                <span className="text-[#EADBB6] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {EDUCATION_DATA.location}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Graduation Class:</span>
                <span className="text-amber-300 font-bold">{EDUCATION_DATA.batch}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Cumulative GPA:</span>
                <span className="text-amber-400 font-extrabold text-sm">{EDUCATION_DATA.cgpa}</span>
              </div>
            </div>

            {/* Program Timeline Progress Visualizer */}
            <div className="mt-6 pt-5 border-t border-amber-500/15">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-amber-300 font-bold">Degree Journey Progress</span>
                <span className="text-[#EADBB6]">2024 — 2028</span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/60 border border-amber-500/20 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
                <span>Year 1 (Foundations)</span>
                <span className="text-amber-400 font-bold">Core Specialization (Active)</span>
                <span>Capstone 2028</span>
              </div>
            </div>
          </div>

          {/* Academic Distinctions & Campus Leadership */}
          <div className="rounded-3xl bg-[#0A0907] border border-amber-500/25 p-6 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-amber-500/15">
              <Award className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                Academic Distinctions &amp; Honors
              </h4>
            </div>

            <div className="space-y-2.5">
              {EDUCATION_DATA.campusDistinctions?.map((distinction, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-black/40 border border-amber-500/15 hover:border-amber-400/40 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-[#FAF5E8] font-medium leading-relaxed">
                    {distinction}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Deep Coursework Matrix & Technical Syllabi (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Coursework Card */}
          <div className="rounded-3xl bg-[#0A0907] border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Curriculum &amp; Technical Competencies
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Specialized coursework bridging theory to industrial ML architectures
                  </p>
                </div>
              </div>

              {/* Coursework category tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-amber-500/20">
                {moduleCategories.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-all flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-md'
                          : 'text-[#EADBB6] hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Categorized Modules View */}
            <div className="mt-6 space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {getFilteredModules().map((mod, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-black/50 border border-amber-500/20 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                          {mod.category}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-200">
                          Verified Rigor
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mod.topics.map((topic, tidx) => (
                          <div 
                            key={tidx}
                            className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/[0.04] text-xs text-[#FAF5E8]"
                          >
                            <Terminal className="w-3 h-3 text-amber-400 shrink-0" />
                            <span className="font-mono text-[11.5px]">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Comprehensive Subject Tags */}
              <div className="pt-4 border-t border-amber-500/15">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  All Specialized Core Subjects
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-black/60 border border-amber-500/20 text-[#FAF5E8] hover:border-amber-400/60 hover:text-amber-200 transition-colors flex items-center gap-1.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research & Engineering Philosophy Card */}
          <div className="rounded-3xl bg-[#0A0907] border border-amber-500/25 p-6 sm:p-7 backdrop-blur-xl shadow-xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Academic &amp; Research Highlights at SR University
            </h4>
            <div className="space-y-3">
              {EDUCATION_DATA.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-amber-500/15">
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-[#EADBB6] leading-relaxed">
                    {hl}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-yellow-950/20 to-black border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  Dean's Honors &amp; Verified Official Transcripts
                </div>
                <div className="text-[11px] text-[#EADBB6]/80 mt-0.5">
                  Certified grade sheets and verification letters are available for recruiters and university admissions.
                </div>
              </div>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  data-cursor="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-md"
                >
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
