/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  TELERADIOLOGY VERTICAL — SINGLE SOURCE OF TRUTH FOR ALL COPY
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Every string, metric, FAQ entry and radiologist bio on /teleradiology lives
 *  in this file. Components read from here — nothing is hardcoded in JSX.
 *
 *  ANY value marked {{EDIT: ...}} renders literally on the page. That is
 *  deliberate: it is impossible to ship the site without noticing them.
 *  See TELERADIOLOGY_README.md for the full "Before publishing" checklist.
 *
 *  COMPLIANCE RULES when editing this file:
 *   1. AI is decision-support only — it prioritises worklists and assists
 *      reporting. It never "diagnoses", "detects disease", or "replaces" a
 *      radiologist. Final interpretation is ALWAYS attributed to a licensed
 *      radiologist.
 *   2. No quantitative performance claim (accuracy %, "zero-defect", "99.9%",
 *      report counts) may be asserted without substantiation. Leave it as an
 *      {{EDIT}} placeholder until legal/clinical sign-off.
 *   3. Certifications (NABH / ISO / QMS) are placeholders until formally held.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Icon keys map to lucide-react components inside each section component. */
export interface TeleCard {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

/**
 * ─── SECTION VISIBILITY ──────────────────────────────────────────────────────
 *
 * Sections whose underlying facts do not exist yet are hidden rather than
 * deleted. Flip a flag to `true` to bring one back — the content, components
 * and styling are all still in place, nothing needs rebuilding.
 *
 *   radiologistPanel — HIDDEN as of 2026-08-09. The reporting panel is still
 *                      being finalised. Turn on once real names, qualifications,
 *                      council registrations and subspecialties are confirmed
 *                      (fill TELERADIOLOGY.radiologistPanel.members first).
 *
 *   certifications   — HIDDEN as of 2026-08-09. NABH / ISO / QMS must not be
 *                      displayed, even as placeholders, until the certificates
 *                      are actually held and in date. Turn on only after
 *                      sign-off (fill qualityAssurance.certifications.items).
 *
 * Both were showing raw {{EDIT}} placeholders on the live page, which is worse
 * than showing nothing — a visitor reads an empty credential as no credential.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const TELE_SECTIONS: {
  radiologistPanel: boolean;
  certifications: boolean;
} = {
  radiologistPanel: false,
  certifications: false,
};

export const TELERADIOLOGY = {
  /* ── SEO / metadata ─────────────────────────────────────────────────────── */
  meta: {
    title: 'Teleradiology Services India — Remote Radiology Reporting | ImagingInsight AI',
    description:
      'Remote radiology reporting for hospitals and diagnostic centres across India. Subspecialty radiologists, 24/7/365 coverage, AI-assisted worklist prioritisation, secure DICOM transfer. By ImagingInsight AI Pvt Ltd, Pune.',
    keywords: [
      'teleradiology services India',
      'remote radiology reporting',
      'nighthawk radiology reporting',
      'subspecialty teleradiology',
      'teleradiology Pune',
      'emergency radiology reporting',
      'second opinion radiology',
      'ImagingInsight AI',
    ],
    /** {{EDIT: replace with a dedicated imaging/scan OG artwork at /brand/teleradiology-og.png}} */
    ogImage: '/brand/digital-twin.webp',
    canonical: 'https://www.imaginginsightai.com/teleradiology',
  },

  /* ── 1. Hero ────────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: 'Teleradiology by ImagingInsight AI',
    headingLead: 'Remote radiology reporting,',
    headingAccent: 'read by subspecialty radiologists',
    headingTail: 'around the clock.',
    sub:
      'ImagingInsight AI Pvt Ltd provides teleradiology reporting for hospitals and diagnostic centres — India-based subspecialty radiologists, an AI-assisted workflow that prioritises urgent studies, and a structured quality-assurance process behind every report.',
    ctaPrimary: { label: 'Request a Demo', href: '#contact' },
    ctaSecondary: { label: 'Partner With Us', href: '#contact' },
    /** Full-bleed banner behind the hero copy. */
    banner: '/teleradiology/hero-banner.png',
    bannerAlt:
      'Two clinicians reviewing brain MRI studies on diagnostic reporting monitors in a reading room',
    /** Small trust chips under the CTAs. Keep these non-quantitative. */
    chips: [
      'Licensed radiologists',
      'Secure DICOM transfer',
      '24/7/365 coverage',
    ],
  },

  /* ── 2. Value props ─────────────────────────────────────────────────────── */
  valueProps: {
    eyebrow: 'Why This Vertical',
    heading: 'Reporting capacity when and where you need it.',
    sub: 'Built for imaging providers who need dependable reporting cover without expanding in-house rota.',
    cards: [
      {
        id: 'coverage',
        icon: 'clock',
        title: '24/7/365 Coverage',
        desc: 'Nights, weekends and public holidays are covered by a rostered panel, so your imaging service never pauses.',
      },
      {
        id: 'tat',
        icon: 'timer',
        title: 'Defined Turnaround',
        desc: 'Turnaround times are agreed per study class and written into your service schedule. Routine: {{EDIT: TAT — routine}} · STAT/emergency: {{EDIT: TAT — emergency}}.',
      },
      {
        id: 'subspecialty',
        icon: 'brain',
        title: 'Subspecialty Expertise',
        desc: 'Studies are routed to radiologists reporting within their declared subspecialty rather than to a general pool.',
      },
      {
        id: 'qa',
        icon: 'shield-check',
        title: '3-Tier Quality Assurance',
        desc: 'Peer review, quality-panel checks and audit by the quality head — an auditable process, documented for every partner.',
      },
      {
        id: 'ai',
        icon: 'cpu',
        title: 'AI-Assisted Prioritisation',
        desc: 'Non-diagnostic AI orders the worklist and flags studies for earlier review. It never interprets a study — a licensed radiologist does.',
      },
      {
        id: 'cost',
        icon: 'wallet',
        title: 'Cost Efficiency',
        desc: 'Pay for reporting you actually consume instead of carrying fixed rota cost through low-volume hours. Commercials: {{EDIT: pricing model}}.',
      },
    ],
  },

  /* ── 3. Coverage models ─────────────────────────────────────────────────── */
  coverageModels: {
    eyebrow: 'Coverage Models',
    heading: 'Engage us for the gap you actually have.',
    sub: 'Each model can run standalone or alongside your in-house team.',
    cards: [
      {
        id: 'nighthawk',
        icon: 'moon',
        title: 'Nighthawk / After-Hours',
        desc: 'Overnight and out-of-hours reporting so acute studies are not held until the morning list.',
      },
      {
        id: 'overflow',
        icon: 'layers',
        title: 'Overflow Reporting',
        desc: 'Absorbs peak-volume days and backlog so your reporting queue stays inside agreed turnaround.',
      },
      {
        id: 'leave',
        icon: 'calendar-days',
        title: 'Vacation & Leave Cover',
        desc: 'Planned cover for radiologist leave, sabbaticals and vacancy periods without agency onboarding.',
      },
      {
        id: 'stat',
        icon: 'siren',
        title: 'Emergency / STAT Reads',
        desc: 'Priority pathway for acute presentations, escalated ahead of the routine queue on arrival.',
      },
      {
        id: 'prelim',
        icon: 'file-clock',
        title: 'Preliminary Reads',
        desc: 'A provisional read to support immediate clinical decisions, followed by the final verified report.',
      },
      {
        id: 'second-opinion',
        icon: 'users',
        title: 'Second Opinion',
        desc: 'Independent subspecialty review of a prior study, issued as a separate signed report.',
      },
      {
        id: 'audit',
        icon: 'clipboard-check',
        title: 'Audit Reporting',
        desc: 'Retrospective review of reported studies for internal governance, discrepancy logging and CPD.',
      },
    ],
  },

  /* ── 4. Modalities ──────────────────────────────────────────────────────── */
  modalities: {
    eyebrow: 'Modalities Covered',
    heading: 'Across the modalities your service runs.',
    sub: 'Ingested over secure DICOM transfer from your PACS or via our lightweight uploader.',
    items: [
      { id: 'ct', icon: 'scan', label: 'CT', note: 'Plain & contrast', image: '/teleradiology/ct.png', alt: 'Radiographer positioning a patient at a CT scanner' },
      { id: 'mri', icon: 'magnet', label: 'MRI', note: 'All sequences', image: '/teleradiology/mri.png', alt: 'MRI scanner in an imaging suite' },
      { id: 'xray', icon: 'bone', label: 'X-Ray', note: 'Plain radiography', image: '/teleradiology/xray.png', alt: 'Plain radiograph displayed for reporting' },
      { id: 'us', icon: 'audio-waveform', label: 'Ultrasound', note: 'Incl. Doppler', image: '/teleradiology/ultrasound.png', alt: 'Ultrasound examination in progress' },
      { id: 'mammo', icon: 'ribbon', label: 'Mammography', note: 'Screening & diagnostic', image: '/teleradiology/mammography.png', alt: 'Mammography unit prepared for a screening study' },
      { id: 'pet', icon: 'atom', label: 'PET', note: 'PET-CT', image: '/teleradiology/pet-scan.png', alt: 'PET-CT scanner in a nuclear medicine department' },
      { id: 'cbct', icon: 'box', label: 'CBCT', note: 'Dental & maxillofacial', image: '/teleradiology/cbct.png', alt: 'Cone-beam CT unit for dental and maxillofacial imaging' },
      // `note` intentionally blank — the card renders the label alone.
      { id: 'special', icon: 'microscope', label: 'Special Studies', note: '', image: '/teleradiology/special-studies.png', alt: 'Specialist imaging study being reviewed' },
    ],
  },

  /* ── 5. Subspecialties ──────────────────────────────────────────────────── */
  subspecialties: {
    eyebrow: 'Subspecialty Expertise',
    heading: 'Routed to the right reader.',
    sub: 'Studies are allocated by subspecialty declaration and credentialing, not round-robin.',
    cards: [
      { id: 'neuro', icon: 'brain', title: 'Neuroradiology', desc: 'Brain, spine and head-and-neck imaging, including acute stroke pathways.', image: '/teleradiology/neuroradiology.png', alt: 'Radiologist reviewing a sagittal brain MRI on a reporting monitor' },
      { id: 'msk', icon: 'bone', title: 'Musculoskeletal', desc: 'Joints, sports injury, arthropathy and post-operative MSK follow-up.', image: '/teleradiology/musculo.png', alt: 'Musculoskeletal imaging study under review' },
      { id: 'breast', icon: 'ribbon', title: 'Breast Imaging', desc: 'Screening and diagnostic mammography, breast ultrasound and MRI correlation.', image: '/teleradiology/breast-imaging.png', alt: 'Breast imaging study being reported' },
      { id: 'body', icon: 'circle-dot', title: 'Body / Abdominal', desc: 'Hepatobiliary, GI, genitourinary and general abdominal cross-sectional imaging.', image: '/teleradiology/body-abdominal.png', alt: 'Abdominal cross-sectional imaging on a diagnostic display' },
      { id: 'cardiothoracic', icon: 'heart-pulse', title: 'Cardiothoracic', desc: 'Chest CT, interstitial lung disease, cardiac and vascular studies.', image: '/teleradiology/cardio-thoracic.png', alt: 'Cardiothoracic imaging study under review' },
      { id: 'paeds', icon: 'baby', title: 'Paediatric', desc: 'Age-appropriate protocols and reporting for paediatric presentations.', image: '/teleradiology/pead.png', alt: 'Paediatric imaging examination' },
      { id: 'onco', icon: 'target', title: 'Oncology Imaging', desc: 'Staging, restaging and treatment-response assessment with structured criteria.', image: '/teleradiology/oncology.png', alt: 'Oncology imaging study reviewed for staging' },
      { id: 'emergency', icon: 'siren', title: 'Emergency Radiology', desc: 'Trauma, acute abdomen and time-critical presentations on a priority pathway.', image: '/teleradiology/emergency-radiology.png', alt: 'Emergency imaging study reported on a priority pathway' },
    ],
  },

  /* ── 6. Workflow ────────────────────────────────────────────────────────── */
  workflow: {
    eyebrow: 'How It Works',
    heading: 'From scan acquired to verified report.',
    sub: 'A four-step pipeline. AI assists the queue; a licensed radiologist issues every interpretation.',
    steps: [
      {
        id: 'upload',
        n: '01',
        icon: 'cloud-upload',
        title: 'Secure Upload / PACS Push',
        desc: 'Studies arrive over encrypted DICOM transfer, pushed from your PACS or sent via our lightweight uploader.',
        chip: 'Encrypted DICOM',
      },
      {
        id: 'triage',
        n: '02',
        icon: 'cpu',
        title: 'AI-Assisted Triage',
        desc: 'Non-diagnostic AI orders the worklist and surfaces studies for earlier review. It produces no findings and no interpretation.',
        chip: 'Non-diagnostic',
      },
      {
        id: 'read',
        n: '03',
        icon: 'stethoscope',
        title: 'Radiologist Interpretation',
        desc: 'A licensed radiologist reporting within their subspecialty reviews the study and authors the report. This step is never automated.',
        chip: 'Licensed radiologist',
      },
      {
        id: 'deliver',
        n: '04',
        icon: 'file-check-2',
        title: 'Verified Report Delivered',
        desc: 'The signed report is returned to the referring clinician through the agreed delivery channel, with the reporting radiologist named.',
        chip: 'Signed & attributed',
      },
    ],
    /** Expanded detail panel sitting under the four pipeline steps. */
    stepDetail: {
      label: 'Step 03 — in detail',
      heading: 'The read happens at a',
      headingAccent: 'diagnostic workstation',
      headingTail: '.',
      body:
        'Studies open in a calibrated DICOM viewer with full windowing, measurement and prior-study comparison. The worklist is ordered by clinical priority — the AI arranges that queue, and nothing more.',
      points: [
        'Full DICOM toolset — windowing, MPR, measurement',
        'Prior studies available for comparison',
        'Structured reporting templates per modality',
        'Report signed and attributed before release',
      ],
      image: '/teleradiology/diagnostic-workstation.png',
      alt: 'Radiologist reporting from a multi-monitor diagnostic workstation with imaging studies displayed side by side',
    },

    /** Rendered directly beneath the pipeline — keep this line. */
    aiNote:
      'AI is used for worklist prioritisation and quality assist only. It is not a diagnostic device, produces no clinical findings, and does not replace radiologist review. Every report is interpreted and signed by a licensed radiologist.',
  },

  /* ── 7. Quality assurance ───────────────────────────────────────────────── */
  qualityAssurance: {
    eyebrow: 'Quality Assurance',
    heading: 'A documented process, not a claim.',
    sub:
      'Quality is evidenced through an auditable three-tier review process. Discrepancy rates and audit outcomes are shared with partners under the reporting agreement — methodology available on request.',
    tiers: [
      {
        id: 'tier-1',
        icon: 'users',
        tier: 'Tier 1',
        title: 'Peer-to-Peer Review',
        desc: 'A defined proportion of reported studies is independently re-read by a second radiologist of equivalent subspecialty standing. Sampling rate: {{EDIT: peer review sampling rate}}.',
      },
      {
        id: 'tier-2',
        icon: 'clipboard-check',
        tier: 'Tier 2',
        title: 'Quality Panel Checks',
        desc: 'A standing panel reviews flagged studies, discrepancies and clinician feedback, and logs outcomes against the reporting radiologist record.',
      },
      {
        id: 'tier-3',
        icon: 'shield-check',
        tier: 'Tier 3',
        title: 'Audit by Quality Head',
        desc: 'Periodic audit by the designated quality head covering turnaround adherence, discrepancy trends and corrective actions. Audit cycle: {{EDIT: audit frequency}}.',
      },
    ],
    /** Certifications are ASPIRATIONAL PLACEHOLDERS until formally held. */
    certifications: {
      label: 'Certifications & accreditation',
      note: 'Do not publish these until the certificate is held and in date.',
      items: [
        '{{EDIT: NABH accreditation status — do not assert until certified}}',
        '{{EDIT: ISO certification number & scope — do not assert until certified}}',
        '{{EDIT: QMS framework in use — confirm before publishing}}',
      ],
    },
  },

  /* ── 8. Technology & PACS ───────────────────────────────────────────────── */
  technology: {
    eyebrow: 'Technology & PACS',
    heading: 'Integrates with the imaging estate you already run.',
    sub: 'No rip-and-replace. We connect to your existing workflow and support onboarding end to end.',
    cards: [
      { id: 'pacs', icon: 'server', title: 'Secure Cloud PACS', desc: 'Studies are stored in an access-controlled cloud PACS with role-based permissions and audit logging.' },
      { id: 'dicom', icon: 'network', title: 'DICOM Ingestion', desc: 'Standards-based DICOM push from your modality or PACS, with automated study validation on receipt.' },
      { id: 'encryption', icon: 'lock', title: 'Encrypted Transfer & Storage', desc: 'Data is encrypted in transit and at rest. Access is restricted to credentialed personnel on a need-to-know basis.' },
      { id: 'uploader', icon: 'download', title: 'Lightweight Uploader', desc: 'A small client install for sites without a PACS push route. Minimal footprint, no change to acquisition workflow.' },
      { id: 'onboarding', icon: 'plug', title: 'Integration & Onboarding', desc: 'Connectivity setup, test studies, and workflow sign-off before live reporting begins.' },
      { id: 'support', icon: 'headset', title: '24/7 Technical Support', desc: 'Round-the-clock escalation route for connectivity, transfer and delivery issues.' },
    ],
    /* ─── REGULATORY BLOCK — kept structurally separate for legal review ─── */
    dataHandling: {
      heading: 'Data protection',
      india:
        'Patient data is handled in line with India’s Digital Personal Data Protection Act, 2023 (DPDP Act). Processing is limited to the reporting purpose agreed with the data fiduciary, and retention follows the schedule set in your reporting agreement.',
      international:
        'For US and international partners, data handling is HIPAA-aligned. A Business Associate Agreement can be executed where required — {{EDIT: confirm BAA availability and signatory before publishing}}.',
      footnote:
        'Data residency, retention period and sub-processor list: {{EDIT: specify data residency, retention period and sub-processors}}.',
    },
  },

  /* ── 9. Who it's for ────────────────────────────────────────────────────── */
  whoItsFor: {
    eyebrow: 'Who It’s For',
    heading: 'Imaging providers who need reporting to keep pace.',
    cards: [
      { id: 'hospitals', icon: 'building-2', title: 'Hospitals', desc: 'Acute and multi-speciality hospitals needing out-of-hours cover, emergency reads and overflow capacity alongside an in-house team.' },
      { id: 'centres', icon: 'scan', title: 'Diagnostic & Imaging Centres', desc: 'Standalone centres that need consistent subspecialty reporting without carrying a full-time rota.' },
      { id: 'groups', icon: 'network', title: 'Centre Groups & PPP Programs', desc: 'Multi-site imaging groups and public-private health programs requiring standardised reporting across locations.' },
    ],
  },

  /* ── 10. Radiologist panel ──────────────────────────────────────────────── */
  radiologistPanel: {
    eyebrow: 'Radiologist Panel',
    heading: 'Named, credentialed, accountable.',
    sub:
      'Every report carries the name and registration of the reporting radiologist. Panel composition is shared with partners during onboarding.',
    /**
     * PLACEHOLDER ENTRIES — no real names. Replace each with a verified
     * radiologist: full name, qualifications, council registration,
     * subspecialty and years in practice. Do not publish invented profiles.
     */
    members: [
      {
        id: 'panel-1',
        name: '{{EDIT: radiologist name}}',
        qualifications: '{{EDIT: qualifications, e.g. MD Radiodiagnosis}}',
        registration: '{{EDIT: medical council registration no.}}',
        subspecialty: '{{EDIT: subspecialty}}',
        years: '{{EDIT: years in practice}}',
      },
      {
        id: 'panel-2',
        name: '{{EDIT: radiologist name}}',
        qualifications: '{{EDIT: qualifications}}',
        registration: '{{EDIT: medical council registration no.}}',
        subspecialty: '{{EDIT: subspecialty}}',
        years: '{{EDIT: years in practice}}',
      },
      {
        id: 'panel-3',
        name: '{{EDIT: radiologist name}}',
        qualifications: '{{EDIT: qualifications}}',
        registration: '{{EDIT: medical council registration no.}}',
        subspecialty: '{{EDIT: subspecialty}}',
        years: '{{EDIT: years in practice}}',
      },
      {
        id: 'panel-4',
        name: '{{EDIT: radiologist name}}',
        qualifications: '{{EDIT: qualifications}}',
        registration: '{{EDIT: medical council registration no.}}',
        subspecialty: '{{EDIT: subspecialty}}',
        years: '{{EDIT: years in practice}}',
      },
    ],
    credentialingNote:
      'Credentialing covers council registration, qualification verification, subspecialty declaration and indemnity confirmation before a radiologist joins the reporting panel.',
  },

  /* ── 11. Cross-sell to Radiogenomes ─────────────────────────────────────── */
  crossSell: {
    eyebrow: 'One Partner, Two Verticals',
    heading: 'Imaging and genomic intelligence, under one roof.',
    sub:
      'ImagingInsight AI Pvt Ltd runs both verticals: teleradiology reporting for your imaging service, and Radiogenomes AI for genomic intelligence. One commercial relationship, one support route, one team.',
    cta: { label: 'Explore Radiogenomes AI', href: '/' },
  },

  /* ── 12. Partner / demo form ────────────────────────────────────────────── */
  form: {
    eyebrow: 'Request a Demo',
    heading: 'Talk to our teleradiology team.',
    sub:
      'Tell us the coverage gap you are trying to close and we will come back with a reporting model, turnaround schedule and commercials.',
    roles: ['Radiologist', 'Hospital', 'Diagnostic Centre', 'Other'],
    modalityOptions: ['CT', 'MRI', 'X-Ray', 'Ultrasound', 'Mammography', 'PET', 'CBCT', 'Other'],
    successTitle: 'Thank you — request received.',
    successBody: 'Our teleradiology team will get back to you within one business day.',
    /** WhatsApp CTA — matches competitor UX. */
    whatsapp: {
      /** {{EDIT: confirm whether teleradiology should use a separate number}} */
      number: '919923030250',
      message: 'Hi! I would like to know more about ImagingInsight AI teleradiology reporting services.',
      label: 'Chat on WhatsApp',
    },
  },

  /* ── 13. FAQ ────────────────────────────────────────────────────────────── */
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions partners ask before onboarding.',
    items: [
      {
        id: 'services',
        q: 'What reporting services are covered?',
        a: 'Nighthawk and after-hours reporting, overflow, vacation and leave cover, emergency/STAT reads, preliminary reads, second opinions, and retrospective audit reporting — across CT, MRI, X-ray, ultrasound, mammography, PET and CBCT.',
      },
      {
        id: 'credentialing',
        q: 'How are your radiologists verified?',
        a: 'Before joining the reporting panel, each radiologist goes through credentialing covering medical council registration, qualification verification, subspecialty declaration and professional indemnity confirmation. The reporting radiologist is named on every report.',
      },
      {
        id: 'choose-panel',
        q: 'Can we choose which radiologists report our studies?',
        a: 'Yes. Partners can agree a named sub-panel during onboarding, and studies from your site are routed to that group by subspecialty. Escalation and cover arrangements for that panel are set out in the reporting agreement.',
      },
      {
        id: 'software',
        q: 'What software do we need to install?',
        a: 'If your PACS supports DICOM push, no installation is needed — we configure a secure route to our cloud PACS. Sites without a push route install a lightweight uploader client, which does not change your acquisition workflow.',
      },
      {
        id: 'onboarding',
        q: 'How does onboarding and training work?',
        a: 'Onboarding covers connectivity setup, test study exchange, delivery-channel configuration and workflow sign-off before live reporting begins. Training for your team is included. Typical onboarding time: {{EDIT: onboarding duration}}.',
      },
      {
        id: 'tat',
        q: 'What turnaround time can we expect?',
        a: 'Turnaround is agreed per study class and written into your service schedule rather than quoted as a single figure. Current commitments — routine: {{EDIT: TAT — routine}}, STAT/emergency: {{EDIT: TAT — emergency}}. Adherence is reported back to you as part of the audit cycle.',
      },
      {
        id: 'security',
        q: 'How is patient data secured?',
        a: 'Data is encrypted in transit and at rest, held in an access-controlled cloud PACS with role-based permissions and audit logging. Handling follows India’s DPDP Act 2023, and is HIPAA-aligned for international partners. Data residency and retention are set in your agreement.',
      },
      {
        id: 'ai-role',
        q: 'What exactly does the AI do?',
        a: 'It prioritises the worklist and flags studies for earlier review, and supports quality checks. It is non-diagnostic: it produces no clinical findings and no interpretation. Every report is read, authored and signed by a licensed radiologist.',
      },
    ],
  },

  /* ── Persistent compliance disclaimer ───────────────────────────────────── */
  disclaimer:
    'Teleradiology reporting supports referring clinicians; it does not replace in-person clinical judgment.',

  serviceNote:
    'Teleradiology reporting is a professional medical service delivered by licensed radiologists. It is not a medical device. Any AI referenced on this page is non-diagnostic decision-support used for worklist prioritisation and quality assist.',
} as const;

/** Stub sub-routes — copy for the "coming soon" placeholder pages. */
export const TELE_STUBS = {
  services: {
    title: 'Services',
    heading: 'Teleradiology services, in detail.',
    sub: 'A full breakdown of coverage models, modalities and reporting scope is being prepared for this page.',
  },
  quality: {
    title: 'Quality',
    heading: 'Our quality assurance framework.',
    sub: 'Detailed documentation of the three-tier review process, audit methodology and discrepancy reporting is being prepared for this page.',
  },
  partner: {
    title: 'Partner',
    heading: 'Partner with ImagingInsight AI.',
    sub: 'Partnership models, onboarding timelines and commercial structures are being prepared for this page.',
  },
  faq: {
    title: 'FAQ',
    heading: 'Frequently asked questions.',
    sub: 'An expanded FAQ covering clinical, technical and commercial questions is being prepared for this page.',
  },
} as const;
