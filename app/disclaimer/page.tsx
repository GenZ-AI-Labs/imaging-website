import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Disclaimer — ${SITE_CONFIG.productName}`,
};

export default function Disclaimer() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-20 container-x max-w-4xl">
        <h1 className="h-display text-4xl md:text-5xl text-navy-900 mb-10">Disclaimer</h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-600 text-sm leading-relaxed">
          <p className="text-slate-600 text-xs font-mono">Last updated: April 2026</p>

          <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-6 my-8">
            <h2 className="text-lg text-teal-700 font-display font-semibold mb-3">
              CLINICAL-GRADE GENOMIC INTELLIGENCE
            </h2>
            <p className="text-slate-600">
              {SITE_CONFIG.productName}™ is a production-ready genomic intelligence platform delivering
              <strong className="text-navy-900"> 17 clinical-grade reports</strong>, designed for use by qualified
              clinicians, genetic counselors, and research professionals. Every report is reviewed and verified
              by our senior medical team before delivery.
            </p>
          </div>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">1. Professional Use</h2>
          <p>
            {SITE_CONFIG.productName} is intended for use by qualified medical professionals, genetic counselors,
            clinical laboratories, and research institutions. All reports should be interpreted in the context
            of a patient's complete clinical picture by a trained professional.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">2. Doctor-Verified Quality</h2>
          <p>
            Every {SITE_CONFIG.productName} report is independently reviewed and stamped by our senior medical team
            before delivery. We follow internationally recognized clinical and ethical standards to ensure the
            highest quality of insights.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">3. Continual Improvement</h2>
          <p>
            Genomic science is evolving rapidly. While {SITE_CONFIG.productName} uses the latest available
            evidence and curated knowledge sources, our interpretations may be updated as new research emerges.
            We continuously refresh our knowledge base to reflect the current state of clinical genomics.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">4. Risk Scores</h2>
          <p>
            Risk gauges and scores presented in reports are evidence-based statistical estimates derived
            from known genetic associations. They represent genetic predisposition and should be considered
            alongside environmental, lifestyle, and family history factors when making clinical decisions.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">5. Pharmacogenomics</h2>
          <p>
            Drug-response predictions are based on validated pharmacogenomic associations and peer-reviewed
            literature. These insights are designed to support — not replace — clinical pharmacology expertise
            and established prescribing guidelines.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">6. Data Privacy</h2>
          <p>
            All genomic data processed by {SITE_CONFIG.productName} is encrypted in transit and at rest.
            We support sample-anonymous workflows and on-premise deployments to meet strict data residency
            and privacy requirements.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">7. Contact</h2>
          <p>
            For questions about this disclaimer or our platform, contact us at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">{SITE_CONFIG.email}</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
