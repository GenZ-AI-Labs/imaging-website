'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10 relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr] gap-10">
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
                <div className="font-display font-bold text-lg text-white tracking-tight">
                  RadioGenomes <span className="text-teal-400">AI</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500 mt-0.5">
                  Powered by ImagingInsight AI
                </div>
              </div>
            </Link>
            <p className="mt-5 text-sm text-slate-400 max-w-sm leading-relaxed">
              India's first AI-powered genomic intelligence platform — delivering 17 clinical-grade reports,
              reviewed and verified by senior doctors.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Platform</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="/#reports" className="hover:text-teal-300">Reports</a></li>
              <li><a href="/#how" className="hover:text-teal-300">How it Works</a></li>
              <li><a href="/contact" className="hover:text-teal-300">Request Demo</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Company</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/#about" className="hover:text-teal-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-teal-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Legal</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/privacy-policy" className="hover:text-teal-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-300">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-teal-300">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">Connect</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-2 hover:text-teal-300 transition-colors">
                  <Mail size={14} className="text-teal-400 mt-0.5 shrink-0" />
                  <span className="break-all">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-start gap-2 hover:text-teal-300 transition-colors">
                  <Phone size={14} className="text-teal-400 mt-0.5 shrink-0" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-teal-300 transition-colors text-slate-400"
                >
                  <MapPin size={14} className="text-teal-400 mt-0.5 shrink-0" />
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
