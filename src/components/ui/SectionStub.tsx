// TEMPORARY: marks where each not-yet-built section goes, so the nav can be checked over
// light, lavender and dark backgrounds. Each stub is replaced by its real section component.
type Mode = "light" | "dark" | "lavender";

const modes: Record<Mode, string> = {
  light: "bg-paper text-ink/60",
  dark: "bg-ink text-paper/60",
  lavender: "bg-lavender text-ink/60",
};

export function SectionStub({ id, n, name, mode }: { id?: string; n: number; name: string; mode: Mode }) {
  return (
    <section id={id} className={`grid min-h-svh place-items-center ${modes[mode]}`}>
      <p className="text-small">
        {String(n).padStart(2, "0")} · {name} — not built yet
      </p>
    </section>
  );
}
