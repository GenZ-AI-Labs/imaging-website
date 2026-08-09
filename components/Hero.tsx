'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { DigitalTwin } from './DigitalTwin';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden noise">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Background tickers (rsIDs scrolling) */}
      <div className="absolute inset-x-0 top-24 overflow-hidden opacity-[0.06] pointer-events-none">
        <div className="font-mono text-[10px] whitespace-nowrap animate-marquee">
          rs121908813 · rs1042522 · rs8034191 · rs2853690 · rs5128 · rs4244285 · rs1801516 · rs440446 · rs1799983 · rs9374037 · rs1770344 · rs5746094 · rs2918520 · rs6657367 · rs2070669 · rs7896005 · rs28365927 · rs121908813 · rs1042522 · rs8034191 · rs2853690 · rs5128 · rs4244285 · rs1801516 · rs440446
        </div>
      </div>

      <div className="container-x relative grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
        {/* LEFT */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              India's First Genomic AI Platform
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy-900"
          >
            Decode the{' '}
            <span className="text-gradient">Human Genome</span>{' '}
            with AI Precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Radiogenomes AI™ delivers <span className="text-teal-700 font-semibold">17 clinical-grade reports</span> —
            personalized genomic intelligence built for Indian patients, designed for clinicians, and reviewed by senior doctors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="/contact" className="btn-primary">
              Request Demo <ArrowRight size={18} />
            </a>
            <a href="#reports" className="btn-ghost">
              <Play size={16} /> View Reports
            </a>
          </motion.div>

        </div>

        {/* RIGHT - DIGITAL TWIN IMAGE
            The twin artwork is lit for a black ground and blends its own edges
            to #020617, so it lives in a dark viewport panel rather than sitting
            directly on the white page. Same treatment as the teleradiology
            scan panel — the imagery keeps its glow, the page stays light. */}
        <div className="relative h-[500px] lg:h-[680px] z-0 overflow-hidden scan-panel shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)]">
          <DigitalTwin />

          {/* Digital Twin label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-2 left-1/2 -translate-x-1/2 hidden md:block z-30"
          >
            {/* Sits on the dark panel, so it keeps the bright teal. */}
            <div className="text-[9px] uppercase tracking-[0.25em] text-teal-300/70 font-mono text-center">
              RadioGenomes · Digital Twin
            </div>
          </motion.div>

          {/* Floating stat chips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-14 right-0 glass rounded-2xl p-4 hidden md:block z-30"
          >
            <div className="text-[10px] uppercase tracking-widest text-teal-700">
              Doctor-Verified
            </div>
            <div className="font-mono text-2xl font-bold text-navy-900 mt-1">
              100%
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-16 left-0 glass rounded-2xl p-4 hidden md:block z-30"
          >
            <div className="text-[10px] uppercase tracking-widest text-teal-700">
              Risk Score
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-2xl font-bold text-navy-900">86</span>
              <span className="text-xs text-emerald-600">FAVORABLE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute bottom-16 right-0 glass rounded-2xl p-3 hidden lg:block z-30"
          >
            <div className="text-[10px] uppercase tracking-widest text-teal-700">
              Genomic Reports
            </div>
            <div className="font-mono text-2xl font-bold text-navy-900 mt-1">
              17
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
