import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { TeamCard } from '@/components/TeamCard';
import { TEAM } from '@/lib/team';
import { SITE_CONFIG } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Team — ${SITE_CONFIG.productName}`,
  description: 'Meet the medical, research, and engineering team behind Radiogenomes AI — led by leading oncopathologists, radiologists, and AI engineers.',
};

export default function TeamPage() {
  const leadership = TEAM.filter((m) => m.group === 'leadership');
  const operations = TEAM.filter((m) => m.group === 'operations');

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="container-x text-center max-w-3xl mx-auto relative">
          <div className="eyebrow mb-5 mx-auto">The People Behind Radiogenomes AI</div>
          <h1 className="h-display text-4xl md:text-6xl text-navy-900 leading-tight">
            Built by <span className="text-gradient">doctors, researchers & engineers</span>.
          </h1>
          <p className="mt-6 text-slate-600 text-lg">
            Radiogenomes AI is the product of a unique partnership — top Indian clinicians
            and AI engineers working together to deliver clinical-grade genomic intelligence.
          </p>
        </div>
      </section>

      {/* Leadership & Medical Advisory */}
      <section className="py-16 relative">
        <div className="container-x">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-widest text-teal-700 font-mono mb-3">
              Leadership & Medical Advisory
            </div>
            <h2 className="h-display text-3xl md:text-4xl text-navy-900">
              Our <span className="text-gradient">Founders</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">
              Every Radiogenomes AI report is clinically reviewed and approved by our medical team
              before it reaches a patient or clinician.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leadership.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Review Workflow */}
      <section className="py-16 relative">
        <div className="container-x">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="eyebrow mb-5 mx-auto">Our Clinical Review Cycle</div>
              <h2 className="h-display text-3xl md:text-4xl text-navy-900">
                AI-generated. <span className="text-gradient">Doctor-verified.</span>
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">
                Every report follows a rigorous review pipeline before delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />

              {[
                { n: '01', title: 'AI Analysis', desc: 'Patient sample data is processed through our AI-powered genomic intelligence engine.' },
                { n: '02', title: 'PDF Generated', desc: 'Clinical-grade report drafted with risk gauges, panels, and recommendations.' },
                { n: '03', title: 'Medical Review', desc: 'Our 3 senior doctors independently review and stamp the report.' },
                { n: '04', title: 'Delivered', desc: 'Verified, stamped, physician-ready PDF delivered to client or clinician.' },
              ].map((step, i) => (
                <div key={step.n} className="relative glass rounded-2xl p-5 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/10 border border-teal-500/40 flex items-center justify-center font-mono text-teal-700 font-bold text-lg">
                    {step.n}
                  </div>
                  <h4 className="mt-4 font-display text-navy-900 font-semibold">{step.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operations & Engineering */}
      <section className="py-16 relative">
        <div className="container-x">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-widest text-teal-700 font-mono mb-3">
              Operations & Engineering
            </div>
            <h2 className="h-display text-3xl md:text-4xl text-navy-900">
              The <span className="text-gradient">Build Team</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">
              The people who make the platform run, every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {operations.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-20 relative">
        <div className="container-x">
          <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-rainbow-gradient opacity-15" />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
            <div className="relative px-8 md:px-12 py-12 text-center">
              <h3 className="h-display text-2xl md:text-3xl text-navy-900">
                Want to work with us?
              </h3>
              <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm">
                We're always looking for clinicians, researchers, and engineers passionate
                about bringing genomic intelligence to Indian healthcare.
              </p>
              <div className="mt-8">
                <a href={`mailto:${SITE_CONFIG.email}`} className="btn-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
