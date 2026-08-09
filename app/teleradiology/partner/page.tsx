import type { Metadata } from 'next';
import { StubPage } from '@/components/teleradiology/StubPage';
import { TELE_STUBS } from '@/content/teleradiology';

const S = TELE_STUBS.partner;

export const metadata: Metadata = {
  title: `Partner With Us — Teleradiology | ImagingInsight AI`,
  description: S.sub,
  alternates: { canonical: 'https://www.imaginginsightai.com/teleradiology/partner' },
};

export default function TeleradiologyPartner() {
  return <StubPage heading={S.heading} sub={S.sub} />;
}
