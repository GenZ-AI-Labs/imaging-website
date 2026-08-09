'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';
import { ComplianceNote } from './ComplianceNote';
import { TeleIcon } from './icons';

/**
 * Deliberately mirrors components/HowItWorks.tsx (the genomics 4-step pipeline)
 * so both verticals read as one brand.
 */
export function WorkflowPipeline() {
  const { eyebrow, heading, sub, steps, aiNote, stepDetail: detail } = T.workflow;

  return (
    <section id="how" className="py-28 relative">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} heading={heading} sub={sub} />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-50 border border-teal-500/40 flex items-center justify-center relative">
                    <TeleIcon name={s.icon} size={32} />
                    <div className="absolute inset-0 rounded-full border border-teal-400/20 animate-ping" />
                  </div>
                  <div className="font-mono text-xs text-teal-700 mt-4">STEP {s.n}</div>
                  <h3 className="font-display text-xl text-navy-900 font-semibold mt-2">{s.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm max-w-xs">{s.desc}</p>
                  <span className="mt-4 text-[10px] font-mono px-2 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-700">
                    {s.chip}
                  </span>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Where step 03 happens — the diagnostic reporting workstation.
            The photograph is a white-background cut-out, so it sits directly on
            the card with no scrim or frame: the workstation reads as floating
            on the page rather than pasted into a box. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center glass rounded-3xl p-8 md:p-12"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <Image
              src={detail.image}
              alt={detail.alt}
              width={750}
              height={392}
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="w-full h-auto"
            />
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-teal-700 mb-3">
              {detail.label}
            </div>
            <h3 className="h-display text-2xl md:text-3xl text-navy-900">
              {detail.heading} <span className="text-gradient">{detail.headingAccent}</span>
              {detail.headingTail}
            </h3>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">{detail.body}</p>
            <ul className="mt-6 space-y-2.5">
              {detail.points.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-teal-500 mt-2 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Regulatory framing for the AI step — reviewed in isolation. */}
        <ComplianceNote variant="banded">{aiNote}</ComplianceNote>
      </div>
    </section>
  );
}
