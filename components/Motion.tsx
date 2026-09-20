"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Safeer's animation vocabulary, rebuilt.
 *
 * The original bakes `opacity: 0` into its markup, so its headlines are
 * invisible if JS fails. Here every target is visible in the HTML and GSAP
 * animates *from* a start state it sets at runtime — same effect, but the
 * text still renders for crawlers and on a failed script load.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion: leave everything at its natural, visible state.
      mm.add("(prefers-reduced-motion: reduce)", () => {});

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const splits: SplitText[] = [];

        // Masked line-by-line headline reveals — Safeer's signature move.
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const split = new SplitText(el, {
            type: "lines",
            linesClass: "split-line",
            mask: "lines",
            autoSplit: true,
          });
          splits.push(split);
          gsap.from(split.lines, {
            yPercent: 115,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          });
        });

        // On-load hero sequence.
        gsap.from("[data-animate='load-slide-up']", {
          y: 34, opacity: 0, duration: 0.85, ease: "power3.out", stagger: 0.08,
        });

        // The workhorse: slide up as it enters view.
        gsap.utils.toArray<HTMLElement>("[data-animate='inview-slide-up']").forEach((el) => {
          gsap.from(el, {
            y: 40, opacity: 0, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        // Staggered children inside a container.
        gsap.utils.toArray<HTMLElement>("[data-animate='stagger-container']").forEach((box) => {
          const items = box.querySelectorAll("[data-animate='stagger-item']");
          if (!items.length) return;
          gsap.from(items, {
            y: 30, opacity: 0, scale: 0.98, duration: 0.6, ease: "back.out(1.4)",
            stagger: { each: 0.08, grid: "auto", from: "start" },
            scrollTrigger: { trigger: box, start: "top 84%", once: true },
          });
        });

        // One-off feature moments.
        gsap.utils.toArray<HTMLElement>("[data-animate='slide-scale']").forEach((el) => {
          gsap.from(el, {
            scale: 0.92, opacity: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-animate='scale-rotate']").forEach((el) => {
          gsap.from(el, {
            scale: 0.9, rotate: -4, opacity: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-animate='fade']").forEach((el) => {
          gsap.from(el, {
            opacity: 0, duration: 0.8, ease: "none",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        // Linked hover: hovering the trigger scales a *different* element.
        gsap.utils.toArray<HTMLElement>("[data-hover-trigger]").forEach((trigger) => {
          const target = trigger.querySelector<HTMLElement>("[data-hover-target]");
          if (!target) return;
          const enter = () => gsap.to(target, { scale: 1.06, duration: 0.5, ease: "power2.out" });
          const leave = () => gsap.to(target, { scale: 1, duration: 0.6, ease: "power2.out" });
          trigger.addEventListener("pointerenter", enter);
          trigger.addEventListener("pointerleave", leave);
          return () => {
            trigger.removeEventListener("pointerenter", enter);
            trigger.removeEventListener("pointerleave", leave);
          };
        });

        return () => splits.forEach((s) => s.revert());
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
