'use client';
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { TELERADIOLOGY as T } from '@/content/teleradiology';
import { ComplianceNote } from './ComplianceNote';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

/** Same pipeline as components/ContactForm.tsx — Web3Forms, no separate backend. */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export function PartnerForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [modalities, setModalities] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    phone: '',
    message: '',
    botcheck: '', // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.organization.trim()) e.organization = 'Organization is required';
    if (!form.role) e.role = 'Please select a role';
    if (!form.email.trim()) e.email = 'Work email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Invalid phone number';
    if (!form.message.trim()) e.message = 'Please tell us what you need';
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
        subject: `New Teleradiology Enquiry from ${form.name} (${form.organization})`,
        from_name: 'ImagingInsight AI — Teleradiology',
        name: form.name,
        organization: form.organization,
        role: form.role,
        email: form.email,
        phone: form.phone,
        modalities: modalities.length ? modalities.join(', ') : 'Not specified',
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
        setForm({ name: '', organization: '', role: '', email: '', phone: '', message: '', botcheck: '' });
        setModalities([]);
      } else {
        setState('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setState('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
    }
  }

  function toggleModality(m: string) {
    setModalities((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  }

  const inputClass = (field: string) =>
    `w-full bg-white border ${
      errors[field] ? 'border-red-500/60' : 'border-slate-200'
    } rounded-xl px-4 py-3 text-sm text-navy-900 placeholder:text-slate-500 focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/30 transition-colors`;

  const errorFor = (field: string) =>
    errors[field] ? (
      <p id={`tf-${field}-error`} className="mt-1 text-xs text-red-600 flex items-center gap-1">
        <AlertCircle size={12} aria-hidden="true" /> {errors[field]}
      </p>
    ) : null;

  const whatsappHref = `https://wa.me/${T.form.whatsapp.number}?text=${encodeURIComponent(
    T.form.whatsapp.message,
  )}`;

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

          <div className="relative px-6 sm:px-8 md:px-16 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Left: copy */}
              <div>
                <div className="eyebrow mb-6">{T.form.eyebrow}</div>
                <h2 className="h-display text-3xl md:text-4xl text-navy-900 leading-tight">
                  {T.form.heading}
                </h2>
                <p className="mt-6 text-slate-600 leading-relaxed">{T.form.sub}</p>

                <div className="mt-8 text-sm text-slate-600">
                  Or email us directly at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-700 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 rounded-full px-5 py-3 bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-all active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {T.form.whatsapp.label}
                </a>

                <div className="mt-8">
                  <ComplianceNote>{T.disclaimer}</ComplianceNote>
                </div>
              </div>

              {/* Right: form */}
              <div>
                {state === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    role="status"
                    className="glass rounded-2xl p-10 text-center"
                  >
                    <CheckCircle2 size={48} className="text-teal-700 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-display text-xl text-navy-900 font-semibold">
                      {T.form.successTitle}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm">{T.form.successBody}</p>
                    <button onClick={() => setState('idle')} className="mt-6 btn-ghost text-sm py-2 px-5">
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
                        <label htmlFor="tf-name" className="block text-xs text-slate-600 mb-1.5">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="tf-name"
                          type="text"
                          autoComplete="name"
                          placeholder="Dr. Priya Sharma"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'tf-name-error' : undefined}
                          className={inputClass('name')}
                        />
                        {errorFor('name')}
                      </div>

                      <div>
                        <label htmlFor="tf-org" className="block text-xs text-slate-600 mb-1.5">
                          Organization <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="tf-org"
                          type="text"
                          autoComplete="organization"
                          placeholder="City Diagnostics"
                          value={form.organization}
                          onChange={(e) => update('organization', e.target.value)}
                          aria-invalid={!!errors.organization}
                          aria-describedby={errors.organization ? 'tf-organization-error' : undefined}
                          className={inputClass('organization')}
                        />
                        {errorFor('organization')}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="tf-role" className="block text-xs text-slate-600 mb-1.5">
                          Role <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="tf-role"
                          value={form.role}
                          onChange={(e) => update('role', e.target.value)}
                          aria-invalid={!!errors.role}
                          aria-describedby={errors.role ? 'tf-role-error' : undefined}
                          className={inputClass('role') + ' appearance-none cursor-pointer'}
                        >
                          <option value="" className="bg-slate-50">
                            Select your role
                          </option>
                          {T.form.roles.map((r) => (
                            <option key={r} value={r} className="bg-slate-50">
                              {r}
                            </option>
                          ))}
                        </select>
                        {errorFor('role')}
                      </div>

                      <div>
                        <label htmlFor="tf-phone" className="block text-xs text-slate-600 mb-1.5">
                          Phone <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="tf-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 99230 30250"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'tf-phone-error' : undefined}
                          className={inputClass('phone')}
                        />
                        {errorFor('phone')}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tf-email" className="block text-xs text-slate-600 mb-1.5">
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="tf-email"
                        type="email"
                        autoComplete="email"
                        placeholder="priya@hospital.org"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'tf-email-error' : undefined}
                        className={inputClass('email')}
                      />
                      {errorFor('email')}
                    </div>

                    {/* Modalities — multi-select as checkbox group */}
                    <fieldset>
                      <legend className="block text-xs text-slate-600 mb-2">
                        Modalities of interest
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {T.form.modalityOptions.map((m) => {
                          const active = modalities.includes(m);
                          return (
                            <label
                              key={m}
                              className={`cursor-pointer select-none rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                                active
                                  ? 'border-teal-400/60 bg-teal-500/15 text-teal-700'
                                  : 'border-slate-200 bg-white text-slate-600 hover:border-teal-400/40'
                              }`}
                            >
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={active}
                                onChange={() => toggleModality(m)}
                              />
                              {m}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="tf-message" className="block text-xs text-slate-600 mb-1.5">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="tf-message"
                        rows={4}
                        placeholder="Which coverage gap are you looking to close? Approximate monthly study volume?"
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'tf-message-error' : undefined}
                        className={inputClass('message') + ' resize-none'}
                      />
                      {errorFor('message')}
                    </div>

                    {state === 'error' && errorMsg && (
                      <div
                        role="alert"
                        className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-700 flex items-start gap-2"
                      >
                        <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state === 'submitting'}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state === 'submitting' ? 'Sending...' : 'Request a Demo'}
                      <Send size={16} aria-hidden="true" />
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
