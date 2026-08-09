'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';

export function Modalities() {
  const { eyebrow, heading, sub, items } = T.modalities;

  return (
    <section id="modalities" className="py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} heading={heading} sub={sub} />

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((m, i) => (
            <motion.li
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:border-teal-400/50 hover:-translate-y-1 transition-all"
            >
              {/* Fixed aspect box — the source photos range from 0.94 to 1.5,
                  so object-cover is what keeps the grid even. */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={m.image}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="p-5 text-center">
                <div className="font-display text-lg text-navy-900 font-semibold">{m.label}</div>
                {/* Omitted entirely when blank, so the card keeps its padding
                    balance instead of reserving an empty line. */}
                {m.note && <div className="mt-1 text-xs text-slate-500">{m.note}</div>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
