import type { ReactNode } from "react";

type Props = {
  /** Screen content (HTML). */
  children: ReactNode;
  /** Plain-language summary of what the screen shows, for screen readers. */
  label: string;
  className?: string;
};

/**
 * Flat HTML phone used by the hero (section 2) and "What happens instead" (section 4) so the two
 * phones are identical (CLAUDE.md §9.3). Not a clay render: a UI device frame. Width comes from
 * className; height follows the 9 : 19.5 screen ratio. Position it with className (relative/absolute).
 */
export function PhoneFrame({ children, label, className = "" }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`aspect-[9/19.5] rounded-[clamp(36px,4.2vw,52px)] bg-ink p-[clamp(6px,0.7vw,10px)] shadow-phone ${className}`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[clamp(30px,3.6vw,44px)] bg-paper" aria-hidden="true">
        {/* status bar */}
        <div className="flex items-center justify-between px-[9%] pt-[5.5%] pb-[3%] text-[clamp(10px,0.95vw,13px)] font-semibold tabular">
          <span>9:41</span>
          <span className="absolute top-[2.6%] left-1/2 h-[3.6%] w-[31%] -translate-x-1/2 rounded-pill bg-ink" />
          <svg viewBox="0 0 34 12" className="h-[0.85em] w-auto" fill="currentColor">
            <rect x="0" y="7" width="3" height="5" rx="1" />
            <rect x="5" y="4.5" width="3" height="7.5" rx="1" />
            <rect x="10" y="2" width="3" height="10" rx="1" />
            <rect x="18" y="1" width="14" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <rect x="20" y="3" width="10" height="6" rx="1.5" />
          </svg>
        </div>
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
