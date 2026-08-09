'use client';
import { motion } from 'framer-motion';
import { TELERADIOLOGY as T, TELE_SECTIONS } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';
import { ComplianceNote } from './ComplianceNote';
import { TeleIcon } from './icons';

export function QualityAssurance() {
  const { eyebrow, heading, sub, tiers, certifications } = T.qualityAssurance;

  return (
    <section id="quality" className="py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} heading={heading} sub={sub} />

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass rounded-2xl p-7 hover:border-teal-400/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <TeleIcon name={t.icon} size={18} />
                </div>
                <span className="font-mono text-xs text-teal-700 uppercase tracking-widest">{t.tier}</span>
              </div>
              <h3 className="font-display text-lg text-navy-900 font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications — hidden until the certificates are held and in date.
            Re-enable via TELE_SECTIONS.certifications in content/teleradiology.ts. */}
        {TELE_SECTIONS.certifications && (
          <div className="mt-12 max-w-3xl mx-auto glass rounded-2xl p-7">
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              {certifications.label}
            </div>
            <ul className="space-y-2.5">
              {certifications.items.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-teal-500 mt-2 shrink-0" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-slate-200">
              <ComplianceNote>{certifications.note}</ComplianceNote>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
