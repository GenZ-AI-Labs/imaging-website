'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PANELS = [
  { name: 'Breast/Ovarian', tier: 'MODERATE', color: 'amber' },
  { name: 'Colorectal', tier: 'LOW', color: 'green' },
  { name: 'Prostate', tier: 'LOW', color: 'green' },
  { name: 'Pancreatic', tier: 'LOW', color: 'green' },
  { name: 'Thyroid/Endocrine', tier: 'HIGH', color: 'red' },
  { name: 'Kidney', tier: 'LOW', color: 'green' },
  { name: 'Melanoma', tier: 'LOW', color: 'green' },
  { name: 'Tumor Suppressors', tier: 'LOW', color: 'green' },
];

const tierStyle = (c: string) =>
  c === 'green'
    ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30'
    : c === 'amber'
    ? 'bg-amber-500/10 text-amber-700 border-amber-500/30'
    : 'bg-red-500/10 text-red-600 border-red-500/30';

export function GaugeDemo() {
  const [score, setScore] = useState(86);
  const angle = -90 + (score / 100) * 180;
  const arcColor = score > 70 ? '#10B981' : score > 40 ? '#F59E0B' : '#EF4444';
  const label = score > 70 ? 'FAVORABLE' : score > 40 ? 'MODERATE' : 'ELEVATED';

  return (
    <section className="py-28 relative">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-5">Live Demo</div>
          <h2 className="h-display text-4xl md:text-5xl text-navy-900">
            See how the <span className="text-gradient">Risk Gauge</span> works.
          </h2>
          <p className="mt-5 text-slate-600">
            Drag the slider to simulate a genomic risk score. This is the same gauge used at the top of every
            Radiogenomes AI report.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Gauge */}
          <div className="glass rounded-3xl p-10 relative">
            <div className="relative w-full max-w-sm mx-auto aspect-[2/1]">
              <svg viewBox="0 0 200 110" className="w-full h-full" role="img" aria-label={`Genomic risk score gauge showing ${score} out of 100, rated ${label}`}>
                {/* Background arc */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  stroke="#1E293B"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Filled arc */}
                <motion.path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  stroke={arcColor}
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                  pathLength={1}
                  initial={false}
                  animate={{ strokeDashoffset: 1 - score / 100 }}
                  style={{
                    strokeDasharray: 1,
                    filter: `drop-shadow(0 0 8px ${arcColor})`,
                  }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                />
                {/* Needle */}
                <motion.line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="30"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ transformOrigin: '100px 100px' }}
                  animate={{ rotate: angle }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                />
                <circle cx="100" cy="100" r="6" fill="#14B8A6" />
              </svg>
              <div className="text-center -mt-4">
                <motion.div
                  key={score}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="font-mono text-6xl font-bold text-navy-900"
                >
                  {score}
                </motion.div>
                <div
                  className="mt-1 text-xs uppercase tracking-widest font-semibold"
                  style={{ color: arcColor }}
                >
                  {label}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="risk-slider" className="sr-only">Adjust risk score</label>
              <input
                id="risk-slider"
                type="range"
                min={0}
                max={100}
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={score}
                aria-valuetext={`${score} - ${label}`}
                className="w-full accent-teal-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Panels */}
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-600 mb-4">
              Risk Scorecards · 8 Panels
            </div>
            <div className="grid grid-cols-2 gap-3">
              {PANELS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-4 flex items-center justify-between"
                >
                  <span className="text-sm text-navy-900 font-medium">{p.name}</span>
                  <span
                    className={`text-[10px] font-bold tracking-wider px-2 py-1 rounded border ${tierStyle(
                      p.color
                    )}`}
                    role="status"
                    aria-label={`${p.name} risk: ${p.tier}`}
                  >
                    {p.tier}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
