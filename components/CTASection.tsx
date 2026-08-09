'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden border border-teal-500/30"
        >
          <div className="absolute inset-0 bg-rainbow-gradient opacity-20" />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative px-8 md:px-16 py-20 text-center">
            <div className="eyebrow mb-6 mx-auto">Limited Early Access</div>
            <h2 className="h-display text-4xl md:text-6xl text-navy-900 leading-tight max-w-3xl mx-auto">
              Be among the first to deploy{' '}
              <span className="text-gradient">India's genomic AI</span>.
            </h2>
            <p className="mt-6 text-slate-600 max-w-xl mx-auto">
              Request a demo or talk to our scientific team. We'll walk you through the platform, the
              reports, and how to integrate it with your workflow.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@imagininsight.ai" className="btn-primary">
                Request Demo <ArrowRight size={18} />
              </a>
              <a href="mailto:contact@imagininsight.ai" className="btn-ghost">
                <Mail size={16} /> Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
