"use client";

// Single place where GSAP and its plugins are registered (CLAUDE.md §7).
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import { EASE } from "./motion";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin);

// One easing everywhere (CLAUDE.md §5.3).
gsap.defaults({ ease: EASE });

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP };
