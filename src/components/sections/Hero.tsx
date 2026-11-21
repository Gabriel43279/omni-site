"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MEDIA, REVEAL } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { hero, REAL } from "@/content/copy";

/**
 * Section 2 — Hero (light).
 * Hero animation: HTML job pins pop in on page load (CLAUDE.md §9.5 exception to rule 5.2).
 * Mobile/tablet: 2 pins, placed so they never cover the phone screen; desktop: 3, wide desktop: 5.
 * Everything else: one 0.6s fade-and-rise.
 */

// Where each pin sits on the town, as % of the stage, per layout:
// mobile (2 pins, above/below the phone) · md 4:3 stage (2 pins) · lg 16:9 stage (3 pins) · xl (5 pins).
const PIN_POSITIONS = [
  "left-[3%] top-[9%] md:top-[11%] lg:left-[5%] lg:top-[16%]",
  "right-[3%] bottom-[3%] md:bottom-[7%] lg:right-auto lg:bottom-auto lg:left-[12%] lg:top-[62%]",
  "hidden lg:flex lg:right-[5%] lg:top-[18%]",
  "hidden xl:flex xl:right-[11%] xl:top-[64%]",
  "hidden xl:flex xl:left-[15%] xl:top-[39%]",
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MEDIA.motion, () => {
        const tl = gsap.timeline({ delay: 0.15 });
        tl.fromTo(
          "[data-hero-text]",
          { opacity: 0, y: REVEAL.y },
          { opacity: 1, y: 0, duration: REVEAL.duration, stagger: 0.08 },
        )
          .fromTo(
            "[data-hero-stage]",
            { opacity: 0, y: REVEAL.y * 1.5 },
            { opacity: 1, y: 0, duration: REVEAL.duration },
            "-=0.45",
          )
          // The hero animation: pins pop in, one after another.
          .fromTo(
            "[data-pin]",
            { opacity: 0, scale: 0.6, y: 14 },
            { opacity: 1, scale: 1, y: 0, duration: REVEAL.duration, stagger: 0.12 },
            "-=0.15",
          );
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const p = hero.phone;

  return (
    <section ref={root} aria-labelledby="hero-title" className="relative overflow-x-clip pt-28 pb-24 md:pt-36 md:pb-section">
      <div className="mx-auto max-w-content px-5 text-center md:px-6">
        <h1 id="hero-title" className="text-display" data-hero-text data-load-reveal>
          {hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-5 max-w-[36rem] text-ink/70 md:mt-7" data-hero-text data-load-reveal>
          {hero.sub}
        </p>
        <div
          className="mt-8 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row md:mt-9"
          data-hero-text
          data-load-reveal
        >
          <Button href={REAL.bookingLink} size="lg" className="w-full min-[420px]:w-auto">
            {hero.primary}
          </Button>
          <Button href={hero.secondary.href} size="lg" variant="outline" className="w-full min-[420px]:w-auto">
            {hero.secondary.label}
          </Button>
        </div>
      </div>

      {/* Stage: clay town + phone + job pins */}
      <div className="relative mx-auto mt-12 max-w-[1440px] px-3 md:mt-14 md:px-6" data-hero-stage data-load-reveal>
        <div className="relative">
          <Placeholder label={hero.town.label} spec={hero.town.spec} className="aspect-[5/9] w-full min-[390px]:aspect-[2/3] md:aspect-[4/3] lg:aspect-video" />

          <PhoneFrame
            label={p.label}
            className="absolute top-[17%] left-1/2 w-[172px] -translate-x-1/2 min-[390px]:top-[20%] md:top-[13%] md:w-[190px] lg:top-[9%] lg:w-[clamp(210px,20vw,290px)]"
          >
            <div className="flex flex-1 flex-col gap-[6%] px-[6%] pt-[4%] pb-[6%] text-[clamp(10.5px,1.2vw,16px)] leading-snug">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="size-2 rounded-pill bg-amber" />
                  {p.answered}
                </span>
                <span className="text-ink/65 tabular">{p.time}</span>
              </div>

              <div className="rounded-[18px] bg-white p-[7%] shadow-card">
                <dl className="grid gap-[0.55em]">
                  {p.details.map((d) => (
                    <div key={d.k} className="grid grid-cols-[4.6em_1fr] gap-2">
                      <dt className="text-ink/60">{d.k}</dt>
                      <dd className="font-medium">{d.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="ml-[10%] rounded-[18px] rounded-br-[6px] bg-lavender p-[6%]">
                <p>{p.textBack}</p>
              </div>

              <div className="mt-auto rounded-[18px] bg-ink p-[7%] text-paper">
                <span className="inline-block rounded-pill bg-lime px-[0.7em] py-[0.15em] text-[0.9em] font-semibold text-ink">
                  {p.booked}
                </span>
                <p className="mt-[0.6em] font-medium tabular">{p.slot}</p>
              </div>
            </div>
          </PhoneFrame>

          <ul aria-label="Example jobs booked">
            {hero.pins.map((pin, i) => (
              <li
                key={pin.job}
                data-pin
                data-load-reveal
                className={`absolute z-10 flex origin-bottom items-center gap-2.5 rounded-pill bg-paper py-1.5 pr-4 pl-1.5 shadow-pill lg:gap-3 lg:py-2 lg:pr-5 lg:pl-2 ${PIN_POSITIONS[i]}`}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-pill bg-lime lg:size-9" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="size-3.5 lg:size-4" fill="none">
                    <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-[0.8125rem] font-semibold whitespace-nowrap lg:text-small">
                    {pin.job} · {pin.area}
                  </span>
                  <span className="block text-[0.75rem] whitespace-nowrap text-ink/65 tabular lg:text-[0.8125rem]">
                    Booked · {pin.when}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
