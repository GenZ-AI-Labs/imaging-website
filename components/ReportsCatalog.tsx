'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { REPORTS, CATEGORIES, type ReportCategory } from '@/lib/reports';

type Filter = 'All' | ReportCategory;

export function ReportsCatalog() {
  const [filter, setFilter] = useState<Filter>('All');
  const filtered = filter === 'All' ? REPORTS : REPORTS.filter((r) => r.category === filter);

  return (
    <section id="reports" className="py-28 relative">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">17 Reports · 1 Platform</div>
            <h2 className="h-display text-4xl md:text-5xl text-navy-900">
              Every report your <span className="text-gradient">genome can tell.</span>
            </h2>
            <p className="mt-5 text-slate-600">
              From hereditary cancer risk to longevity pathways and pharmacogenomics — Radiogenomes AI
              generates the most comprehensive set of clinical-grade genomic reports in India.
            </p>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(['All', ...CATEGORIES] as Filter[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all border ${
                filter === c
                  ? 'bg-teal-500 text-white border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.4)]'
                  : 'border-slate-200 text-slate-600 hover:text-teal-700 hover:border-teal-500/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.04 }}
                className={`group relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br ${r.accent} hover:border-teal-400/60 transition-all hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-teal-500/15 group-hover:border-teal-400/40 transition-colors">
                      <FileText size={18} className="text-teal-700" />
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-teal-700/80 mb-2">
                    {r.category}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {r.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {r.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center text-sm text-slate-500">
          Want to see what's inside? <a href="/contact" className="text-teal-700 hover:underline">Request a demo</a> to view sample reports.
        </div>
      </div>
    </section>
  );
}
