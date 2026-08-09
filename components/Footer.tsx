'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 pt-20 pb-10 relative">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_.85fr_1fr_.85fr_.8fr_1.3fr] gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 drop-shadow-[0_0_14px_rgba(20,184,166,0.4)]">
                <Image
                  src="/brand/radiogenomes-icon.png"
                  alt="RadioGenomes AI"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-navy-900 tracking-tight">
                  RadioGenomes <span className="text-teal-700">AI</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500 mt-0.5">
                  Powered by ImagingInsight AI
                </div>
              </div>
            </Link>
            <p className="mt-5 text-sm text-slate-600 max-w-sm leading-relaxed">
              India's first AI-powered genomic intelligence platform — delivering 17 clinical-grade reports,
              reviewed and verified by senior doctors. Now also offering{' '}
              <Link href="/teleradiology" className="text-teal-700 hover:underline">
                teleradiology reporting
              </Link>{' '}
              for hospitals and diagnostic centres.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Genomics</div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#reports" className="hover:text-teal-700">Reports</a></li>
              <li><a href="/#how" className="hover:text-teal-700">How it Works</a></li>
              <li><a href="/contact" className="hover:text-teal-700">Request Demo</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Teleradiology</div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/teleradiology" className="hover:text-teal-700">Overview</Link></li>
              <li><Link href="/teleradiology/services" className="hover:text-teal-700">Services</Link></li>
              <li><Link href="/teleradiology/quality" className="hover:text-teal-700">Quality</Link></li>
              <li><Link href="/teleradiology/partner" className="hover:text-teal-700">Partner With Us</Link></li>
              <li><Link href="/teleradiology/faq" className="hover:text-teal-700">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Company</div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/#about" className="hover:text-teal-700">About</Link></li>
              <li><Link href="/team" className="hover:text-teal-700">Team</Link></li>
              <li><Link href="/contact" className="hover:text-teal-700">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Legal</div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/privacy-policy" className="hover:text-teal-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-700">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-teal-700">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Connect</div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-2 hover:text-teal-700 transition-colors">
                  <Mail size={14} className="text-teal-700 mt-0.5 shrink-0" />
                  <span className="break-all">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-start gap-2 hover:text-teal-700 transition-colors">
                  <Phone size={14} className="text-teal-700 mt-0.5 shrink-0" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-teal-700 transition-colors text-slate-600"
                >
                  <MapPin size={14} className="text-teal-700 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{SITE_CONFIG.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gradient-divider my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} ImagingInsight AI Pvt Ltd. All rights reserved.</div>
          <div className="font-mono">Made in India 🇮🇳 · Built for the world</div>
        </div>
      </div>
    </footer>
  );
}
