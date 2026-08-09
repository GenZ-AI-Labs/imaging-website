'use client';
import { motion } from 'framer-motion';
import { Droplet, Cpu, Stamp, FileCheck2 } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    icon: Droplet,
    title: 'Blood Sample Collection',
    desc: 'A simple blood sample is collected from the patient at our partner labs and securely processed for analysis.',
    chip: 'Simple Blood Draw',
  },
  {
    n: '02',
    icon: Cpu,
    title: 'AI Analysis',
    desc: 'Our AI engine processes the genomic data and generates clinical-grade insights across multiple health panels.',
    chip: 'AI-Powered Pipeline',
  },
  {
    n: '03',
    icon: Stamp,
    title: 'Doctor Review & Stamp',
    desc: 'Our 3 senior doctors independently review every report, verify the findings, and add their official stamp.',
    chip: '3 Medical Experts',
  },
  {
    n: '04',
    icon: FileCheck2,
    title: 'Report Delivered',
    desc: 'The verified, stamped, physician-ready PDF report is delivered directly to the client or referring clinician.',
    chip: '17 Report Types',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28 relative">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-5 mx-auto">How It Works</div>
          <h2 className="h-display text-4xl md:text-5xl text-navy-900">
            From blood sample to <span className="text-gradient">clinical insight</span>.
          </h2>
          <p className="mt-5 text-slate-600">
            Every Radiogenomes AI report follows a rigorous 4-step pipeline — AI-generated, doctor-verified, ready for clinical use.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-slate-50 border border-teal-500/40 flex items-center justify-center relative">
                      <Icon size={32} className="text-teal-700" />
                      <div className="absolute inset-0 rounded-full border border-teal-400/20 animate-ping" />
                    </div>
                    <div className="font-mono text-xs text-teal-700 mt-4">STEP {s.n}</div>
                    <h3 className="font-display text-xl text-navy-900 font-semibold mt-2">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm max-w-xs">{s.desc}</p>
                    <span className="mt-4 text-[10px] font-mono px-2 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-700">
                      {s.chip}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
