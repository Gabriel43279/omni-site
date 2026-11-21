"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, type ReactNode, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { MEDIA } from "@/lib/motion";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/**
 * Ref to the Lenis instance. `.current` is null when smooth scroll is off (reduced motion) or not
 * mounted yet, so read it inside effects/handlers, not during render.
 */
export function useLenisRef() {
  const ref = useContext(LenisContext);
  if (!ref) throw new Error("useLenisRef must be used inside <SmoothScroll>");
  return ref;
}

/**
 * Lenis smooth scroll, light settings, driven by GSAP's ticker so ScrollTrigger stays in sync
 * (CLAUDE.md §5.4). Not created at all when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia(MEDIA.reduced).matches) return;

    const lenis = new Lenis({ lerp: 0.1, autoRaf: false, anchors: { offset: -24 } });
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenisRef.current = lenis;

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
