# Safeer template — what we took, what we didn't

Source: `reference/safeer-template.html`, saved from `safeertemplate.webflow.io`
(HTML only — the stylesheet and 58 images did not come with the save).

Safeer is a **travel/tour booking** template by Weabers. None of its content
applies to a container business; it is reference for **structure and motion only**.

## How its animations actually work

Not Webflow interactions — the file contains **zero `data-w-id`**. Every
animation is hand-written GSAP loaded from external scripts:

- `gsap.min.js`
- `ScrollTrigger.min.js`
- `SplitText.min.js`
- `CustomEase.min.js`

That matters: it means the effects are reproducible in any framework. GSAP 3.13+
is fully free, SplitText included, so there is no licence cost.

## The animation vocabulary, by frequency

| `data-animate` value | Uses | Effect |
|---|---|---|
| `inview-slide-up` | 20 | scroll reveal, slides up on enter |
| `stagger-item` | 13 | staggered children within a container |
| `slideup-item` (+ `-container`) | 7 | grouped slide-ups |
| `load-text-stagger` | 1 | hero text stagger on page load |
| `load-slide-up` | 1 | hero element slide-up on load |
| `inview-text-stagger` | 1 | text stagger on scroll |
| `slide-scale` | 1 | slide combined with scale |
| `scale-rotate` | 1 | scale with slight rotation |
| `fade` | 1 | plain opacity fade |

Plus `gsap_split_line1` / `gsap_split_line2` wrappers for **masked
line-by-line headline reveals** (SplitText), and four
`data-hover-trigger` → `data-hover-target="scale-up"` pairs, where hovering
one element scales a different one.

Section order: `hero → about → our-tour → explore-trip → brand-video →
testimonial → faq → footer`. Type is Lato throughout. Testimonials use a
Webflow slider; the brand video is a Vimeo embed.

## The one thing we deliberately did NOT copy

Safeer's saved markup carries `opacity: 0` inline on every split-line div —
GSAP's start state, baked into the HTML. If the script fails or is slow, the
headlines are **invisible**, to readers and crawlers alike.

Our rebuild (`components/Motion.tsx`) keeps every target visible in the markup
and animates *from* a runtime start state. Same effect, but the text survives a
failed script load. For a site whose customers arrive from local search, that
is not a detail.

## Mapping to Conteneurs Katiana

| Safeer | Katiana |
|---|---|
| Tour cards (type, meeting point, `$65/person`) | Container cards (size, condition, dimensions, price) |
| Explore Trip (4 destinations) | Use cases (site office, workshop, cabin, storage) |
| Brand video | Yard / delivery footage — not yet filmed |
| Testimonials (5) | One real review so far |
| Gallery + Blog | Réalisations photos — not yet shot |

## Licensing

Safeer is a commercial Webflow template. Structure, layout patterns and
interaction ideas are not protectable and are reused freely here. Its assets,
copy and complete visual identity are not reused. If the delivered site ends up
closely reproducing Safeer's look, buying the template licence is the clean and
inexpensive way to settle the question.

---

# The stylesheet: Safeer's actual design system

Measured from `safeertemplate.webflow.shared.766df1dbf.min.css` (112 KB).

## Palette — CORRECTED

An earlier revision of this file claimed Safeer's palette was "warm near-black
with gold and orange accents" and warned it collided with the FeeSlayers
identity. **That was wrong**, and the error is instructive: it read the
variable *definitions* without checking how often each is actually referenced.

Measured usage across the 112 KB stylesheet:

| Token | Uses |
|---|---|
| `white` | 38 as a variable, 77 raw |
| `black` | 10 as a variable, 61 raw |
| `dark-900` | 9 |
| `off-white` | 5 |
| **`gold`** | **4** |
| **`orange`** | **2** |
| `warm-gray` | 1 |
| `neutral`, `soft-white`, `snow`, `blush` | **0 — defined, never used** |

**Safeer is a white-and-black site.** Gold and orange appear six times in
total; they are trim on buttons, not a scheme. All the colour a visitor sees
comes from the photography.

That is the lesson worth copying, and it is why the Katiana palette is
near-colourless: let the images carry the colour.

Webflow exports every variable a designer ever defined, used or not. Never
read a token list as a palette without counting references.

## The defined tokens, for the record

```
--deep-black  #08070c      --gold       #febd1a
--dark-900    #0f0a01      --orange     #fa9200
--slate       #1a202c      --warm-gray  #a69d8c
--neutral     #f7f7f7      --blush      #eddddd
--off-white   #f8f8f8      --gray-500   #5a5a5a
--soft-white  #fafafa      --gray-400   #c4c4c4
```

Safeer is a **warm near-black ground with gold and orange accents** over warm
off-whites. That is the same family as the FeeSlayers identity in the
`webdevfsusa` repo (navy `#0D1B2A`, gold `#C8922A`, cream `#F5F0E8`,
rust `#B85C38`), which this client explicitly ruled out for Katiana.

**We therefore take Safeer's structure, proportions and motion, and keep the
cool Katiana palette.** See `app/globals.css`.

## Type scale (four breakpoints, reproduced as clamp ranges)

| Step | Desktop | 991px | 767px | 479px |
|---|---|---|---|---|
| `text-8xl` | 90px | 80px | 56px | 40px |
| `text-7xl` | 60px | 48px | — | 34px |
| `text-6xl` | 56px | 46px | — | 32px |
| `text-5xl` | 48px | 40px | — | 30px |
| `text-4xl` | 40px | 34px | — | 28px |
| `text-3xl` | 32px | 26px | — | 24px |
| `text-2xl` | 24px | 22px | — | — |
| `text-l` | 18px | 17px | — | — |
| `text-m` / `text-s` | 16px / 14px | | | |

Line heights `1.13 / 1.25 / 1.33 / 1.5`. Letter spacing `-0.036em` for display,
`-0.006em` for large body. Weights `300 / 400 / 500 / 600 / 700`.

**The key craft detail:** `.display-heading` is `text-8xl` at
**font-weight 300** with `-0.036em` tracking — 90px of *light* type, not bold.
That restraint at scale is most of why the template reads expensive. We use the
same treatment.

## Rhythm

- Containers: `1280px` / `1065px` / `52rem`
- Section padding: `8rem` desktop, stepping `7 → 6 → 4.5rem`
- Card padding: `1.5rem → 1rem → 0.75rem`
- Radii: `0.25 / 0.5 / 0.75 / 1rem`, plus `999px`
- Breakpoints: `479 / 767 / 991 / 1280`
- Hero: `700px` tall, top padding `180 → 106 → 92px`

## Fonts

Display is **Saprona** — a commercial typeface, not on Google Fonts, and not
licensed to us. Body is **Lato** (free). We substitute Sora for the display
role: geometric, similar proportions, and it holds up at weight 300.
