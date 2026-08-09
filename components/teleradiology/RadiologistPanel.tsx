'use client';
import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';
import { ComplianceNote } from './ComplianceNote';

/**
 * Panel entries are intentionally placeholders. No radiologist name, credential
 * or photograph is invented here — replace with verified profiles before launch.
 */
export function RadiologistPanel() {
  const { eyebrow, heading, sub, members, credentialingNote } = T.radiologistPanel;

  return (
    <section id="panel" className="py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} heading={heading} sub={sub} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-teal-400/40 transition-all"
            >
              {/* Avatar placeholder — no fabricated photography */}
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-dashed border-teal-500/40 flex items-center justify-center mb-4">
                <UserRound size={24} className="text-teal-700/70" aria-hidden="true" />
              </div>

              <h3 className="font-display text-base text-navy-900 font-semibold break-words">{m.name}</h3>

              <dl className="mt-3 space-y-1.5 text-xs text-slate-600">
                <div>
                  <dt className="sr-only">Qualifications</dt>
                  <dd className="break-words">{m.qualifications}</dd>
                </div>
                <div>
                  <dt className="sr-only">Subspecialty</dt>
                  <dd className="text-teal-700/80 break-words">{m.subspecialty}</dd>
                </div>
                <div>
                  <dt className="sr-only">Years in practice</dt>
                  <dd className="break-words">{m.years}</dd>
                </div>
                <div>
                  <dt className="sr-only">Registration</dt>
                  <dd className="text-slate-500 break-words">{m.registration}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <ComplianceNote>{credentialingNote}</ComplianceNote>
        </div>
      </div>
    </section>
  );
}
