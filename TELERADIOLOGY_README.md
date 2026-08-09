# Teleradiology Vertical — Build Notes

The Teleradiology vertical for **ImagingInsight AI Pvt Ltd**, added alongside the existing
Radiogenomes AI genomics vertical. Both share one design system, one nav, one footer and one
lead pipeline.

> **This page is not ready to publish.** It contains deliberate `{{EDIT: ...}}` placeholders that
> render literally on the live page. Work through the [Before publishing](#before-publishing) checklist first.

---

## What was added

### Routes

| Route | Status | Notes |
|---|---|---|
| `/teleradiology` | Complete | Long-form landing page, 13 sections |
| `/teleradiology/services` | Stub | Reserved URL, "coming soon" shell |
| `/teleradiology/quality` | Stub | Reserved URL |
| `/teleradiology/partner` | Stub | Reserved URL |
| `/teleradiology/faq` | Stub | Reserved URL |

All five prerender as static at build time.

### Files created

```
content/teleradiology.ts                      ← ALL copy lives here. Single source of truth.
app/teleradiology/page.tsx                    ← composes the 13 sections + JSON-LD
app/teleradiology/{services,quality,partner,faq}/page.tsx
components/teleradiology/
  Hero.tsx              ValueProps.tsx        CoverageModels.tsx
  Modalities.tsx        Subspecialties.tsx    WorkflowPipeline.tsx
  QualityAssurance.tsx  TechnologyPacs.tsx    WhoItsFor.tsx
  RadiologistPanel.tsx  CrossSellGenomics.tsx PartnerForm.tsx
  Faq.tsx
  ComplianceNote.tsx    ← ALL regulatory copy renders through this. See "Legal review" below.
  SectionHeading.tsx    ← shared eyebrow + h2 + sub
  StubPage.tsx          ← shared shell for the 4 stub routes
  icons.tsx             ← maps string icon keys in content → lucide components
  illustrations.tsx     ← original SVG artwork. See "Artwork" below.
```

### Files modified

| File | Change |
|---|---|
| `components/Navigation.tsx` | Two-vertical nav: Genomics · Teleradiology · Team · About · Contact. Active-state highlight, vertical-aware sub-label and demo CTA. Added a mobile Request Demo button (previously the CTA was desktop-only). |
| `components/Footer.tsx` | New Teleradiology column with all 5 routes; "Platform" renamed "Genomics"; Team link added to Company; grid widened to 6 columns with a 2-column tablet breakpoint. |
| `app/sitemap.ts` | All 5 new routes added. |
| `tailwind.config.ts` | `./content/**/*.{ts,tsx}` added to the content globs. |

**Nav change worth knowing:** "Reports" and "How it Works" were top-level nav links and are now
not — the slots went to the two verticals. Both remain reachable from the footer's Genomics column
and from in-page anchors (`/#reports`, `/#how`). Nothing on the genomics page itself changed.

---

## Where to edit copy

**Everything is in [`content/teleradiology.ts`](content/teleradiology.ts).** No string, metric, FAQ
entry or panel member is hardcoded in JSX. The file is organised in page order and each section is
commented.

Icons are referenced by string key (`icon: 'brain'`) and resolved in
`components/teleradiology/icons.tsx`. To use a new icon, add it to the `ICONS` map there first —
an unknown key silently falls back to a neutral dot rather than breaking the build.

---

## Artwork

`public/` contained no radiology imagery — every asset there is genomics branding or team
photography. Rather than ship placeholder boxes, the visuals are **original SVG artwork** drawn in
[`components/teleradiology/illustrations.tsx`](components/teleradiology/illustrations.tsx).

| Export | Used in | Depicts |
|---|---|---|
| `AxialScanArt` | Hero | Axial thoracic cross-section inside a rotating gantry, with an acquisition sweep |
| `ModalityArt` | Modalities (×8) | A distinct stylised study per modality — axial CT, sagittal MRI, chest X-ray, US sector, mammography, PET uptake, CBCT dental arch, stacked slices |
| `ReadingRoomArt` | Workflow | Dual-monitor diagnostic workstation: study on the left, prioritised worklist on the right |
| `PacsTopologyArt` | Technology & PACS | Site → encrypted transfer → cloud PACS → radiologist, with the signed report routed back |

**Why vector rather than photography or real scans:**

- **No patient data.** Real study images would carry DPDP Act 2023 and HIPAA de-identification
  obligations. Illustrations sidestep that entirely.
- **No licensing.** Nothing is drawn from a stock library, so there is no attribution or renewal risk.
- **Weight.** All four illustrations together add ~3.8 kB to the route (16.9 → 20.7 kB) with zero
  additional network requests. A comparable set of photographs would be hundreds of kB.
- **Register.** These read as diagrams, not as clinical evidence — the correct framing for a
  marketing page, and consistent with the no-unsubstantiated-claims rule.

Each illustration carries `role="img"` and a descriptive `aria-label`. Animations
(`tele-sweep`, `tele-spin`, `tele-dash`, `tele-node` in `globals.css`) are disabled under
`prefers-reduced-motion: reduce`. That guard is scoped to the new teleradiology classes only —
genomics animation behaviour is untouched.

### If you want real photography or study images instead

Drop-in points, in priority order:

1. **Hero** — replace `<AxialScanArt>` in `components/teleradiology/Hero.tsx` with a `next/image`.
   Wants a dark, high-contrast image (reading room, scanner suite) at ~1200×1200.
2. **Radiologist panel** — `RadiologistPanel.tsx` renders a dashed avatar placeholder. Add photos to
   `public/teleradiology/` and follow the pattern in `components/TeamCard.tsx`.
3. **Workflow** — swap `<ReadingRoomArt>` for a real workstation photograph.

**Before using any real study image:** it must be fully de-identified — no patient name, MRN, DOB,
accession number, institution or acquisition date in the pixel data *or* the DICOM header (burned-in
annotations are the usual trap), plus documented consent or a compliant de-identification basis under
the DPDP Act. Get sign-off before publishing.

## How the form submits

`PartnerForm.tsx` reuses the **existing Web3Forms pipeline** — the same one
`components/ContactForm.tsx` already uses. No new backend, no new API route.

```
Client → POST https://api.web3forms.com/submit → email to doc@imaginginsightai.com
```

- Key: `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`
- Anti-spam: hidden `botcheck` honeypot checkbox (Web3Forms convention)
- Validation: client-side on all required fields, with `aria-invalid` + `aria-describedby` wired to error text
- States: idle / submitting / success / error, all handled inline
- Extra fields over the genomics form: Organization, Role (select), Phone, Modalities (multi-select chips)
- Subject line: `New Teleradiology Enquiry from {name} ({organization})` — so teleradiology leads are filterable in the inbox

> ⚠️ **`NEXT_PUBLIC_WEB3FORMS_KEY` is not currently set in this repo** — there is no `.env.local`.
> Both forms (genomics and teleradiology) will fail to submit until it is. This predates the
> teleradiology work. Create `.env.local` with:
> ```
> NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
> ```
> and set the same variable in your hosting provider's environment settings.

To swap to a CRM later, replace the `fetch` block in `PartnerForm.tsx` — everything else
(validation, state machine, markup) is independent of the transport.

---

## Legal review

Regulatory copy is deliberately **structurally separable** from marketing and engineering copy:

1. All of it renders through `<ComplianceNote>` and carries a `data-compliance` attribute in the DOM,
   so every regulated string can be extracted with one selector:
   ```js
   [...document.querySelectorAll('[data-compliance]')].map(n => n.textContent)
   ```
2. In `content/teleradiology.ts` it is grouped under `technology.dataHandling`,
   `qualityAssurance.certifications`, `workflow.aiNote`, `disclaimer` and `serviceNote` —
   each block commented as a regulatory block.

**Positioning held throughout:** teleradiology reporting is a professional medical service delivered
by licensed radiologists, **not a medical device**. AI is described only as non-diagnostic
decision-support (worklist prioritisation, quality assist). Every mention of AI is paired with an
explicit statement that a licensed radiologist performs and signs the interpretation. No accuracy
percentage, defect rate or report count is asserted anywhere.

---

## Hidden sections

Two sections are **switched off** via `TELE_SECTIONS` in
[`content/teleradiology.ts`](content/teleradiology.ts). Nothing was deleted — the content,
components and styling are intact. Flip the flag to `true` to bring one back.

| Flag | Section | Why it is off | Turn on when |
|---|---|---|---|
| `radiologistPanel` | Radiologist Panel (§10) | Reporting roster still being finalised | Real names, qualifications, council registrations and subspecialties are confirmed — fill `TELERADIOLOGY.radiologistPanel.members` first |
| `certifications` | Certifications & accreditation block inside Quality Assurance (§7) | NABH / ISO / QMS not yet held | Certificates are held **and in date** — fill `qualityAssurance.certifications.items` first |

```ts
export const TELE_SECTIONS = {
  radiologistPanel: false,   // ← set true once the panel is confirmed
  certifications: false,     // ← set true once certificates are held
};
```

Both were rendering raw `{{EDIT}}` text on the live page. An empty credential reads to a visitor
as *no* credential, so hiding beats showing a blank. The rest of Quality Assurance — the three-tier
review process — is unaffected and still displays, as does the FAQ answer describing how
radiologists are credentialed.

When you re-enable the panel, note that `RadiologistPanel.tsx` renders a dashed initials-style
avatar for any member without a `photo`, so you can publish names before you have headshots.

## Before publishing

### 1. Blocking — needs your input (page shows raw `{{EDIT}}` text until done)

> The 20 radiologist-panel placeholders are **no longer on the page** — that section is hidden
> (see [Hidden sections](#hidden-sections)). They still need filling before it is switched on.

| Placeholder | Occurrences | Where | Needed from |
|---|---|---|---|
| `{{EDIT: TAT — routine}}` | 2 | `valueProps`, `faq.tat` | Ops — actual commitment |
| `{{EDIT: TAT — emergency}}` | 2 | `valueProps`, `faq.tat` | Ops — actual commitment |
| `{{EDIT: pricing model}}` | 1 | `valueProps.cost` | Commercial |
| `{{EDIT: peer review sampling rate}}` | 1 | `qualityAssurance.tiers` | Quality head |
| `{{EDIT: audit frequency}}` | 1 | `qualityAssurance.tiers` | Quality head |
| `{{EDIT: onboarding duration}}` | 1 | `faq.onboarding` | Ops |

### 2. Blocking — legal / clinical sign-off required

| Placeholder | Where | Risk if published as-is |
|---|---|---|
| NABH / ISO / QMS | `qualityAssurance.certifications` | **Asserting an accreditation you do not hold.** Currently hidden behind `TELE_SECTIONS.certifications`. Do not switch on until the certificate is held and in date. |
| `{{EDIT: confirm BAA availability and signatory}}` | `technology.dataHandling.international` | Committing to a HIPAA Business Associate Agreement you cannot execute. |
| `{{EDIT: specify data residency, retention period and sub-processors}}` | `technology.dataHandling.footnote` | DPDP Act 2023 requires this to be accurate and disclosed. |

### 3. Non-blocking

- `{{EDIT: confirm whether teleradiology should use a separate number}}` — `form.whatsapp.number`
  currently reuses the genomics number `919923030250`. Note the global floating WhatsApp button
  (`components/WhatsAppButton.tsx`) still sends a **genomics-worded** message on every page including
  `/teleradiology`. Make it route-aware if that matters.
- `{{EDIT: replace with a dedicated imaging/scan OG artwork}}` — `meta.ogImage` currently points at
  the genomics `/brand/digital-twin.webp` so social cards do not 404. Add
  `/brand/teleradiology-og.png` (1200×630 recommended) and update the key.

### 4. Verify before launch

- [ ] `grep -r "{{EDIT" content/` returns nothing
- [ ] `NEXT_PUBLIC_WEB3FORMS_KEY` set locally **and** in hosting env; test submission received at `doc@imaginginsightai.com`
- [ ] Legal has reviewed every `[data-compliance]` string
- [ ] Lighthouse run on the deployed URL (not `next dev` — dev mode understates performance)
- [ ] Genomics vertical spot-checked: `/`, `/team`, `/contact` all still correct

---

## Claims policy for future edits

When adding copy to this vertical:

- **Never** write "AI diagnoses", "AI detects", "AI-powered diagnosis", or anything implying the
  radiologist is optional. AI *assists*, *prioritises*, *supports*.
- **Never** state a performance number (accuracy, discrepancy rate, "zero-defect", "99.9%", report
  volumes) without documented substantiation. Use the existing pattern: state the process, then
  "methodology available on request".
- **Always** attribute final interpretation to a licensed radiologist wherever AI is mentioned in the
  same section.
- Keep the persistent disclaimer — *"Teleradiology reporting supports referring clinicians; it does
  not replace in-person clinical judgment"* — on every teleradiology page. It is already wired into
  `page.tsx` and `StubPage.tsx`.
