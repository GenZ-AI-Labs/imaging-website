import { Info } from 'lucide-react';

/**
 * Regulatory / compliance copy is rendered exclusively through this component
 * so legal can review every such string in isolation. Do not inline
 * regulatory text into section components.
 *
 * variant="inline"  — small-print line inside a section
 * variant="banded"  — bordered callout, used where AI capability is described
 */
export function ComplianceNote({
  children,
  variant = 'inline',
}: {
  children: React.ReactNode;
  variant?: 'inline' | 'banded';
}) {
  if (variant === 'banded') {
    return (
      <div
        data-compliance
        className="mt-10 mx-auto max-w-3xl rounded-2xl border border-amber-400/25 bg-amber-400/[0.04] px-5 py-4 flex items-start gap-3"
      >
        <Info size={15} className="text-amber-600/80 mt-0.5 shrink-0" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-slate-600">{children}</p>
      </div>
    );
  }

  return (
    <p data-compliance className="text-xs leading-relaxed text-slate-500">
      {children}
    </p>
  );
}
