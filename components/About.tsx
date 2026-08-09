'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-5">The Company</div>
            <h2 className="h-display text-4xl md:text-5xl text-navy-900 leading-tight">
              By <span className="text-gradient">ImagingInsight AI</span>.<br />
              Engineered in India.
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              ImagingInsight AI Pvt Ltd is a deep-tech health AI company building the next generation of
              intelligent diagnostic and genomic platforms. <strong className="text-navy-900">Radiogenomes AI™</strong>{' '}
              is our flagship — the first Indian platform delivering AI-powered genomic intelligence at clinical scale,
              designed to support hospitals, clinicians, and research partners.
            </p>
            <p className="mt-4 text-slate-600">
              We believe Indian genomes deserve Indian-built tools — and that the world's research
              community will benefit when those tools are world-class.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-2xl text-teal-700 font-bold">17</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Reports</div>
              </div>
              <div>
                <div className="font-mono text-2xl text-teal-700 font-bold">3</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Senior Doctors</div>
              </div>
              <div>
                <div className="font-mono text-2xl text-teal-700 font-bold">1st</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">In India</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl p-10 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-rainbow-gradient opacity-10" />
              <div className="absolute inset-0 grid-bg opacity-30" />

              {/* Product brand — Radiogenomes (primary) */}
              <div className="relative w-full max-w-[260px] drop-shadow-[0_0_30px_rgba(20,184,166,0.35)]">
                <Image
                  src="/brand/radiogenomes-full.png"
                  alt="RadioGenomes AI"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="relative w-full mt-6 mb-4">
                <div className="gradient-divider" />
              </div>

              {/* Parent company — ImagingInsight */}
              <div className="relative flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/brand/logo.png"
                    alt="ImagingInsight AI"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest text-slate-600">
                    Parent Company
                  </div>
                  <div className="font-display font-semibold text-navy-900 text-sm">
                    ImagingInsight AI Pvt Ltd
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
