import type { Metadata } from 'next';
import { StubPage } from '@/components/teleradiology/StubPage';
import { TELE_STUBS } from '@/content/teleradiology';

const S = TELE_STUBS.services;

export const metadata: Metadata = {
  title: `Teleradiology ${S.title} — ImagingInsight AI`,
  description: S.sub,
  alternates: { canonical: 'https://www.imaginginsightai.com/teleradiology/services' },
};

export default function TeleradiologyServices() {
  return <StubPage heading={S.heading} sub={S.sub} />;
}
