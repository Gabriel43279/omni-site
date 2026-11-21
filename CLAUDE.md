# CLAUDE.md — Omni Pipeline AI website

Read this whole file before any work. These rules override your defaults.

## 1. The business (who the site sells to)

- **Omni Pipeline AI** sells an all-in-one AI lead capture system to established trade businesses
  (plumbers, roofers, electricians, builders/general contractors, home-service trades) at **£1,000/month**.
- Markets: UK first (British English, £, "tradespeople", "postcodes"), also US/Canada/Australia.
  Default copy is UK English unless told otherwise.
- The 7 services:
  1. Custom website build (fast, built to turn search/ad traffic into calls and quotes)
  2. Website chat + lead-capture widget (24/7, collects job details, books callbacks)
  3. Missed-call AI text back (texts missed callers within seconds)
  4. AI voice assistant (answers calls, qualifies trade/area/urgency/scope, books onto calendar)
  5. Omni-channel AI messaging (WhatsApp, SMS, Instagram DMs, Facebook Messenger in one place)
  6. AI review assistant (asks for 5-star reviews after completed jobs)
  7. CTR and search visibility optimisation (more people click the listing instead of a competitor)
- The pain: owners are on roofs and under sinks when calls come in; callers who don't get a fast
  answer ring the next firm; owners lose evenings replying and chasing reviews.
- Tone: direct, sharp, commercial, no fluff. Talk in jobs, percentages, pounds, hours saved.
  Never generic agency language ("unlock", "elevate", "seamless", "cutting-edge", "revolutionise").
- Good fit: established, steady inbound calls, capacity for more work, cares about ROI.
  Not a fit: brand-new/inactive sole traders, no capacity, bargain hunters.

## 2. The concept: "Lights on"

The page tells one story: a trade business that goes dark after hours, then lights up because every
call and message gets answered. Dark sections = the problem. Light sections = the result.
Headline: **"Every call answered. Every job booked."**

## 3. Page map (build in this order, one section per task)

| # | Section | Mode | One hero animation |
|---|---|---|---|
| 1 | Nav | Frosted glass | Pill bar shrinks slightly on scroll |
| 2 | Hero | Light | Clay town image; HTML job pins pop in; phone centre stage |
| 3 | The problem | Dark | Pinned frame sequence: building windows light up; service cards slide out |
| 4 | What happens instead | Light | New phone (identical to the hero phone) pins; messages type out on scroll |
| 5 | The 7 services | Lavender | Sticky canvas morph: phone → bubble → house → van → star |
| 6 | How it connects | Dark | 7 glass chips load, lines draw into pulsing "+ Your Business" pill |
| 7 | Websites we build | Dark | Columns of site screenshots drifting at different speeds |
| 8 | Results | Light | Giant "BOOKED"; pills float in front of and behind it; stats count up |
| 9 | ROI calculator | Light | Live number from sliders (missed calls/week × avg job value × % you'd win) |
| 10 | Who it's for | Light | None (rest beat) — simple fades only |
| 11 | Pricing + FAQ | Light | Price card lift; accordions |
| 12 | Final CTA | Dark → lit | Building returns; all windows light at once |
| — | Footer | Dark | None — plain, no animation |

## 4. Design tokens

```
--paper:    #F5F3EF   /* light backgrounds */
--ink:      #111111   /* dark backgrounds, text on light */
--lavender: #D9D3FF   /* services bg, chips */
--violet:   #8B7FFF   /* accents */
--lime:     #CFE36A   /* "booked" tags, success states */
--amber:    #F5B021   /* ONLY lit windows and the moment a call is answered */
```

- Font: General Sans or Satoshi (Fontshare), self-hosted. Headlines semibold, tight tracking,
  72–140px desktop. Body 17–18px / 1.5. Tabular figures for numbers.
- Radius: 28px cards, fully rounded pills and buttons.
- Section spacing ≥ 160px desktop. Content max-width 1200px; giant headlines may break out.

## 5. Motion rules

1. ONE hero animation per section. Everything else: a single 0.6s fade-and-rise.
2. Scroll-driven animations are scrubbed to scroll. Only the website grid and the
   "Your Business" pulse loop on their own.
3. One easing everywhere (e.g. `power3.out` / `cubic-bezier(0.22, 1, 0.36, 1)`).
4. Lenis smooth scroll, light settings (lerp ~0.1). Sync it with ScrollTrigger.
5. Frame sequences: WebP frames drawn to `<canvas>`, preloaded progressively. Never scrub a
   `<video>` by currentTime.
6. Mobile (< 768px): no pinned section longer than ~1 viewport; simplify or use stills.
7. `prefers-reduced-motion`: show final states / still images, no scrubbing.
8. Animate only transform and opacity (allowed exceptions: DrawSVG stroke drawing, accordion
   height, canvas redraws for frame sequences/morphs). Target 60fps. Use `gsap.matchMedia()` and `useGSAP`
   with proper cleanup.

## 6. Never do this (anti-slop rules)

- No purple-to-blue gradients, glowing orbs, sparkle "AI" icons, glassmorphism everywhere.
- No Inter, Roboto, Arial or system fonts. No emoji as icons.
- No generic 3-column "icon + title + text" feature-card grid.
- No stock photos. No 3D drawn in code to imitate the clay renders — use the assets provided.
- NEVER invent statistics, testimonials, client names or logos. Use `[REAL: description]`
  placeholders and list them for me at the end of each task.
- No text over busy imagery; all text must pass WCAG AA contrast.
- Don't add sections, features or animations that aren't in the page map without asking.

## 7. Tech

- Next.js (App Router) + TypeScript + Tailwind CSS.
- `gsap` (ScrollTrigger, SplitText, Flip, DrawSVG — all free in the public npm package) + `@gsap/react`.
- `lenis` for smooth scroll.
- Optional `@splinetool/react-spline` only if a Spline scene URL is provided; lazy-load it.
- Images: `next/image`, WebP/AVIF. Fonts: `next/font/local`.
- Use Context7 to check current docs for Next.js, GSAP and Lenis before writing code that uses them.

## 7b. Skills and tools: who does what

- **frontend-design**: the design skill for building. The look in sections 2–6 of this file is
  LOCKED. No skill may pick a new theme, palette or font.
- **Hallmark**: use ONLY when I ask for `hallmark audit`. Never use its default build mode or
  let it choose a theme for this project.
- **web-design-guidelines** (Vercel): final audit only, when I ask.
- **GSAP skills**: follow them for all animation code. GSAP is the ONLY animation library:
  no Motion/Framer Motion, no Anime.js, no Vanta, no shader-gradient backgrounds.
- **shadcn MCP**: only for plain building blocks (accordion, button, form inputs, dialog).
  Restyle everything to our tokens; no default shadcn look may remain.
- **React Bits**: at most 2 components on the whole site, and only if I approve each one.
- **Playwright MCP**: screenshots and visual checks after every section.

## 8. How to work

- Assets live in `/public/assets`. Inspiration screenshots live in `/reference` — look at them.
- Build ONE section per task. After each, run the **section-review** skill
  (.claude/skills/section-review). Don't show me a section until every score is 8/10 or higher,
  or you've done 3 fix rounds and explain what's still holding it back.
- Commit to git after each section I approve.
- If something in this file seems wrong, say so instead of silently ignoring it.

## 9. Decisions

1. **Section 3:** the frame sequence and the service cards sliding out are ONE choreographed
   scroll timeline, so together they count as one hero animation. Keep the cards sliding; it's
   the most important effect.
2. **Section 8:** the floating pills are the hero animation. The stats count up once, quickly,
   as a small detail.
3. **Section 4:** use a new phone that looks identical to the hero phone. Don't fly it across
   section 3.
4. **Colour roles:** lime is for "booked" tags and success states. Amber is ONLY for lit windows
   and the moment a call is answered.
5. **Rule 5.2 exception:** hero job pins popping in on page load are an allowed third exception.
6. **Fonts:** fetch General Sans from Fontshare when building, and self-host it via `next/font/local`.
7. **Git:** always commit and push to `main`.
8. **Images:** until the clay 3D renders exist, use placeholder boxes in the right shape and size
   wherever an image goes.
9. **ROI calculator:** three sliders: missed calls/week, average job value, and "% of those you'd
   win" (default 30%). Label the % clearly as an adjustable estimate, not a claim.
10. **Footer:** plain, no animation. Company details as `[REAL]` placeholders, phone number
    `[REAL: phone number]`, privacy policy link and a cookie notice.
11. **"Book a call"** opens a calendar booking page (Cal.com or Calendly): `[REAL: booking link]`.
12. **Sections 7 and 8** are built with placeholders. Before launch: real material, or hide them.
13. **3D asset spec** (for the 3D maker):

    | Asset | Spec |
    |---|---|
    | Hero clay town | 2880×1620 WebP still, clear area in the centre for the phone |
    | Problem building | ~100 frames 1920×1080 + ~40 portrait frames 1080×1350 (mobile); same camera; windows light one by one |
    | Services morph | phone → bubble → house → van → star, ~150 frames 1600×1600, lavender or transparent bg |
    | Final CTA building | 2 stills, same angle: all windows dark / all lit |
    | Website screenshots | 9–12 images, 1600×1200 |

    Services morph mapping: phone = voice assistant + missed-call text back; bubble = chat widget +
    omni-channel messaging; house = website; van = CTR/search visibility; star = reviews.
