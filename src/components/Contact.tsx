import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle2, FileText, Download, ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all fields before sending.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#F5D061', '#FAF5E8'],
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Section Background Transition: Black & Gold ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.09)_0%,rgba(180,83,9,0.04)_40%,transparent_75%)] blur-[120px]" />
      </div>

      {/* Resume CTA Banner in Obsidian & Gold */}
      <div className="mb-24 rounded-3xl bg-[#0A0907] border border-amber-500/30 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl" data-cursor-text="CONNECT">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              CAREER &amp; COLLABORATIONS
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight cursor-default">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                intelligent.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#EADBB6]">
              Seeking AI / Machine Learning engineering roles, research opportunities, or high-impact technical initiatives.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResume}
              data-cursor="button"
              data-cursor-text="CV"
              className="px-6 py-3.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95"
            >
              <FileText className="w-4 h-4 text-black" />
              <span>View Resume</span>
            </button>

            <button
              onClick={onOpenResume}
              data-cursor="button"
              className="px-6 py-3.5 rounded-full text-xs font-bold text-amber-200 bg-black/50 hover:bg-amber-950/40 border border-amber-500/30 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          08 // Initiate Contact
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Have an idea? <br />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>

          <p className="text-[#EADBB6] text-sm sm:text-base leading-relaxed">
            Whether you have a machine learning project, an engineering opening, or just want to discuss deep learning architectures and NLP, I'd love to connect.
          </p>

          {/* Contact Direct Links in Black & Gold */}
          <div className="space-y-3 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0A0907] border border-amber-500/20 hover:border-amber-400/60 text-[#FAF5E8] hover:text-white transition-colors group shadow-lg"
            >
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-amber-300 uppercase font-bold">Direct Email</div>
                <div className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              data-cursor-text="LINKEDIN"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0A0907] border border-amber-500/20 hover:border-amber-400/60 text-[#FAF5E8] hover:text-white transition-colors group shadow-lg"
            >
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-amber-300 uppercase font-bold">Professional Network</div>
                <div className="text-sm font-semibold text-white">linkedin.com/in/tafsilahmed</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              data-cursor-text="GITHUB"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0A0907] border border-amber-500/20 hover:border-amber-400/60 text-[#FAF5E8] hover:text-white transition-colors group shadow-lg"
            >
              <div className="p-2.5 rounded-xl bg-black/50 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-amber-300 uppercase font-bold">Open Source Repos</div>
                <div className="text-sm font-semibold text-white">github.com/TAFSEELAHMED</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Form Column in Black & Gold (7 cols) */}
        <div className="lg:col-span-7 bg-[#0A0907] border border-amber-500/25 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative shadow-2xl">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="inline-flex p-4 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-sm text-[#EADBB6] max-w-md mx-auto">
                Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I've received your note and will reply to <span className="text-amber-300 font-mono">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold text-amber-300 bg-amber-950/40 border border-amber-500/40 hover:bg-amber-900/50 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/15 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAF5E8]">
                  Direct Dispatch Form
                </span>
                <span className="text-[11px] font-mono text-amber-400">Response &lt; 24h</span>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-red-300 text-xs font-mono">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#EADBB6] mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Recruiter or Collaborator Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 focus:border-amber-400 focus:bg-black text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#EADBB6] mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com or personal"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 focus:border-amber-400 focus:bg-black text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#EADBB6] mb-2 font-semibold">
                  Message / Opportunity Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your role, project, or technical question..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 focus:border-amber-400 focus:bg-black text-sm text-white placeholder:text-zinc-600 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-yellow-300 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
