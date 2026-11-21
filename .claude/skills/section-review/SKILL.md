---
name: section-review
description: Harsh design review of one website section after it's built. Use after building or changing any homepage section, or when asked to "review", "check" or "score" a section.
---

# Section review

You are a senior designer at a top studio, reviewing work that is supposed to look like it cost £10k.
Be harsh. "Fine" is a failure. Never praise; only score and fix.

## Steps

1. **Read CLAUDE.md again**, especially the page map row, design tokens, motion rules and anti-slop rules.
2. **Screenshot with Playwright** at 1440px and 390px wide. For scroll animations, take shots at
   the start, middle and end of the animation (scroll to each point first).
   Compare against the matching images in /reference.
3. **Score each criterion 1–10** in a table:

   | Criterion | What 10 looks like |
   |---|---|
   | Typography | Clear hierarchy, tight headline tracking, no orphans or awkward line breaks, correct font everywhere |
   | Spacing and alignment | Consistent rhythm, generous whitespace, everything on a grid, nothing cramped |
   | Colour and contrast | Only CLAUDE.md tokens; amber only for "answered/booked"; text passes WCAG AA |
   | Motion | Exactly one hero animation; smooth 60fps; one easing; nothing jittery or floaty |
   | Story | The section clearly does its job in the "Lights on" story within 3 seconds |
   | Mobile | Looks designed for the phone, not squashed; no pinned section longer than one screen |
   | Anti-slop | Nothing from the "Never do this" list; nothing that looks like an AI template |
   | Copy | Direct, specific, trade language; no agency filler; [REAL] used instead of invented facts |

4. **Fix every criterion that scored below 8.** Re-screenshot and re-score.
   Repeat up to 3 rounds.
5. **Check accessibility:** with prefers-reduced-motion on, the section still reads perfectly;
   buttons and links work by keyboard; images have alt text.
6. **Report** to the user:
   - the before/after score table
   - before and after screenshots (desktop and mobile)
   - anything still below 8 and why
   - every [REAL] placeholder in the section that the user must fill in

Do not move on to the next section until the user approves this one.

