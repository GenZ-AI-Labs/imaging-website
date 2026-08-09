'use client';
import { motion } from 'framer-motion';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';
import { TeleIcon } from './icons';

export function CoverageModels() {
  const { eyebrow, heading, sub, cards } = T.coverageModels;

  return (
    <section id="coverage" className="py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} heading={heading} sub={sub} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-2xl p-6 hover:border-teal-400/40 hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4">
                <TeleIcon name={c.icon} size={18} />
              </div>
              <h3 className="font-display text-base text-navy-900 font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
