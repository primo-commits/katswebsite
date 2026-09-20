"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SHOWCASE } from "@/lib/media";

type Shot = { src: string; alt: string };

/**
 * The rotating showcase drum.
 *
 * Cards are stacked at one point and pushed onto a cylinder with
 * `rotateY(i * step) translateZ(radius)`. The radius is derived from the card
 * width and the card count so the cards sit edge to edge:
 *
 *   radius = (cardWidth / 2) / tan(PI / count)
 *
 * With many cards the cylinder is wide and the visible arc is gentle — you see
 * roughly the front six and the rest curve away. Too few cards and the radius
 * collapses into a tight, obviously circular carousel, so the deck is padded by
 * repeating the available images up to MIN_CARDS.
 */
const MIN_CARDS = 16;
const CARD_W = { base: 132, md: 200 };
const CARD_H = { base: 130, md: 198 };

export default function ShowcaseDrum({ label }: { label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const shots: Shot[] = SHOWCASE.map((src, i) => ({ src, alt: `${label} ${i + 1}` }));

  // Pad out to MIN_CARDS so the cylinder keeps its wide radius.
  const cards: (Shot | null)[] =
    shots.length === 0
      ? Array.from({ length: MIN_CARDS }, () => null)
      : Array.from({ length: Math.max(MIN_CARDS, shots.length) }, (_, i) => shots[i % shots.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    const count = items.length;
    const step = 360 / count;

    const place = () => {
      const wide = window.matchMedia("(min-width: 768px)").matches;
      const w = wide ? CARD_W.md : CARD_W.base;
      const radius = w / 2 / Math.tan(Math.PI / count);
      items.forEach((el, i) => {
        el.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
      });
      /*
       * Push the whole drum back by its own radius. Without this the front
       * cards sit at +radius, which under a 1400px perspective puts them
       * ~320px from the camera and magnifies them more than four times — a
       * 200px card rendered ~880px wide. Offsetting by -radius lands the
       * front face at z=0, so it draws at its true size and the rest of the
       * cylinder falls away behind it.
       */
      gsap.set(track, { z: -radius });
    };

    place();
    window.addEventListener("resize", place);

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const spin = gsap.to(track, {
          rotateY: "+=360",
          duration: count * 3.2,
          ease: "none",
          repeat: -1,
        });
        return () => spin.kill();
      });
    }, track);

    return () => {
      window.removeEventListener("resize", place);
      ctx.revert();
    };
  }, [cards.length]);

  return (
    <div
      className="relative flex h-[240px] w-full items-center justify-center overflow-hidden md:h-[381px]"
      style={{ perspective: "1800px" }}
      aria-label={label}
      role="img"
    >
      <div
        ref={trackRef}
        className="relative h-[130px] w-[132px] md:h-[198px] md:w-[200px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {cards.map((shot, i) => (
          <div
            key={i}
            className="absolute inset-0 overflow-hidden rounded-l border border-white/15 bg-dark shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            {shot ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <Placeholder index={i} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Stands in until real photography lands — corrugation, not a grey box. */
function Placeholder({ index }: { index: number }) {
  const tones = ["#3a352d", "#433d33", "#4b4439", "#332e27", "#3f3931"];
  const bg = tones[index % tones.length];
  return (
    <div className="relative h-full w-full" style={{ background: bg }}>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(0,0,0,.35) 0 6px, rgba(255,255,255,.07) 6px 12px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-2">
        <span className="font-mono text-[9px] uppercase tracking-wider text-white/45">Photo</span>
      </div>
    </div>
  );
}
