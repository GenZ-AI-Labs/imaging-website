/** Shared section header — matches the genomics vertical's eyebrow + h2 + sub rhythm. */
export function SectionHeading({
  eyebrow,
  heading,
  sub,
  accent,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
  /** Trailing fragment of the heading rendered in the brand gradient. */
  accent?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="eyebrow mb-5">{eyebrow}</div>
      <h2 className="h-display text-4xl md:text-5xl text-navy-900">
        {heading}
        {accent && (
          <>
            {' '}
            <span className="text-gradient">{accent}</span>
          </>
        )}
      </h2>
      {sub && <p className="mt-5 text-slate-600 leading-relaxed">{sub}</p>}
    </div>
  );
}
