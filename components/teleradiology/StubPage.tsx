import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { ComplianceNote } from './ComplianceNote';

/**
 * Shared shell for the reserved /teleradiology/* sub-routes. These exist so the
 * URLs and nav structure are settled; the detailed content is still to be
 * written. Each renders the same layout with its own copy.
 */
export function StubPage({ heading, sub }: { heading: string; sub: string }) {
  return (
    <main>
      <Navigation />

      <section className="pt-40 pb-24 min-h-[70vh] flex items-center">
        <div className="container-x text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-6 mx-auto">Coming Soon</div>

          <h1 className="h-display text-4xl md:text-5xl text-navy-900 leading-tight">{heading}</h1>
          <p className="mt-6 text-slate-600 leading-relaxed">{sub}</p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/teleradiology" className="btn-ghost">
              <ArrowLeft size={16} aria-hidden="true" /> Teleradiology overview
            </Link>
            <Link href="/teleradiology#contact" className="btn-primary">
              Request a Demo <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12">
            <ComplianceNote>{T.disclaimer}</ComplianceNote>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
