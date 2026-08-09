'use client';
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '', // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState('submitting');
    setErrorMsg('');

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New Demo Request from ${form.name}`,
        from_name: 'RadioGenomes AI Website',
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck: form.botcheck,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setState('success');
        setForm({ name: '', email: '', message: '', botcheck: '' });
      } else {
        setState('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setState('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  }

  const inputClass = (field: string) =>
    `w-full bg-white border ${errors[field] ? 'border-red-500/60' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm text-navy-900 placeholder:text-slate-500 focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/30 transition-colors`;

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden border border-teal-500/30"
        >
          <div className="absolute inset-0 bg-rainbow-gradient opacity-20" />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative px-8 md:px-16 py-20">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Left: copy */}
              <div>
                <div className="eyebrow mb-6">Limited Early Access</div>
                <h2 className="h-display text-4xl md:text-5xl text-navy-900 leading-tight">
                  Be among the first to deploy{' '}
                  <span className="text-gradient">India's genomic AI</span>.
                </h2>
                <p className="mt-6 text-slate-600">
                  Request a demo or talk to our scientific team. We'll walk you through the platform, the
                  reports, and how to integrate it with your workflow.
                </p>
                <div className="mt-8 text-sm text-slate-600">
                  Or email us directly at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div>
                {state === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass rounded-2xl p-10 text-center"
                  >
                    <CheckCircle2 size={48} className="text-teal-700 mx-auto mb-4" />
                    <h3 className="font-display text-xl text-navy-900 font-semibold">
                      Thank you!
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm">
                      Your message has been sent successfully. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setState('idle')}
                      className="mt-6 btn-ghost text-sm py-2 px-5"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Honeypot — hidden from real users, bots will fill it */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      checked={!!form.botcheck}
                      onChange={(e) => update('botcheck', e.target.checked ? 'true' : '')}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cf-name" className="block text-xs text-slate-600 mb-1.5">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="cf-name"
                          type="text"
                          placeholder="Dr. Priya Sharma"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className={inputClass('name')}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="cf-email" className="block text-xs text-slate-600 mb-1.5">
                          Work Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="cf-email"
                          type="email"
                          placeholder="priya@hospital.org"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          className={inputClass('email')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cf-message" className="block text-xs text-slate-600 mb-1.5">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="cf-message"
                        rows={4}
                        placeholder="Tell us about your use case..."
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        className={inputClass('message') + ' resize-none'}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {state === 'error' && errorMsg && (
                      <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-700 flex items-start gap-2">
                        <AlertCircle size={14} className="mt-0.5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state === 'submitting'}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state === 'submitting' ? 'Sending...' : 'Request Demo'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
