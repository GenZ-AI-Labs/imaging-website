'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Dna, Scan } from 'lucide-react';
import { TELERADIOLOGY as T } from '@/content/teleradiology';

export function CrossSellGenomics() {
  const { eyebrow, heading, sub, cta } = T.crossSell;

  return (
    <section className="py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden border border-teal-500/30"
        >
          <div className="absolute inset-0 bg-rainbow-gradient opacity-20" />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative px-8 md:px-14 py-16 text-center">
            {/* Two-vertical mark: imaging + genomics */}
            <div className="flex items-center justify-center gap-4 mb-7" aria-hidden="true">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Scan size={20} className="text-teal-700" />
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-teal-400/60 to-violet-400/60" />
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                <Dna size={20} className="text-violet-600" />
              </div>
            </div>

            <div className="eyebrow mb-6">{eyebrow}</div>
            <h2 className="h-display text-3xl md:text-4xl text-navy-900 leading-tight max-w-2xl mx-auto">
              {heading}
            </h2>
            <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-relaxed">{sub}</p>

            <Link href={cta.href} className="btn-primary mt-9">
              {cta.label} <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
