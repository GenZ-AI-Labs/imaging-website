import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_CONFIG.productName}`,
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-20 container-x max-w-4xl">
        <h1 className="h-display text-4xl md:text-5xl text-navy-900 mb-10">Privacy Policy</h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-600 text-sm leading-relaxed">
          <p className="text-slate-600 text-xs font-mono">Last updated: April 2026</p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">1. Introduction</h2>
          <p>
            {SITE_CONFIG.companyName} ("we", "our", "us") operates the {SITE_CONFIG.productName}™ platform.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website or use our services.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">2. Information We Collect</h2>
          <p><strong className="text-navy-900">Personal Information:</strong> Name, email address, organization, and role when you submit a contact or demo request form.</p>
          <p><strong className="text-navy-900">Genomic Data:</strong> Sample data submitted by you or your healthcare provider for analysis. This data is processed exclusively for generating your genomic reports and is never shared with third parties.</p>
          <p><strong className="text-navy-900">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website, collected via standard analytics.</p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To generate genomic analysis reports as requested</li>
            <li>To respond to demo requests and inquiries</li>
            <li>To improve our platform and user experience</li>
            <li>To send relevant updates (only with your consent)</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">4. Data Security</h2>
          <p>
            All genomic data is encrypted in transit (TLS 1.3) and at rest (AES-256). We support sample-anonymous
            workflows and on-premise deployments for enterprise customers with strict data residency requirements.
            Access to genomic data is restricted to authorized personnel only.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">5. Data Retention</h2>
          <p>
            Genomic data is retained only for the duration required to generate your reports. You may request
            deletion of your data at any time by contacting us at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">{SITE_CONFIG.email}</a>.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">6. Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or transfer your personal or genomic information to third parties. We may share
            anonymized, aggregated data for research purposes only with explicit consent.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">{SITE_CONFIG.email}</a>.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl text-navy-900 font-display font-semibold mt-8">9. Contact</h2>
          <p>
            For questions about this policy, contact us at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">{SITE_CONFIG.email}</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
