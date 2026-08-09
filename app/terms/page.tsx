import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms of Use — ${SITE_CONFIG.productName}`,
};

export default function Terms() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-20 container-x max-w-4xl">
        <h1 className="h-display text-4xl md:text-5xl text-navy-900 mb-10">Terms of Use</h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-600 text-sm leading-relaxed">
          <p className="text-slate-600 text-xs font-mono">Last updated: April 2026</p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the {SITE_CONFIG.productName}™ platform operated by {SITE_CONFIG.companyName},
            you agree to be bound by these Terms of Use. If you do not agree, please discontinue use immediately.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">2. Clinical-Grade Use</h2>
          <p>
            {SITE_CONFIG.productName} reports are <strong className="text-navy-900">clinical-grade and doctor-verified</strong>,
            built for use by qualified medical professionals, genetic counselors, clinical laboratories, and
            research institutions. Reports should be interpreted in the context of a patient's complete clinical
            picture by trained professionals.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">3. Use of the Platform</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be 18 years or older to use the platform</li>
            <li>You are responsible for the accuracy of data you upload</li>
            <li>You agree not to use the platform for any unlawful purpose</li>
            <li>You will not attempt to reverse-engineer the platform's algorithms</li>
            <li>You will not share your access credentials with unauthorized parties</li>
          </ul>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">4. Intellectual Property</h2>
          <p>
            All content, branding, algorithms, report formats, and software on this platform are the intellectual
            property of {SITE_CONFIG.companyName}. You may not copy, modify, or distribute any part of the platform
            without prior written consent.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">5. Data Ownership</h2>
          <p>
            You retain ownership of the genomic data you upload. We do not claim ownership of your data.
            By uploading data, you grant us a limited license to process it solely for generating your reports.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">6. Limitation of Liability</h2>
          <p>
            {SITE_CONFIG.companyName} provides the platform "as is" without warranties of any kind.
            We shall not be liable for any direct, indirect, incidental, or consequential damages arising
            from your use of the platform or reliance on its reports.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the platform at our discretion,
            with or without notice, for conduct that we believe violates these Terms.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India.
            Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">9. Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">{SITE_CONFIG.email}</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
