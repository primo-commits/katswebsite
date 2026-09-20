# Conteneurs Katiana — site bilingue

Next.js 15 (App Router) · React 19 · Tailwind 3 · TypeScript · GSAP 3.15.

Bilingual FR/EN under `app/[locale]/`, French default. `middleware.ts` redirects
`/` to `/fr` (or `/en` on an English-only `Accept-Language`). Both locales
prerender as static HTML — keep it that way; local search is how this business
gets found.

## The business

Conteneurs Katiana sells, modifies and delivers shipping containers — 10 to 40 ft,
new (one-trip) and used — across the Outaouais, Ottawa and Quebec. Yard mods:
roll-up door, personnel door, windows, electrical, spray-foam insulation, paint.
Phone 873-682-5954. Mon–Fri 8–17, Sat 9–13. Payment on delivery.

All copy lives in `lib/content/fr.ts` and `lib/content/en.ts`, typed by
`lib/content/types.ts`. **Both files must change together** — a key added to one
and not the other is a type error, which is the point.

## Working agreement: never lose work

1. **Snapshot before edit.** A `PreToolUse` hook in `.claude/settings.json` runs
   `scripts/snapshot-file.sh` before any Edit/Write, copying the file to
   `.snapshots/<UTC timestamp>/`. Editing via shell (`sed`, heredocs) skips the
   hook — call the script by hand first. `.snapshots/` is gitignored: a local
   convenience, not durable storage.
2. **Commit every change, one change per commit.** Commits are the real version
   history. Never amend, rebase, force-push, `git reset --hard`, or `git checkout --`
   over uncommitted work. Recover with `git show <sha>:path`, never by deleting.
3. **Do NOT push unless asked.** Commit freely; hold pushes. An unpushed commit
   exists in one place only, so say when unpushed commits accumulate (more than
   ~3, or before a long pause). Check: `git log --oneline origin/<branch>..HEAD`.
4. **Never create versioned filenames** (`page-v2.tsx`, `page-final.tsx`).
   Next.js routes off filenames; stale duplicates hijack routes. Versions live in
   git and `.snapshots/`.

## Content status — this is a mockup

Real photography, real prices, more reviews and video do not exist yet. Every
placeholder is deliberate and labelled: prices render `[PRIX]` / `[PRICE]`,
images are marked stand-ins. **Never invent a price, a review, or a statistic** —
a plausible-looking fake number is worse than a visible gap, because it ships.

Stock imagery, when added, comes from Pexels / Unsplash / Pixabay (no attribution
required). Avoid Wikimedia CC BY-SA — the client's previous site was forced to
carry a photo-credits block because of it.

## Motion

`components/Motion.tsx` rebuilds the Safeer template's GSAP vocabulary — see
`reference/SAFEER-ANALYSE.md` for the full breakdown. Hooks are `data-animate`
attributes plus `data-split` for masked line reveals.

**Every animated element must be visible in the markup.** GSAP animates *from* a
runtime start state; nothing is parked at `opacity: 0` in the HTML. Reduced
motion is honored via `gsap.matchMedia` — under it, everything renders at rest.

## Design

**Terre** — one palette, matte and low-chroma, defined in `app/globals.css`.
Bone ground, paper cards, taupe secondary text, a slate blue for actions and a
matte brown for labels, with a warm charcoal for dark sections. Every pairing
is verified to WCAG AA; the values carry their ratios in comments.

The brief was earthy and mellow with nothing that vibrates — this sells steel
boxes, not software. **Do not introduce a saturated accent.** If something needs
emphasis, use weight, size or the charcoal, not chroma.

The palette is deliberately near-colourless because **photography carries the
colour**. That is the real lesson from the Safeer template: its stylesheet uses
white and black roughly 115 times and gold six times — the richness on screen
comes from its images, not its swatches.

Type: Sora (display), IBM Plex Sans (body), IBM Plex Mono (dimensions and specs).
Display headings follow Safeer's measured treatment — large, **weight 300**,
`-0.036em` tracking. Light type at size is the effect; do not bold it.

The `ui-ux-pro-max` skill bundle is in `.claude/skills/`. Query it before making
visual decisions, but note its palette data skews saturated and had no match for
this brief:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain style --stack nextjs
```

## Verify before committing

```bash
npm run build      # must pass — catches type errors and broken routes
npm run typecheck
```
