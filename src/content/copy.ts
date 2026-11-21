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

export const hero = {
  headline: ["Every call answered.", "Every job booked."],
  sub: "While you're on the tools, Omni Pipeline answers your calls, texts and chats, qualifies the job and books it into your calendar. 24/7.",
  primary: "Book a call",
  secondary: { label: "See how it works", href: "#how-it-works" },
  town: { label: "Hero clay town", spec: "2880×1620, clear centre for the phone" },
  /** Illustrative job pins on the town. Example jobs, not client data. */
  pins: [
    { job: "Boiler repair", area: "Leeds LS6", when: "Tue 08:00" },
    { job: "Roof leak", area: "Manchester M14", when: "Today 16:30" },
    { job: "Consumer unit swap", area: "Bristol BS3", when: "Thu 10:00" },
    { job: "Kitchen refit quote", area: "Leicester LE2", when: "Fri 13:00" },
    { job: "Blocked drain", area: "Croydon CR0", when: "Today 18:15" },
  ],
  /** What the hero phone screen shows: an after-hours call, answered and booked. */
  phone: {
    label:
      "Phone screen: a call at 19:42 answered by the AI assistant. Job: burst pipe under the kitchen sink in Leeds LS6, urgent. The caller gets a confirmation text. Booked for tomorrow at 07:30.",
    answered: "Call answered",
    time: "19:42",
    details: [
      { k: "Job", v: "Burst pipe" },
      { k: "Area", v: "Leeds LS6" },
      { k: "Urgency", v: "Urgent" },
      { k: "Scope", v: "Under sink" },
    ],
    textBack: "Booked in for 07:30 tomorrow. Reply to change.",
    booked: "Booked",
    slot: "Tomorrow 07:30",
  },
} as const;
