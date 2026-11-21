// All site copy and every [REAL] placeholder live here, so they're easy to find and replace.
// CLAUDE.md §6: never invent stats, testimonials, client names or logos.

export const REAL = {
  /** Cal.com or Calendly booking page. */
  bookingLink: "#book-a-call", // [REAL: booking link]
} as const;

export const brand = {
  name: "Omni Pipeline",
  suffix: "AI",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: "Book a call",
  menuOpen: "Menu",
  menuClose: "Close",
} as const;
