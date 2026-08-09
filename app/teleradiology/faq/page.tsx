import type { Metadata } from 'next';
import { StubPage } from '@/components/teleradiology/StubPage';
import { TELE_STUBS } from '@/content/teleradiology';

const S = TELE_STUBS.faq;

export const metadata: Metadata = {
  title: `Teleradiology ${S.title} — ImagingInsight AI`,
  description: S.sub,
  alternates: { canonical: 'https://www.imaginginsightai.com/teleradiology/faq' },
};

export default function TeleradiologyFaq() {
  return <StubPage heading={S.heading} sub={S.sub} />;
}
