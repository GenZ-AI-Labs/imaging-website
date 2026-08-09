import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Divider } from '@/components/Divider';
import { SITE_CONFIG } from '@/lib/config';
import { TELERADIOLOGY as T, TELE_SECTIONS } from '@/content/teleradiology';

import { TeleHero } from '@/components/teleradiology/Hero';
import { ValueProps } from '@/components/teleradiology/ValueProps';
import { CoverageModels } from '@/components/teleradiology/CoverageModels';
import { Modalities } from '@/components/teleradiology/Modalities';
import { Subspecialties } from '@/components/teleradiology/Subspecialties';
import { WorkflowPipeline } from '@/components/teleradiology/WorkflowPipeline';
import { QualityAssurance } from '@/components/teleradiology/QualityAssurance';
import { TechnologyPacs } from '@/components/teleradiology/TechnologyPacs';
import { WhoItsFor } from '@/components/teleradiology/WhoItsFor';
import { RadiologistPanel } from '@/components/teleradiology/RadiologistPanel';
import { CrossSellGenomics } from '@/components/teleradiology/CrossSellGenomics';
import { PartnerForm } from '@/components/teleradiology/PartnerForm';
import { Faq } from '@/components/teleradiology/Faq';
import { ComplianceNote } from '@/components/teleradiology/ComplianceNote';

export const metadata: Metadata = {
  title: T.meta.title,
  description: T.meta.description,
  keywords: [...T.meta.keywords],
  alternates: { canonical: T.meta.canonical },
  openGraph: {
    title: T.meta.title,
    description: T.meta.description,
    type: 'website',
    siteName: SITE_CONFIG.companyName,
    locale: 'en_IN',
    url: T.meta.canonical,
    images: [{ url: T.meta.ogImage, width: 1200, height: 1200, alt: 'ImagingInsight AI teleradiology reporting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: T.meta.title,
    description: T.meta.description,
    images: [T.meta.ogImage],
  },
};

/**
 * JSON-LD. Described as a MedicalBusiness offering a professional reporting
 * service — deliberately NOT a MedicalDevice, and no performance claims.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: `${SITE_CONFIG.companyName} — Teleradiology`,
  url: T.meta.canonical,
  description: T.meta.description,
  medicalSpecialty: 'Radiography',
  parentOrganization: {
    '@type': 'Organization',
    name: SITE_CONFIG.companyName,
    url: 'https://www.imaginginsightai.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address,
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411034',
    addressCountry: 'IN',
  },
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  areaServed: 'IN',
  availableService: T.coverageModels.cards.map((c) => ({
    '@type': 'MedicalProcedure',
    name: c.title,
    description: c.desc,
  })),
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: T.faq.items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Teleradiology() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navigation />

      <TeleHero />
      <Divider />
      <ValueProps />
      <Divider />
      <CoverageModels />
      <Divider />
      <Modalities />
      <Divider />
      <Subspecialties />
      <Divider />
      <WorkflowPipeline />
      <Divider />
      <QualityAssurance />
      <Divider />
      <TechnologyPacs />
      <Divider />
      <WhoItsFor />
      <Divider />
      {/* Panel is hidden while the reporting roster is being finalised.
          Re-enable via TELE_SECTIONS.radiologistPanel in content/teleradiology.ts.
          The trailing Divider is inside the guard so the page does not render
          two rules back to back while the section is off. */}
      {TELE_SECTIONS.radiologistPanel && (
        <>
          <RadiologistPanel />
          <Divider />
        </>
      )}
      <CrossSellGenomics />
      <PartnerForm />
      <Divider />
      <Faq />

      {/* Persistent compliance disclaimer — sits above the footer on every view. */}
      <div className="container-x pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <ComplianceNote>{T.disclaimer}</ComplianceNote>
          <ComplianceNote>{T.serviceNote}</ComplianceNote>
        </div>
      </div>

      <Footer />
    </main>
  );
}
