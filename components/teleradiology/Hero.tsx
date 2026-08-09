'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake } from 'lucide-react';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { ComplianceNote } from './ComplianceNote';

/**
 * Full-bleed photo banner with the copy overlaid — the reading-room image
 * carries the section, so the decorative scan artwork is not used here.
 * (AxialScanArt is still exported from ./illustrations if it is wanted back.)
 *
 * The scrim below is not decoration: the source photo has bright monitor
 * panels behind the headline area, and white text over them would fail
 * contrast. The gradient guarantees a dark ground under the text at every
 * breakpoint, while still letting the right side of the photo read.
 */
export function TeleHero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-14">
      <div className="container-wide">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[580px] lg:min-h-[680px] flex items-center shadow-[0_30px_70px_-30px_rgba(15,23,42,0.5)]">
          <Image
            src={T.hero.banner}
            alt={T.hero.bannerAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Contrast scrim — heaviest on the left where the copy sits. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30"
            aria-hidden="true"
          />

          {/* Copy */}
          <div className="relative px-7 sm:px-10 md:px-14 lg:px-20 py-16 lg:py-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="eyebrow-invert mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
                {T.hero.eyebrow}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="h-display text-4xl md:text-5xl lg:text-6xl leading-[1.07] text-white drop-shadow-[0_2px_12px_rgba(2,6,23,0.5)]"
            >
              {T.hero.headingLead}{' '}
              <span className="text-teal-300">{T.hero.headingAccent}</span>{' '}
              {T.hero.headingTail}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed"
            >
              {T.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a href={T.hero.ctaPrimary.href} className="btn-primary">
                {T.hero.ctaPrimary.label} <ArrowRight size={18} />
              </a>
              <a href={T.hero.ctaSecondary.href} className="btn-ghost-invert">
                <Handshake size={16} /> {T.hero.ctaSecondary.label}
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {T.hero.chips.map((c) => (
                <li key={c} className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="w-1 h-1 rounded-full bg-teal-300" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 max-w-2xl"
            >
              {/* Inverted small print — same compliance string, legible on the photo. */}
              <p data-compliance className="text-xs leading-relaxed text-slate-300/90">
                {T.serviceNote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
