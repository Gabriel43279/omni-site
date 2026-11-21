// Shared motion constants (CLAUDE.md §5). Same curve as --ease-brand in globals.css.
export const EASE = "power3.out";

/** The single fade-and-rise used for everything that isn't a section's hero animation. */
export const REVEAL = { duration: 0.6, y: 24 } as const;

/** gsap.matchMedia() conditions. Mobile is < 768px (CLAUDE.md §5.6). */
export const MEDIA = {
  desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
  motion: "(prefers-reduced-motion: no-preference)",
  reduced: "(prefers-reduced-motion: reduce)",
} as const;
