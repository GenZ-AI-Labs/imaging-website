import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Radiogenomes AI™ — India's First AI-Powered Genomic Intelligence Platform",
  description:
    "India's first AI-powered genomic intelligence platform delivering 17 clinical-grade reports — built for Indian patients, reviewed by senior doctors. By ImagingInsight AI.",
  keywords: [
    'genomics India',
    'AI genomics',
    'genetic testing India',
    'Radiogenomes AI',
    'ImagingInsight AI',
    'genomic reports',
    'preventive healthcare India',
    'personalized medicine',
  ],
  openGraph: {
    title: "Radiogenomes AI™ — India's First Genomic AI Platform",
    description:
      'AI-powered genomic intelligence — 17 clinical-grade reports, doctor-verified, built for Indian patients.',
    type: 'website',
    siteName: 'Radiogenomes AI',
    locale: 'en_IN',
    images: [
      {
        url: '/brand/digital-twin.webp',
        width: 1200,
        height: 1200,
        alt: 'Radiogenomes AI Digital Twin — holographic human body with DNA helix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Radiogenomes AI™ — India's First Genomic AI Platform",
    description: 'AI-powered genomic intelligence — 17 clinical-grade reports, doctor-verified, built for Indian patients.',
    images: ['/brand/digital-twin.webp'],
  },
  metadataBase: new URL('https://www.imaginginsightai.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
