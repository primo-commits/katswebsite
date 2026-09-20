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
