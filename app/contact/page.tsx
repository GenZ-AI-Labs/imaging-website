import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { SITE_CONFIG } from '@/lib/config';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_CONFIG.productName}`,
  description: 'Get in touch with ImagingInsight AI — request a demo, ask questions, or talk to our scientific team.',
};

export default function Contact() {
  return (
    <main>
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container-x text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-5 mx-auto">Get in Touch</div>
          <h1 className="h-display text-4xl md:text-6xl text-navy-900 leading-tight">
            Talk to our <span className="text-gradient">scientific team</span>.
          </h1>
          <p className="mt-6 text-slate-600 text-lg">
            Have questions about Radiogenomes AI? Want a demo? Looking to integrate genomic intelligence into your workflow?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="glass rounded-3xl p-6 hover:border-teal-400/50 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Mail size={20} className="text-teal-700" />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Email Us</div>
              <div className="text-navy-900 font-medium break-all">{SITE_CONFIG.email}</div>
              <div className="mt-3 text-xs text-slate-600">We respond within 24 hours</div>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="glass rounded-3xl p-6 hover:border-teal-400/50 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Phone size={20} className="text-teal-700" />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Call Us</div>
              <div className="text-navy-900 font-medium">{SITE_CONFIG.phone}</div>
              <div className="mt-3 text-xs text-slate-600">Mon – Fri, 10am – 7pm IST</div>
            </a>

            <a
              href={SITE_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-3xl p-6 hover:border-teal-400/50 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <MapPin size={20} className="text-teal-700" />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Visit Us</div>
              <div className="text-navy-900 font-medium text-sm leading-relaxed">{SITE_CONFIG.address}</div>
              <div className="mt-3 text-xs text-teal-700">Open in Google Maps →</div>
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-10 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 glass">
            <iframe
              src="https://www.google.com/maps?q=Gera%27s+Imperium+Gateway+Bhosari+Pune+411034&output=embed"
              title="ImagingInsight AI Office Location"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
