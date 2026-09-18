import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Brain, Activity, ShieldAlert, Heart, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import Project3DCard from './Project3DCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type ProjectCategory = 'All' | 'AI / ML' | 'Deep Learning' | 'NLP' | 'Web' | 'Other';

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'AI / ML', 'Deep Learning', 'NLP', 'Web', 'Other'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  const flagshipProject = PROJECTS_DATA.find((p) => p.id === 'cognitive-ai-guardian');
  const otherProjects = filteredProjects.filter((p) => p.id !== 'cognitive-ai-guardian');

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Section Background Transition: Black & Gold ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,rgba(180,83,9,0.04)_40%,transparent_75%)] blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-950/15 blur-[130px] rounded-full" />
      </div>

      {/* Eyebrow in Gold */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="PROJECTS">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          03 // Featured Projects
        </span>
      </div>

      {/* Header & Filter Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div data-cursor-text="PROJECTS">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight cursor-default">
            Production &amp;{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Engineering Builds
            </span>
          </h2>
          <p className="text-[#EADBB6] text-sm sm:text-base mt-2 max-w-2xl">
            Real systems built with deep learning pipelines, computer vision models, and full-stack software architectures.
          </p>
        </div>

        {/* Category Filters (Black & Gold) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#0A0907] border border-amber-500/25 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              data-cursor="button"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-[0_0_12px_rgba(212,175,55,0.25)] font-bold'
                  : 'text-zinc-400 hover:text-amber-200 hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* STAR FLAGSHIP PROJECT: Cognitive AI Guardian (Large Editorial 3D Tilt Card in Black & Gold) */}
      {flagshipProject && (selectedFilter === 'All' || selectedFilter === flagshipProject.category) && (
        <Project3DCard
          onClick={() => onSelectProject(flagshipProject)}
          cursorText="PROJECTS"
          className="bg-[#0A0907]/90 border border-amber-500/30 hover:border-amber-400/70 p-6 sm:p-10 mb-14 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  FLAGSHIP SYSTEM
                </span>
                <span className="text-[11px] font-mono text-amber-200/80 bg-black/50 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  Elderly Care &amp; Cognitive Health
                </span>
              </div>

              {/* Title with subtle shift on card hover */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-300">
                {flagshipProject.title}
              </h3>

              <p className="text-[#EADBB6] text-sm sm:text-base leading-relaxed">
                {flagshipProject.description}
              </p>

              {/* Problem / Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                    The Problem
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {flagshipProject.problemStatement}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-300 font-bold block mb-1">
                    The AI Solution
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {flagshipProject.solution}
                  </p>
                </div>
              </div>

              {/* Core Feature Highlights */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                  Key Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {flagshipProject.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {flagshipProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-xl bg-black/40 text-amber-200/90 border border-amber-500/25 group-hover:border-amber-400/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  id="flagship-open-study-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(flagshipProject);
                  }}
                  data-cursor="button"
                  data-cursor-text="STUDY"
                  className="group/btn relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 transition-all shadow-[0_0_22px_rgba(212,175,55,0.4)] active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 text-black" />
                  <span>Open Engineering Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup / Visual in Black & Gold (5 cols) */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-2xl bg-[#070604] border border-amber-500/25 p-5 shadow-2xl overflow-hidden group-hover:border-amber-400/60 group-hover:scale-[1.02] transition-all duration-300"
              >
                {/* Mockup Top Window Controls */}
                <div className="flex items-center justify-between pb-3 border-b border-amber-500/15 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-zinc-400 ml-2">guardian_platform.ui</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-amber-400 animate-pulse" />
                    ACTIVE TELEMETRY
                  </span>
                </div>

                {/* Simulated UI components inside mockup */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Senior Routine Card */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-500/30">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-sans text-xs font-semibold">Memory Recall: Visual Faces</div>
                        <div className="text-[10px] text-zinc-400">Deep Learning Pattern Match</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40">
                      Score: 96%
                    </span>
                  </div>

                  {/* Caregiver Live Sync */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-amber-950/60 text-yellow-400 border border-amber-500/30">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-sans text-xs font-semibold">Cognitive Telemetry</div>
                        <div className="text-[10px] text-zinc-400">Caregiver Synced via WebSockets</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                      STABLE
                    </span>
                  </div>

                  {/* Emergency Trigger */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-red-950/60 text-red-400 border border-red-500/30">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-sans text-xs font-semibold">Disorientation Alert</div>
                        <div className="text-[10px] text-zinc-400">Automated SMS &amp; GPS Dispatch</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-950/60 text-yellow-300 border border-yellow-500/30">
                      STANDBY
                    </span>
                  </div>
                </div>

                {/* Bottom live stats */}
                <div className="mt-4 pt-3 border-t border-amber-500/15 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Model: ResNet50 + PyTorch</span>
                  <span className="text-amber-400">Inference: 22ms</span>
                </div>
              </div>
            </div>
          </div>
        </Project3DCard>
      )}

      {/* OTHER PROJECTS (Grid with 3D Tilt Cards in Black & Gold) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <Project3DCard
            key={project.id}
            onClick={() => onSelectProject(project)}
            cursorText="VIEW →"
            className="bg-[#0A0907]/90 border border-amber-500/25 hover:border-amber-400/60 p-6 flex flex-col justify-between backdrop-blur-xl shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.18)]"
          >
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/40 border border-white/[0.08] px-2 py-0.5 rounded-full">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title with hover motion */}
              <h4 className="text-xl font-bold text-white group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-300">
                {project.title}
              </h4>

              <p className="text-[#EADBB6] text-xs leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1">
                {project.highlights.slice(0, 2).map((hl, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span className="line-clamp-1">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-black/40 text-amber-200/80 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="pt-6 mt-4 border-t border-amber-500/15 flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project);
                }}
                data-cursor="button"
                data-cursor-text="STUDY"
                className="text-xs font-bold text-amber-300 group-hover:text-amber-100 flex items-center gap-1 transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Full Spec
              </span>
            </div>
          </Project3DCard>
        ))}
      </div>
    </section>
  );
}
