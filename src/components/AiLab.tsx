import { useState } from 'react';
import { motion } from 'motion/react';
import { Beaker } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';

export default function AiLab() {
  const [selectedExp, setSelectedExp] = useState(LAB_EXPERIMENTS[0]);

  // States for Experiment 1: Attention Matrix
  const sampleSentence = ['The', 'neural', 'network', 'learns', 'spatial', 'features'];
  const [selectedTokenIdx, setSelectedTokenIdx] = useState<number>(1);

  // States for Experiment 2: Kernel Sandbox
  const [activeKernel, setActiveKernel] = useState<'edge' | 'sharpen' | 'gaussian'>('edge');
  const kernels = {
    edge: [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1],
    ],
    sharpen: [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0],
    ],
    gaussian: [
      [1 / 16, 2 / 16, 1 / 16],
      [2 / 16, 4 / 16, 2 / 16],
      [1 / 16, 2 / 16, 1 / 16],
    ],
  };

  // States for Experiment 3: Vector Embeddings
  const conceptPairs = [
    { c1: 'Deep Learning', c2: 'Neural Networks', similarity: 0.94, desc: 'Extremely high semantic proximity in latent space' },
    { c1: 'Natural Language', c2: 'Transformers', similarity: 0.89, desc: 'High domain alignment in NLP representations' },
    { c1: 'Computer Vision', c2: 'Convolutional Kernels', similarity: 0.91, desc: 'Direct architectural relationship' },
    { c1: 'Machine Learning', c2: 'Web Frontend CSS', similarity: 0.28, desc: 'Divergent technical domains in latent space' },
  ];
  const [activePairIdx, setActivePairIdx] = useState(0);

  // States for Experiment 4: Tokenizer
  const [customText, setCustomText] = useState('DeepLearning optimizes transformer weights');

  return (
    <section id="ailab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4" data-cursor-text="AI LAB">
        <span className="h-px w-8 bg-amber-400/60" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          07 // AI Lab &amp; Sandbox
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div data-cursor-text="AI LAB">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight cursor-default">
            Things I'm{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              building.
            </span>
          </h2>
          <p className="text-[#EADBB6] text-sm sm:text-base mt-2 max-w-2xl">
            An evolving technical workbench: interactive proofs-of-concept, architectural experiments, and machine learning sandboxes.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
          <Beaker className="w-3.5 h-3.5 text-amber-400" />
          <span>RESEARCH &amp; EXPERIMENTATION</span>
        </div>
      </div>

      {/* Main Lab Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector menu in Obsidian & Gold (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {LAB_EXPERIMENTS.map((exp) => {
            const isSelected = selectedExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                data-cursor="button"
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-400/60 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'bg-[#0A0907] border-amber-500/15 hover:bg-black/60 hover:border-amber-500/35'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                  <span className="text-amber-400 font-bold">{exp.category}</span>
                  <span className="text-zinc-400">{exp.status}</span>
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {exp.title}
                </div>
                <div className="text-xs text-[#EADBB6]/80 line-clamp-2">
                  {exp.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Sandbox Screen in Black & Gold (8 cols) */}
        <div className="lg:col-span-8 bg-[#0A0907] border border-amber-500/25 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative min-h-[420px] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-500/15">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-500/30 font-bold">
                ACTIVE LAB ENVIRONMENT
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {selectedExp.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Interactive Mode
            </span>
          </div>

          {/* Dynamic Interactive Sandboxes */}
          <div className="flex-1">
            {/* 1. Self-Attention Matrix */}
            {selectedExp.interactiveType === 'attention' && (
              <div className="space-y-6">
                <p className="text-xs text-[#EADBB6]">
                  Click any query token below to visualize simulated softmax attention weights across all key tokens:
                </p>

                {/* Tokens selector */}
                <div className="flex flex-wrap gap-2">
                  {sampleSentence.map((token, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTokenIdx(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                        selectedTokenIdx === idx
                          ? 'bg-gradient-to-r from-amber-300 to-yellow-400 text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                          : 'bg-black/50 text-[#FAF5E8] hover:text-amber-200 border border-amber-500/20'
                      }`}
                    >
                      {token}
                    </button>
                  ))}
                </div>

                {/* Attention Heatmap Bar */}
                <div className="p-5 rounded-2xl bg-black/60 border border-amber-500/20 space-y-3">
                  <div className="text-xs font-mono text-amber-400 flex items-center justify-between">
                    <span>Query: "{sampleSentence[selectedTokenIdx]}"</span>
                    <span>Softmax Attention Distribution</span>
                  </div>

                  <div className="space-y-2">
                    {sampleSentence.map((token, idx) => {
                      const diff = Math.abs(selectedTokenIdx - idx);
                      const weight = Math.max(0.12, 1 - diff * 0.22);
                      const percent = Math.round(weight * 100);

                      return (
                        <div key={idx} className="flex items-center gap-3 text-xs font-mono">
                          <span className="w-16 text-[#FAF5E8] truncate">{token}</span>
                          <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percent}%` }}
                              transition={{ duration: 0.3 }}
                              className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"
                            />
                          </div>
                          <span className="w-10 text-right text-amber-300 font-bold">{percent}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 2. Convolutional Kernel Sandbox */}
            {selectedExp.interactiveType === 'convolution' && (
              <div className="space-y-6">
                <p className="text-xs text-[#EADBB6]">
                  Select a spatial convolution kernel matrix to inspect how feature extractors transform raw pixel tensors:
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'edge', label: 'Sobel / Laplacian Edge Filter' },
                    { id: 'sharpen', label: 'High-Pass Sharpen Filter' },
                    { id: 'gaussian', label: 'Gaussian Smoothing Filter' },
                  ].map((k) => (
                    <button
                      key={k.id}
                      onClick={() => setActiveKernel(k.id as any)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                        activeKernel === k.id
                          ? 'bg-gradient-to-r from-amber-300 to-yellow-400 text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                          : 'bg-black/50 text-[#FAF5E8] hover:text-amber-200 border border-amber-500/20'
                      }`}
                    >
                      {k.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Kernel Matrix */}
                  <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/20 text-center">
                    <span className="text-[11px] font-mono text-amber-400 block mb-3 font-bold">
                      3×3 Spatial Weight Matrix
                    </span>
                    <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto font-mono text-xs">
                      {kernels[activeKernel].flatMap((row, r) =>
                        row.map((val, c) => (
                          <div
                            key={`${r}-${c}`}
                            className="p-2.5 rounded-lg bg-black/40 border border-amber-500/25 text-amber-300 font-bold"
                          >
                            {typeof val === 'number' && val % 1 !== 0 ? val.toFixed(2) : val}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/15 flex flex-col justify-center">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold">
                      Tensor Transformation
                    </span>
                    <p className="text-xs text-[#EADBB6] leading-relaxed">
                      {activeKernel === 'edge' &&
                        'Calculates gradient magnitude across spatial boundaries. Sharp intensity transitions produce high activation spikes, isolating contours and edges.'}
                      {activeKernel === 'sharpen' &&
                        'Amplifies center weight while subtracting neighbor averages, accentuating subtle textural high-frequency variations.'}
                      {activeKernel === 'gaussian' &&
                        'Normalizes surrounding neighborhood with weighted average, damping sensor high-frequency noise prior to landmark detection.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Latent Vector Embeddings */}
            {selectedExp.interactiveType === 'embeddings' && (
              <div className="space-y-6">
                <p className="text-xs text-[#EADBB6]">
                  Select concept pairs to compute Cosine Similarity:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {conceptPairs.map((pair, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePairIdx(idx)}
                      className={`p-3 rounded-xl text-left text-xs font-mono transition-all border ${
                        activePairIdx === idx
                          ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-sm'
                          : 'bg-black/40 border-amber-500/15 text-zinc-400 hover:text-amber-200'
                      }`}
                    >
                      <div className="font-bold text-white">
                        {pair.c1} <span className="text-amber-400">↔</span> {pair.c2}
                      </div>
                      <div className="text-[10px] text-[#EADBB6]/80 mt-0.5">
                        Sim: {(pair.similarity * 100).toFixed(0)}%
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-amber-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">
                      Cosine Distance Metric: {conceptPairs[activePairIdx].similarity}
                    </span>
                    <span className="text-amber-400">768-Dim Latent Embedding</span>
                  </div>

                  <div className="h-4 rounded-full bg-white/[0.04] overflow-hidden p-0.5">
                    <motion.div
                      key={activePairIdx}
                      initial={{ width: 0 }}
                      animate={{ width: `${conceptPairs[activePairIdx].similarity * 100}%` }}
                      transition={{ duration: 0.4 }}
                      className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 rounded-full"
                    />
                  </div>

                  <p className="text-xs text-[#EADBB6] font-mono">
                    {conceptPairs[activePairIdx].desc}
                  </p>
                </div>
              </div>
            )}

            {/* 4. Subword Tokenizer */}
            {selectedExp.interactiveType === 'tokenizer' && (
              <div className="space-y-6">
                <p className="text-xs text-[#EADBB6]">
                  Inspect how modern byte-pair subword tokenizers decompose arbitrary string payloads into discrete token IDs:
                </p>

                <div>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-amber-500/25 text-xs font-mono text-amber-200 focus:outline-none focus:border-amber-400"
                    placeholder="Type text to tokenize..."
                  />
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20 space-y-3">
                  <span className="text-xs font-mono text-amber-300 block font-bold">
                    Subword Token Chunks ({customText.split(/(?=[A-Z])|\s+/).filter(Boolean).length} tokens):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {customText
                      .split(/(?=[A-Z])|\s+/)
                      .filter(Boolean)
                      .map((chunk, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono border bg-amber-950/40 text-amber-200 border-amber-500/35 flex items-center gap-1.5"
                        >
                          <span>{chunk}</span>
                          <span className="text-[10px] text-amber-400 font-bold">#{1024 + idx * 37}</span>
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Engineering Sandbox Prototype</span>
            <span className="text-amber-400 font-bold">Built by Tafsil Ahmed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
