'use client';
import { motion } from 'framer-motion';
import { Sparkles, Globe2, Database } from 'lucide-react';

const POINTS = [
  {
    icon: Sparkles,
    title: "India's First Genomic AI",
    desc: 'The first Indian platform delivering AI-powered genomic intelligence at clinical scale — built specifically for the needs of Indian healthcare.',
  },
  {
    icon: Database,
    title: 'Built for Indian Patients',
    desc: 'Designed with Indian populations in mind for higher accuracy, deeper insights, and reports that truly reflect the genetic diversity of India.',
  },
  {
    icon: Globe2,
    title: 'Made in India · For the World',
    desc: 'Engineered in India by ImagingInsight AI Pvt Ltd — bringing world-class genomic reports to clinicians, hospitals, and research partners worldwide.',
  },
];

export function IndiaFirst() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-5">🇮🇳 Category Creator</div>
          <h2 className="h-display text-4xl md:text-6xl text-navy-900 leading-tight">
            India's First.{' '}
            <span className="text-gradient">Built for Indian Genomes.</span>
          </h2>
          <p className="mt-6 text-slate-600 text-lg">
            Generic genomics tools were trained on Western populations. We weren't. Radiogenomes AI is the
            first Indian platform that decodes Indian genomes with AI accuracy — and the world's research
            community can use it too.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-3xl p-8 hover:border-teal-400/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <Icon size={22} className="text-teal-700" />
                </div>
                <h3 className="font-display text-xl text-navy-900 font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
