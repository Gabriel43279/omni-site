"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MEDIA } from "@/lib/motion";
import { useLenisRef } from "@/providers/SmoothScroll";
import { Button } from "@/components/ui/Button";
import { brand, nav, REAL } from "@/content/copy";

/**
 * Section 1 — Nav. Frosted pill bar.
 * Hero animation: the pill shrinks slightly as you start scrolling, scrubbed to scroll.
 */
export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const lenisRef = useLenisRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MEDIA.motion, () => {
        gsap.to(pillRef.current, {
          scale: 0.94,
          y: -6,
          ease: "none", // scrubbed: the scroll itself is the easing (Lenis)
          force3D: false, // keep text crisp while scaled
          scrollTrigger: { start: 0, end: 240, scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: headerRef },
  );

  const openMenu = useCallback(() => {
    dialogRef.current?.showModal();
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Freeze smooth scroll while the menu sheet is open.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenisRef]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-2 pt-2 min-[360px]:px-3 min-[360px]:pt-3 md:px-6 md:pt-5">
      <div
        ref={pillRef}
        className="mx-auto grid h-16 max-w-content origin-top grid-cols-[1fr_auto] items-center gap-2 rounded-pill border border-ink/[0.07] bg-paper/95 px-2.5 py-2.5 shadow-pill backdrop-blur-xl backdrop-saturate-150 md:h-[4.5rem] lg:grid-cols-[1fr_auto_1fr]"
      >
        <a
          href="#top"
          className="justify-self-start rounded-pill px-2 text-[0.9375rem] font-semibold min-[360px]:px-2.5 min-[360px]:text-[1rem] tracking-[-0.025em] whitespace-nowrap min-[380px]:px-3.5 min-[380px]:text-[1.125rem] md:px-4.5 md:text-[1.25rem]"
        >
          {brand.name}
          <span className="ml-1 text-ink/65 max-[359px]:sr-only">{brand.suffix}</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-pill px-4 py-2.5 text-small font-medium whitespace-nowrap text-ink/80 transition-[background-color,color] duration-300 ease-brand hover:bg-ink/6 hover:text-ink active:bg-ink/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 justify-self-end">
          <Button href={REAL.bookingLink} className="h-11 px-3.5 max-[359px]:text-[0.875rem] min-[380px]:px-5 md:h-[3.25rem] md:px-6">
            {nav.cta}
          </Button>
          <button
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="site-menu"
            className="grid size-11 place-items-center rounded-pill bg-ink/6 transition-colors duration-300 ease-brand hover:bg-ink/10 active:bg-ink/15 md:size-[3.25rem] lg:hidden"
          >
            <span className="sr-only">{nav.menuOpen}</span>
            <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
              <path d="M1 1h16M1 9h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu sheet. Native <dialog>: focus trap, Esc to close, inert background. */}
      <dialog
        ref={dialogRef}
        id="site-menu"
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink opacity-0 transition-opacity duration-300 ease-brand backdrop:bg-transparent open:opacity-100 starting:open:opacity-0"
      >
        <div className="flex h-full flex-col px-6 pt-6 pb-10">
          <div className="flex items-center justify-between">
            <span className="text-[1.125rem] font-semibold tracking-[-0.025em]">
              {brand.name}
              <span className="ml-1 text-ink/65">{brand.suffix}</span>
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="grid size-11 place-items-center rounded-pill bg-ink/6 transition-colors duration-300 ease-brand hover:bg-ink/10 active:bg-ink/15"
            >
              <span className="sr-only">{nav.menuClose}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Main" className="mt-16">
            <ul className="flex flex-col gap-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-[12px] py-1 text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.035em] transition-opacity duration-300 ease-brand active:opacity-60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button href={REAL.bookingLink} size="lg" onClick={closeMenu} className="mt-auto w-full">
            {nav.cta}
          </Button>
        </div>
      </dialog>
    </header>
  );
}
