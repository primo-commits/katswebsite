# katswebsite — Conteneurs Katiana

Bilingual (FR/EN) marketing site for Conteneurs Katiana: shipping container
sales, modification and delivery in the Outaouais and Quebec.

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /fr
npm run build
```

## Layout

```
app/[locale]/        FR/EN routes; [locale]/layout.tsx is the root layout
lib/content/         all copy, fr.ts + en.ts, typed by types.ts
components/Motion.tsx GSAP scroll/hover/headline animation engine
reference/           Safeer template source + analysis of its motion system
scripts/             pre-edit snapshot helper (wired as a Claude Code hook)
```

Read **`CLAUDE.md`** for the working agreement and content rules, and
**`reference/SAFEER-ANALYSE.md`** for how the animation system was derived.

## Status

Mockup. Prices show `[PRIX]` / `[PRICE]` and imagery is placeholder — real
photos, prices, reviews and video are still outstanding from the client.
