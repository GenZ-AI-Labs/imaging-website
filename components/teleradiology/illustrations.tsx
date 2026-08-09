/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ORIGINAL SVG ARTWORK FOR THE TELERADIOLOGY VERTICAL
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  All artwork here is drawn from scratch — stylised, diagrammatic
 *  representations of imaging studies. Deliberately NOT real scans:
 *
 *   • No patient data is involved, so there is no DPDP/HIPAA exposure.
 *   • Nothing is licensed from a stock library.
 *   • Vector art stays sharp on any display and costs almost no page weight.
 *
 *  These read as illustration, not as clinical evidence — which is the correct
 *  register for a marketing page. If real de-identified study images or
 *  photography are added later, see TELERADIOLOGY_README.md for the drop-in
 *  slots and the de-identification requirements that apply.
 *
 *  Palette matches the brand: teal #5EEAD4 / #2DD4BF / #14B8A6 on navy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ── Shared defs ─────────────────────────────────────────────────────────────
   Two palettes, because the artwork spans two grounds.

   The page is light, but every *scan viewport* stays dark — that is how real
   reading software looks, and a dark study on a white page reads as deliberate
   rather than as a leftover. So:

     STROKE / STROKE_DIM  → drawn INSIDE a dark fill (scan tiles, monitors)
     INK / INK_DIM        → drawn DIRECTLY on the white page (stands, connectors)

   Using the bright teal on white would drop contrast to roughly 1.3:1 and the
   line would effectively disappear.
   ────────────────────────────────────────────────────────────────────────── */

const STROKE = '#5EEAD4';
const STROKE_DIM = '#14B8A6';
const INK = '#0D9488';
const INK_DIM = '#0F766E';

/**
 * Hero artwork — a stylised axial thoracic cross-section inside a rotating
 * gantry, with a sweeping acquisition bar.
 */
export function AxialScanArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of an axial cross-sectional scan being acquired inside a scanner gantry"
    >
      <defs>
        <radialGradient id="axial-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#14B8A6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="axial-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
          <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
        </linearGradient>
        <clipPath id="axial-clip">
          <ellipse cx="100" cy="100" rx="72" ry="58" />
        </clipPath>
      </defs>

      {/* Ambient core glow */}
      <circle cx="100" cy="100" r="92" fill="url(#axial-core)" />

      {/* Gantry rings */}
      <g className="tele-spin">
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={STROKE_DIM}
          strokeOpacity="0.35"
          strokeWidth="0.8"
          strokeDasharray="2 8"
        />
      </g>
      <g className="tele-spin-reverse">
        <circle
          cx="100"
          cy="100"
          r="84"
          fill="none"
          stroke={STROKE_DIM}
          strokeOpacity="0.5"
          strokeWidth="0.8"
          strokeDasharray="18 10"
        />
      </g>
      <circle cx="100" cy="100" r="76" fill="none" stroke={STROKE_DIM} strokeOpacity="0.25" strokeWidth="0.6" />

      {/* Gantry detector marks at the cardinal points */}
      {[0, 90, 180, 270].map((deg) => (
        <rect
          key={deg}
          x="99"
          y="6"
          width="2"
          height="8"
          rx="1"
          fill={STROKE}
          fillOpacity="0.55"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}

      {/* ── Body cross-section ── */}
      {/* Body wall */}
      <ellipse cx="100" cy="100" rx="72" ry="58" fill="#0F172A" fillOpacity="0.9" />
      <ellipse cx="100" cy="100" rx="72" ry="58" fill="none" stroke={STROKE} strokeOpacity="0.8" strokeWidth="1.4" />
      <ellipse cx="100" cy="100" rx="66" ry="52" fill="none" stroke={STROKE_DIM} strokeOpacity="0.35" strokeWidth="0.7" />

      <g clipPath="url(#axial-clip)">
        {/* Lungs */}
        <path
          d="M64 70 C46 80 42 108 54 128 C64 141 78 135 80 118 C82 99 78 79 64 70 Z"
          fill={STROKE_DIM}
          fillOpacity="0.13"
          stroke={STROKE}
          strokeOpacity="0.6"
          strokeWidth="1.1"
        />
        <path
          d="M136 70 C154 80 158 108 146 128 C136 141 122 135 120 118 C118 99 122 79 136 70 Z"
          fill={STROKE_DIM}
          fillOpacity="0.13"
          stroke={STROKE}
          strokeOpacity="0.6"
          strokeWidth="1.1"
        />

        {/* Mediastinum / heart */}
        <path
          d="M100 104 C90 96 84 116 94 128 C97 131 103 131 106 128 C116 116 110 96 100 104 Z"
          fill={STROKE_DIM}
          fillOpacity="0.2"
          stroke={STROKE}
          strokeOpacity="0.55"
          strokeWidth="1"
        />

        {/* Vertebral body + spinal canal */}
        <ellipse cx="100" cy="144" rx="13" ry="10" fill="#0F172A" stroke={STROKE} strokeOpacity="0.7" strokeWidth="1.1" />
        <circle cx="100" cy="146" r="4" fill={STROKE} fillOpacity="0.35" />
        {/* Transverse processes */}
        <path d="M87 142 L76 137 M113 142 L124 137" stroke={STROKE} strokeOpacity="0.5" strokeWidth="1.1" strokeLinecap="round" />

        {/* Sternum */}
        <rect x="94" y="46" width="12" height="6" rx="3" fill={STROKE} fillOpacity="0.3" stroke={STROKE} strokeOpacity="0.5" strokeWidth="0.8" />

        {/* Ribs */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path
              d={`M${34 + i * 2} ${96 + i * 9} A ${66 - i * 2} ${52 - i * 2} 0 0 1 ${86 - i * 3} ${52 + i * 5}`}
              fill="none"
              stroke={STROKE}
              strokeOpacity={0.28 - i * 0.03}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d={`M${166 - i * 2} ${96 + i * 9} A ${66 - i * 2} ${52 - i * 2} 0 0 0 ${114 + i * 3} ${52 + i * 5}`}
              fill="none"
              stroke={STROKE}
              strokeOpacity={0.28 - i * 0.03}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Slice grid overlay */}
        {[...Array(9)].map((_, i) => (
          <line
            key={`h${i}`}
            x1="24"
            y1={48 + i * 13}
            x2="176"
            y2={48 + i * 13}
            stroke={STROKE_DIM}
            strokeOpacity="0.09"
            strokeWidth="0.5"
          />
        ))}

        {/* Acquisition sweep */}
        <g className="tele-sweep">
          <rect x="24" y="97" width="152" height="6" fill="url(#axial-sweep)" />
          <line x1="24" y1="100" x2="176" y2="100" stroke="#5EEAD4" strokeWidth="0.9" strokeOpacity="0.9" />
        </g>
      </g>

      {/* Corner reticles — the DICOM-viewer register */}
      {[
        [16, 16, 1, 1],
        [184, 16, -1, 1],
        [16, 184, 1, -1],
        [184, 184, -1, -1],
      ].map(([x, y, sx, sy], i) => (
        <path
          key={i}
          d={`M${x} ${y + 10 * sy} L${x} ${y} L${x + 10 * sx} ${y}`}
          fill="none"
          stroke={STROKE}
          strokeOpacity="0.4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* ── Per-modality artwork ────────────────────────────────────────────────── */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="1" y="1" width="62" height="62" rx="10" fill="#0F172A" stroke={STROKE_DIM} strokeOpacity="0.3" />
      {children}
    </>
  );
}

const MODALITY_ART: Record<string, { label: string; art: React.ReactNode }> = {
  /* Axial head CT */
  ct: {
    label: 'Axial CT cross-section illustration',
    art: (
      <>
        <ellipse cx="32" cy="32" rx="19" ry="21" fill={STROKE_DIM} fillOpacity="0.1" stroke={STROKE} strokeWidth="1.4" />
        <ellipse cx="32" cy="32" rx="15" ry="17" fill="none" stroke={STROKE} strokeOpacity="0.45" strokeWidth="0.9" />
        <path d="M32 15 L32 49" stroke={STROKE} strokeOpacity="0.5" strokeWidth="0.9" />
        <path d="M24 24 C20 30 21 38 26 43" fill="none" stroke={STROKE} strokeOpacity="0.6" strokeWidth="1" />
        <path d="M40 24 C44 30 43 38 38 43" fill="none" stroke={STROKE} strokeOpacity="0.6" strokeWidth="1" />
        <circle cx="32" cy="45" r="3" fill={STROKE} fillOpacity="0.3" />
      </>
    ),
  },
  /* Sagittal head MRI */
  mri: {
    label: 'Sagittal MRI head illustration',
    art: (
      <>
        <path
          d="M42 14 C50 20 51 34 45 42 L45 50 L26 50 C18 50 13 42 13 33 C13 22 21 13 32 13 C36 13 39 13 42 14 Z"
          fill={STROKE_DIM}
          fillOpacity="0.1"
          stroke={STROKE}
          strokeWidth="1.4"
        />
        <path d="M22 24 C28 20 36 22 38 28 C40 34 34 38 28 36 C23 34 21 29 22 24 Z" fill="none" stroke={STROKE} strokeOpacity="0.65" strokeWidth="1" />
        <path d="M27 41 L27 50" stroke={STROKE} strokeOpacity="0.5" strokeWidth="1" />
        {[0, 1, 2].map((i) => (
          <line key={i} x1="13" y1={22 + i * 9} x2="49" y2={22 + i * 9} stroke={STROKE_DIM} strokeOpacity="0.13" strokeWidth="0.5" />
        ))}
      </>
    ),
  },
  /* Chest radiograph */
  xray: {
    label: 'Chest X-ray illustration',
    art: (
      <>
        <rect x="32" y="14" width="2" height="34" rx="1" fill={STROKE} fillOpacity="0.55" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path d={`M31 ${20 + i * 7} C24 ${20 + i * 7} 17 ${25 + i * 7} 16 ${33 + i * 6}`} fill="none" stroke={STROKE} strokeOpacity={0.7 - i * 0.12} strokeWidth="1.5" strokeLinecap="round" />
            <path d={`M35 ${20 + i * 7} C42 ${20 + i * 7} 49 ${25 + i * 7} 50 ${33 + i * 6}`} fill="none" stroke={STROKE} strokeOpacity={0.7 - i * 0.12} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ))}
        <path d="M22 16 C26 13 30 13 32 15" fill="none" stroke={STROKE} strokeOpacity="0.4" strokeWidth="1.2" />
        <path d="M42 16 C38 13 34 13 32 15" fill="none" stroke={STROKE} strokeOpacity="0.4" strokeWidth="1.2" />
      </>
    ),
  },
  /* Ultrasound sector */
  us: {
    label: 'Ultrasound sector scan illustration',
    art: (
      <>
        <rect x="28" y="10" width="8" height="6" rx="2" fill={STROKE} fillOpacity="0.5" />
        <path d="M32 16 L52 50 L12 50 Z" fill={STROKE_DIM} fillOpacity="0.1" stroke={STROKE} strokeOpacity="0.7" strokeWidth="1.2" strokeLinejoin="round" />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${21 - i * 3} ${44 - i * 9} A ${13 + i * 8} ${13 + i * 8} 0 0 1 ${43 + i * 3} ${44 - i * 9}`}
            fill="none"
            stroke={STROKE}
            strokeOpacity={0.5 - i * 0.12}
            strokeWidth="1"
            transform="rotate(180 32 32)"
          />
        ))}
        <circle cx="30" cy="38" r="4" fill={STROKE} fillOpacity="0.28" />
      </>
    ),
  },
  /* Mammography — compression paddles */
  mammo: {
    label: 'Mammography illustration',
    art: (
      <>
        <rect x="12" y="20" width="40" height="3" rx="1.5" fill={STROKE} fillOpacity="0.5" />
        <rect x="12" y="42" width="40" height="3" rx="1.5" fill={STROKE} fillOpacity="0.5" />
        <path d="M50 24 C36 24 24 27 18 32 C24 37 36 41 50 41 Z" fill={STROKE_DIM} fillOpacity="0.13" stroke={STROKE} strokeOpacity="0.7" strokeWidth="1.2" />
        <circle cx="30" cy="32" r="2.5" fill={STROKE} fillOpacity="0.45" />
        <path d="M50 28 C42 29 36 30 33 32" fill="none" stroke={STROKE} strokeOpacity="0.3" strokeWidth="0.8" />
      </>
    ),
  },
  /* PET — uptake foci over a torso */
  pet: {
    label: 'PET uptake illustration',
    art: (
      <>
        <path d="M26 12 h12 v8 l8 6 v16 l-4 12 h-20 l-4 -12 v-16 l8 -6 Z" fill={STROKE_DIM} fillOpacity="0.09" stroke={STROKE} strokeOpacity="0.6" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="27" cy="30" r="5" fill={STROKE} fillOpacity="0.5" className="tele-node" />
        <circle cx="38" cy="40" r="3.5" fill={STROKE} fillOpacity="0.38" className="tele-node" />
        <circle cx="30" cy="44" r="2.5" fill={STROKE} fillOpacity="0.28" className="tele-node" />
      </>
    ),
  },
  /* CBCT — dental arch */
  cbct: {
    label: 'Cone-beam CT dental arch illustration',
    art: (
      <>
        <path d="M14 24 C14 42 22 50 32 50 C42 50 50 42 50 24" fill="none" stroke={STROKE} strokeOpacity="0.7" strokeWidth="1.4" />
        <path d="M19 26 C19 39 25 45 32 45 C39 45 45 39 45 26" fill="none" stroke={STROKE} strokeOpacity="0.35" strokeWidth="0.8" />
        {[
          [15, 27],
          [17, 35],
          [22, 42],
          [30, 46],
          [38, 45],
          [45, 40],
          [48, 32],
          [49, 25],
        ].map(([x, y], i) => (
          <rect key={i} x={x - 2} y={y - 2.5} width="4" height="5" rx="1.5" fill={STROKE} fillOpacity="0.45" />
        ))}
      </>
    ),
  },
  /* Special studies — stacked slices */
  special: {
    label: 'Stacked study slices illustration',
    art: (
      <>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 9})`}>
            <path d="M32 16 L50 25 L32 34 L14 25 Z" fill="#0F172A" stroke={STROKE} strokeOpacity={0.75 - i * 0.2} strokeWidth="1.2" strokeLinejoin="round" />
          </g>
        ))}
        <circle cx="32" cy="25" r="3" fill={STROKE} fillOpacity="0.4" />
      </>
    ),
  },
};

export function ModalityArt({ id, className = '' }: { id: string; className?: string }) {
  const entry = MODALITY_ART[id];
  if (!entry) return null;
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={entry.label}>
      <Frame>{entry.art}</Frame>
    </svg>
  );
}

/* ── PACS topology diagram ───────────────────────────────────────────────── */

/** Wide diagram: partner sites → encrypted transfer → cloud PACS → radiologists. */
export function PacsTopologyArt({ className = '' }: { className?: string }) {
  const node = (x: number, y: number, label: string, sub: string, i: number) => (
    <g key={label}>
      <rect x={x - 44} y={y - 20} width="88" height="40" rx="10" fill="#0F172A" stroke={STROKE} strokeOpacity="0.45" strokeWidth="1.2" />
      <circle cx={x} cy={y - 32} r="4" fill={STROKE} fillOpacity="0.5" className="tele-node" style={{ animationDelay: `${i * 0.4}s` }} />
      <text x={x} y={y - 2} textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">
        {label}
      </text>
      <text x={x} y={y + 11} textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontFamily="Inter, system-ui, sans-serif">
        {sub}
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 640 150"
      className={className}
      role="img"
      aria-label="Diagram: imaging sites push studies over encrypted DICOM transfer to a secure cloud PACS, which routes them to credentialed radiologists who return signed reports"
    >
      {/* Connectors — drawn on the white card, so they use the ink palette. */}
      <g stroke={INK} strokeOpacity="0.85" strokeWidth="1.6" fill="none">
        <line x1="114" y1="70" x2="186" y2="70" className="tele-dash" />
        <line x1="274" y1="70" x2="346" y2="70" className="tele-dash" />
        <line x1="434" y1="70" x2="506" y2="70" className="tele-dash" />
      </g>

      {/* Return path — signed report back to the referring clinician */}
      <path
        d="M550 92 C550 124 320 132 90 118 C86 117 82 112 82 106 L82 94"
        fill="none"
        stroke={INK_DIM}
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeDasharray="3 5"
      />
      <text x="320" y="140" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="Inter, system-ui, sans-serif">
        Signed report returned to referring clinician
      </text>
      <path d="M82 94 l-3.5 6 h7 Z" fill={INK_DIM} fillOpacity="0.8" transform="rotate(180 82 97)" />

      {node(70, 70, 'Imaging Site', 'Modality / PACS', 0)}
      {node(230, 70, 'Secure Transfer', 'Encrypted DICOM', 1)}
      {node(390, 70, 'Cloud PACS', 'Access controlled', 2)}
      {node(550, 70, 'Radiologist', 'Licensed, credentialed', 3)}
    </svg>
  );
}

/* ── Reading-room artwork ────────────────────────────────────────────────── */

/** Diagnostic workstation: dual reporting monitors with a worklist panel. */
export function ReadingRoomArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 220"
      className={className}
      role="img"
      aria-label="Illustration of a diagnostic reporting workstation with dual monitors showing a study and a prioritised worklist"
    >
      <defs>
        <linearGradient id="rr-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Ambient glow behind the desk */}
      <ellipse cx="210" cy="120" rx="170" ry="70" fill="#14B8A6" fillOpacity="0.08" />

      {/* ── Left monitor: the study ── */}
      <rect x="30" y="24" width="170" height="120" rx="8" fill="#020617" stroke={INK} strokeOpacity="0.8" strokeWidth="1.6" />
      <rect x="36" y="30" width="158" height="108" rx="5" fill="url(#rr-screen)" />

      {/* Axial slice on screen */}
      <ellipse cx="115" cy="84" rx="42" ry="34" fill="#0F172A" stroke={STROKE} strokeOpacity="0.75" strokeWidth="1.3" />
      <path d="M94 66 C84 72 82 89 89 100 C95 108 104 104 105 94 C106 82 103 71 94 66 Z" fill={STROKE_DIM} fillOpacity="0.14" stroke={STROKE} strokeOpacity="0.55" strokeWidth="0.9" />
      <path d="M136 66 C146 72 148 89 141 100 C135 108 126 104 125 94 C124 82 127 71 136 66 Z" fill={STROKE_DIM} fillOpacity="0.14" stroke={STROKE} strokeOpacity="0.55" strokeWidth="0.9" />
      <ellipse cx="115" cy="110" rx="8" ry="6" fill="#0F172A" stroke={STROKE} strokeOpacity="0.6" strokeWidth="0.9" />
      {/* Measurement caliper */}
      <g stroke="#F59E0B" strokeOpacity="0.75" strokeWidth="1">
        <line x1="96" y1="72" x2="112" y2="88" />
        <line x1="93" y1="72" x2="99" y2="72" />
        <line x1="109" y1="88" x2="115" y2="88" />
      </g>
      {/* Viewer HUD */}
      <text x="44" y="44" fill="#5EEAD4" fillOpacity="0.75" fontSize="7" fontFamily="'JetBrains Mono', ui-monospace, monospace">
        CT · AXIAL
      </text>
      <text x="44" y="132" fill="#94A3B8" fillOpacity="0.7" fontSize="6.5" fontFamily="'JetBrains Mono', ui-monospace, monospace">
        W 400 / L 40
      </text>
      <text x="186" y="132" textAnchor="end" fill="#94A3B8" fillOpacity="0.7" fontSize="6.5" fontFamily="'JetBrains Mono', ui-monospace, monospace">
        SL 3.0mm
      </text>

      {/* ── Right monitor: prioritised worklist ── */}
      <rect x="216" y="40" width="150" height="104" rx="8" fill="#020617" stroke={INK} strokeOpacity="0.8" strokeWidth="1.6" />
      <rect x="222" y="46" width="138" height="92" rx="5" fill="url(#rr-screen)" />
      <text x="230" y="60" fill="#5EEAD4" fillOpacity="0.8" fontSize="7" fontFamily="'JetBrains Mono', ui-monospace, monospace">
        WORKLIST
      </text>

      {[
        { y: 70, w: 108, tone: '#F59E0B', op: 0.9, tag: 'STAT' },
        { y: 84, w: 96, tone: STROKE, op: 0.55, tag: '' },
        { y: 98, w: 112, tone: STROKE, op: 0.4, tag: '' },
        { y: 112, w: 88, tone: STROKE, op: 0.3, tag: '' },
        { y: 126, w: 100, tone: STROKE, op: 0.22, tag: '' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="230" y={r.y} width="4" height="8" rx="2" fill={r.tone} fillOpacity={r.op} className={i === 0 ? 'tele-node' : undefined} />
          <rect x="240" y={r.y + 1.5} width={r.w} height="5" rx="2.5" fill={r.tone} fillOpacity={r.op * 0.45} />
        </g>
      ))}

      {/* Monitor stands + desk — on the white page, so ink palette. */}
      <path d="M108 144 l0 14 M96 158 h24" stroke={INK} strokeOpacity="0.75" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M291 144 l0 14 M279 158 h24" stroke={INK} strokeOpacity="0.75" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="40" y="162" width="340" height="4" rx="2" fill={INK} fillOpacity="0.55" />

      {/* Keyboard */}
      <rect x="150" y="172" width="80" height="12" rx="3" fill="#0F172A" stroke={INK} strokeOpacity="0.6" strokeWidth="1" />
      {[...Array(6)].map((_, i) => (
        <line key={i} x1={160 + i * 12} y1="175" x2={160 + i * 12} y2="181" stroke={STROKE} strokeOpacity="0.3" strokeWidth="1" />
      ))}
    </svg>
  );
}
