type Props = {
  /** What will go here, e.g. "Hero clay town". Shown on the box and used as alt text later. */
  label: string;
  /** CSS aspect ratio, e.g. "16 / 9". */
  ratio: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Stand-in for a clay 3D render or screenshot that doesn't exist yet (CLAUDE.md §9.8).
 * Final shape and size, so swapping in the real image is a one-line change.
 */
export function Placeholder({ label, ratio, tone = "light", className = "" }: Props) {
  const toneClass =
    tone === "dark" ? "bg-white/[0.04] text-paper/70 ring-white/10" : "bg-ink/[0.04] text-ink/70 ring-ink/10";

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`grid place-items-center rounded-card ring-1 ring-inset ${toneClass} ${className}`}
    >
      <span className="px-6 text-center text-small">
        [REAL: {label} · {ratio.replace(/\s/g, "")}]
      </span>
    </div>
  );
}
