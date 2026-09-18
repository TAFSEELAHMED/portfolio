import { motion } from 'motion/react';
import { Award, Trophy, BookOpen, Lightbulb } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function Achievements() {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return Trophy;
      case 'Workshop':
        return BookOpen;
      case 'Project':
        return Lightbulb;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="AWARDS">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          05 // Honors &amp; Activities
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div data-cursor-text="AWARDS">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight cursor-default">
            Hackathons &amp;{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Technical Milestones
            </span>
          </h2>
          <p className="text-[#EADBB6] text-sm sm:text-base mt-2 max-w-2xl">
            Active competitive hackathons, developer workshops, and departmental engineering showcases.
          </p>
        </div>
      </div>

      {/* Grid of Compact, High-Impact Cards with Badges in Black & Gold */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => {
          const Icon = getBadgeIcon(item.type);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl bg-[#0A0907] border border-amber-500/25 hover:border-amber-400/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-950/60 text-amber-300 border border-amber-500/30">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-amber-400/90 mb-3">
                  {item.event}
                </div>

                <p className="text-xs sm:text-sm text-[#EADBB6] leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-amber-500/15 flex flex-wrap gap-1.5">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/40 text-amber-200/90 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
