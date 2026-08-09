'use client';
import { motion } from 'framer-motion';
import { Stethoscope, FlaskConical, Heart, Pill } from 'lucide-react';

const PERSONAS = [
  {
    icon: Stethoscope,
    title: 'Genetic Counselors',
    desc: 'Deliver clear, actionable reports to patients across hereditary cancer, prenatal, and rare disease consults.',
  },
  {
    icon: FlaskConical,
    title: 'Research Labs',
    desc: 'Access reliable, reproducible genomic insights to accelerate research and population-scale studies.',
  },
  {
    icon: Heart,
    title: 'Longevity Clinics',
    desc: 'Personalize wellness and prevention plans using 11 longevity pathways and intervention mapping.',
  },
  {
    icon: Pill,
    title: 'Pharma & R&D',
    desc: 'Integrate genomic insights into clinical trials and personalised drug-response strategies.',
  },
];

export function Personas() {
  return (
    <section className="py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-5">Who It's For</div>
          <h2 className="h-display text-4xl md:text-5xl text-navy-900">
            Built for the <span className="text-gradient">people decoding life</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERSONAS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-teal-400/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-teal-700" />
                </div>
                <h3 className="font-display text-lg text-navy-900 font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
