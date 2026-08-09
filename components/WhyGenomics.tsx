'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, Sparkles, Pill, Target, HeartPulse } from 'lucide-react';

const COMPARISONS = [
  {
    icon: ShieldAlert,
    old: { label: 'Reactive', text: '"Waits until it hurts" — detects disease when symptoms appear (stage 1 or 2)' },
    new: { label: 'Predictive', text: '"Stops before it starts" — identifies risk years or decades in advance' },
  },
  {
    icon: Target,
    old: { label: 'One Size Fits All', text: 'Everyone gets the same standard list of tests regardless of genetics' },
    new: { label: 'Hyper-Personalized', text: 'Tests suggested specifically based on your DNA risks and genetic profile' },
  },
  {
    icon: Pill,
    old: { label: 'Trial & Error', text: '"Try this pill, see if it works" — months of adjusting medications blindly' },
    new: { label: 'Precision Pharma', text: '"Your genes say this pill is toxic" — AI advises the right medication instantly' },
  },
  {
    icon: HeartPulse,
    old: { label: 'Manage Forever', text: 'You manage an illness for life with ongoing treatments and side effects' },
    new: { label: 'Prevent Entirely', text: 'You prevent the illness entirely through early genomic intelligence' },
  },
];

const QUESTIONS = [
  'Am I at genetic risk for cancer, cardiac disease, or neurodegeneration — before symptoms appear?',
  'Which medications could be harmful or ineffective for me based on my unique genetic profile?',
  'What hereditary conditions could I unknowingly pass to my children?',
];

export function WhyGenomics() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow mb-5">Why Genomics?</div>
          <h2 className="h-display text-4xl md:text-6xl text-navy-900 leading-tight">
            Why wait for{' '}
            <span className="text-gradient">symptoms?</span>
          </h2>
          <p className="mt-6 text-slate-600 text-lg">
            Traditional healthcare is reactive. Radiogenomes AI makes it predictive.
            One test — a lifetime of insights.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {COMPARISONS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.old.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-teal-400/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                    <Icon size={18} className="text-teal-700" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">vs</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Old way */}
                  <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-red-600 font-semibold mb-2">
                      {c.old.label}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.old.text}</p>
                  </div>

                  {/* New way */}
                  <div className="rounded-2xl bg-teal-500/5 border border-teal-500/20 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-teal-700 font-semibold mb-2">
                      {c.new.label}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.new.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Critical Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-teal-500/30"
        >
          <div className="absolute inset-0 bg-rainbow-gradient opacity-10" />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
          <div className="relative px-8 md:px-16 py-14 text-center">
            <div className="eyebrow mb-6 mx-auto">
              <Sparkles size={14} aria-hidden="true" />
              One Test, A Lifetime of Insights
            </div>
            <h3 className="h-display text-2xl md:text-4xl text-navy-900 max-w-3xl mx-auto leading-tight">
              3 Critical Questions Your Standard Blood Test{' '}
              <span className="text-gradient">Can't Answer</span>
            </h3>
            <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {QUESTIONS.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass rounded-2xl p-5 text-left"
                >
                  <div className="font-mono text-teal-700 text-xs mb-2">Q{i + 1}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{q}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
