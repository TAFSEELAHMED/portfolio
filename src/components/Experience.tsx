import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Section Background Transition: Black & Gold minimal background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-amber-950/[0.1] blur-[140px] rounded-full" />
      </div>

      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="EXPERIENCE">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          04 // Practical Experience
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div data-cursor-text="EXPERIENCE">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight cursor-default">
            Work &amp;{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Engineering Practice
            </span>
          </h2>
          <p className="text-[#EADBB6] text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on machine learning experimentation, computer vision models, and applied AI systems.
          </p>
        </div>
      </div>

      {/* Clean Vertical Timeline in Gold */}
      <div className="relative pl-6 sm:pl-8 before:absolute before:inset-y-4 before:left-3 before:w-[2px] before:bg-gradient-to-b before:from-amber-500/50 before:via-yellow-500/30 before:to-transparent space-y-10">
        {EXPERIENCE_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="relative group"
          >
            {/* Timeline bullet node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-[#080705] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_12px_#d4af37]">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            </div>

            {/* Content Card in Obsidian & Gold */}
            <div className="rounded-3xl bg-[#0A0907] border border-amber-500/25 group-hover:border-amber-400/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl">
              {/* Top metadata */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-amber-500/15 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span>{item.role}</span>
                    <span className="text-amber-500/50">•</span>
                    <span className="text-amber-300 font-semibold">{item.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mt-2">
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Work Areas Badges */}
                <div className="flex flex-wrap gap-1.5 max-w-md">
                  {item.workAreas.map((area, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-amber-950/40 text-amber-300 border border-amber-500/30"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {item.bulletPoints.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#EADBB6] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies strip */}
              <div className="pt-4 border-t border-amber-500/15 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-amber-400" />
                  Stack:
                </span>
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-0.5 rounded bg-black/50 text-amber-200/90 border border-amber-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
