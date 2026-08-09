import type { Metadata } from 'next';
import { StubPage } from '@/components/teleradiology/StubPage';
import { TELE_STUBS } from '@/content/teleradiology';

const S = TELE_STUBS.quality;

export const metadata: Metadata = {
  title: `Teleradiology ${S.title} — ImagingInsight AI`,
  description: S.sub,
  alternates: { canonical: 'https://www.imaginginsightai.com/teleradiology/quality' },
};

export default function TeleradiologyQuality() {
  return <StubPage heading={S.heading} sub={S.sub} />;
}
