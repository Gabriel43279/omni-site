type Props = {
  /** What will go here, e.g. "Hero clay town". Shown on the box. */
  label: string;
  /** Size note shown after the label, e.g. "2880×1620". */
  spec?: string;
  /** CSS aspect ratio, e.g. "16 / 9". Omit to size it with className (e.g. responsive aspect-*). */
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Stand-in for a clay 3D render or screenshot that doesn't exist yet (CLAUDE.md §9.8).
 * Final shape and size, so swapping in the real image is a one-line change.
 */
export function Placeholder({ label, spec, ratio, tone = "light", className = "" }: Props) {
  const toneClass =
    tone === "dark" ? "bg-white/[0.04] text-paper/70 ring-white/10" : "bg-ink/[0.04] text-ink/70 ring-ink/10";

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      className={`grid place-items-start rounded-card ring-1 ring-inset ${toneClass} ${className}`}
    >
      <span className="p-6 text-small md:p-8">
        [REAL: {label}
        {spec ? <span className="max-md:hidden"> · {spec}</span> : null}]
      </span>
    </div>
  );
}
