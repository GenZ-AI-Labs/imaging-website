'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { SectionHeading } from './SectionHeading';
import { TeleIcon } from './icons';

export function Subspecialties() {
  const { eyebrow, heading, sub, cards } = T.subspecialties;

  return (
    <section id="subspecialties" className="py-28">
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
              className="group glass rounded-2xl overflow-hidden hover:border-teal-400/50 hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent"
                  aria-hidden="true"
                />
                {/* Subspecialty mark, floated on the image corner */}
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 border border-white/60 flex items-center justify-center shadow-sm">
                  <TeleIcon name={c.icon} size={17} className="text-teal-700" />
                </div>
              </div>

              <div className="p-5 flex-1">
                <h3 className="font-display text-base text-navy-900 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
