'use client';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';
import { ComplianceNote } from './ComplianceNote';
import { TeleIcon } from './icons';
import { PacsTopologyArt } from './illustrations';

export function TechnologyPacs() {
  const { eyebrow, heading, sub, cards, dataHandling } = T.technology;

  return (
    <section id="technology" className="py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} heading={heading} sub={sub} />

        {/* Topology: site → transfer → cloud PACS → radiologist → report back */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glass rounded-3xl p-6 md:p-10 overflow-x-auto"
        >
          <PacsTopologyArt className="w-full min-w-[620px]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-teal-400/40 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4">
                <TeleIcon name={c.icon} />
              </div>
              <h3 className="font-display text-lg text-navy-900 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── REGULATORY BLOCK — structurally separate for legal review ── */}
        <div className="mt-12 rounded-3xl border border-teal-500/25 bg-white/40 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-teal-700" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-navy-900 font-semibold">{dataHandling.heading}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-sm text-slate-600 leading-relaxed">{dataHandling.india}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{dataHandling.international}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <ComplianceNote>{dataHandling.footnote}</ComplianceNote>
          </div>
        </div>
      </div>
    </section>
  );
}
