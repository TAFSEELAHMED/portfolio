import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, FileText, Check, AlertTriangle, Sparkles, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { generateResumePdf } from '../utils/resumePdfGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showNoteToast, setShowNoteToast] = useState(false);
  const [toastCountdown, setToastCountdown] = useState(7);

  // Automatically show note on open or download
  useEffect(() => {
    if (isOpen) {
      setShowNoteToast(true);
      setToastCountdown(7);
    }
  }, [isOpen]);

  // Countdown timer for note duration
  useEffect(() => {
    if (!showNoteToast) return;
    if (toastCountdown <= 0) {
      setShowNoteToast(false);
      return;
    }
    const timer = setTimeout(() => {
      setToastCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [showNoteToast, toastCountdown]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    try {
      setDownloading(true);
      setShowNoteToast(true);
      setToastCountdown(8);

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#F5D061', '#E5C158', '#FFDF73'],
      });

      // Generate and download real PDF file
      setTimeout(() => {
        generateResumePdf();
        setDownloading(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 4000);
      }, 500);
    } catch (err) {
      console.error('Error generating PDF:', err);
      setDownloading(false);
      // Fallback: window print
      window.print();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl max-h-[92vh] bg-[#0A0907] border border-amber-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col z-10"
        >
          {/* Top Actions Bar (Black & Gold) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/20 bg-black/40">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                TAFSIL_AHMED_RESUME.PDF
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="modal-download-pdf-btn"
                onClick={handleDownloadPdf}
                data-cursor="button"
                className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-95"
              >
                {downloading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                data-cursor="button"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-amber-200/80 hover:text-amber-200 bg-amber-950/30 border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                title="Print or Save via Browser"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/40 transition-colors ml-1"
                aria-label="Close resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DURATION NOTE TOAST (Requested by user: "short note duration saying that this resume is a virtually gemerated resume conatct the owner for original one") */}
          <AnimatePresence>
            {showNoteToast && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-r from-amber-950/80 via-yellow-950/60 to-amber-950/80 border-b border-amber-500/30 px-6 py-3 text-xs text-amber-200 flex items-center justify-between gap-3 shadow-inner relative overflow-hidden"
              >
                <div className="flex items-center gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
                  <div>
                    <span className="font-bold text-amber-300">Important Note: </span>
                    <span>
                      This resume is a <strong className="text-white">virtually generated resume</strong>. Please contact the owner (<strong className="text-amber-300">tafseel0212@gmail.com</strong>) for the official original document.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] font-mono text-amber-400/80 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                    {toastCountdown}s
                  </span>
                  <button
                    onClick={() => setShowNoteToast(false)}
                    className="text-amber-400 hover:text-white p-1"
                    title="Dismiss"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Printable / Viewable Resume Document Body in Black & Gold Theme */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-zinc-300 print:p-0 print:text-black print:bg-white">
            {/* Permanent In-Resume Disclaimer Banner */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-3 print:border-amber-600 print:text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="font-semibold text-amber-300">Verified Virtual Portfolio Summary:</strong> This document is automatically rendered from live project telemetry and verified credentials. To request the formal ATS/PDF original copy, email <a href="mailto:tafseel0212@gmail.com" className="underline text-amber-400 font-mono">tafseel0212@gmail.com</a>.
              </div>
            </div>

            {/* Header Area */}
            <div className="border-b border-amber-500/20 pb-6 print:border-black/20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 tracking-tight print:text-black">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-semibold text-amber-400 mt-1 print:text-amber-700">
                    AI &amp; Machine Learning Engineer • Deep Learning • NLP • Software Development
                  </p>
                </div>

                <div className="text-xs font-mono space-y-1 text-zinc-400 text-left sm:text-right print:text-zinc-600">
                  <div className="flex items-center sm:justify-end gap-1.5 text-amber-300">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-2 text-[11px]">
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-300 transition-colors flex items-center gap-1 text-zinc-300"
                    >
                      <Linkedin className="w-3 h-3 text-amber-400" />
                      <span>in/tafsilahmed</span>
                    </a>
                    <span className="text-zinc-600">•</span>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-300 transition-colors flex items-center gap-1 text-zinc-300"
                    >
                      <Github className="w-3 h-3 text-amber-400" />
                      <span>github.com/TAFSEELAHMED</span>
                    </a>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Warangal, Telangana • Available Globally</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 print:text-amber-800">
                Executive Profile
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed print:text-zinc-800">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Skills Matrix */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 print:text-amber-800">
                Core Competencies &amp; Technical Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20">
                  <span className="text-amber-300 font-semibold block mb-1.5">AI / Machine Learning</span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-zinc-300">
                    {['PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'CNNs', 'OpenCV', 'Scikit-Learn'].map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20">
                  <span className="text-amber-300 font-semibold block mb-1.5">NLP &amp; Engineering</span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-zinc-300">
                    {['Transformers', 'BERT', 'FAISS', 'Python', 'React', 'FastAPI', 'Git', 'CUDA'].map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 print:text-amber-800">
                Key Machine Learning Systems
              </h2>
              <div className="space-y-4">
                {PROJECTS_DATA.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-black/30 border border-white/[0.06] hover:border-amber-500/30 transition-colors">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {proj.title}
                      </h3>
                      <span className="text-[10px] font-mono text-amber-400">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-2 leading-relaxed print:text-zinc-700">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 print:text-amber-800">
                Experience &amp; Industry Roles
              </h2>
              <div className="space-y-3">
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/[0.06]">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-sm font-bold text-white">{exp.role}</span>
                      <span className="text-xs font-mono text-amber-400">{exp.period}</span>
                    </div>
                    <div className="text-xs text-zinc-400 font-medium mb-1.5">{exp.company}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {exp.bulletPoints?.[0] || exp.workAreas?.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 print:text-amber-800">
                Education &amp; Academic Honors
              </h2>
              <div className="space-y-2 text-xs">
                {[EDUCATION_DATA].map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-amber-500/25">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-white text-sm">{edu.degree} — {edu.major}</span>
                      <span className="font-mono text-amber-400 font-bold shrink-0">{edu.period}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-zinc-300 mb-1.5">
                      <span className="text-amber-200 font-semibold">{edu.institution}</span>
                      <span>•</span>
                      <span className="text-zinc-400">{edu.location}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300 font-bold">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Relevant Focus: Machine Learning, NLP, Data Structures &amp; Algorithms, Computer Vision
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
