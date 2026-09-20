#!/usr/bin/env node
/**
 * Downloads stock photography for the hero showcase drum.
 *
 * Run this on YOUR machine, not in a Claude session — the sandbox's egress
 * policy blocks api.pexels.com and api.openverse.org outright.
 *
 *   node scripts/fetch-stock.mjs --key YOUR_PEXELS_KEY
 *
 * The key can also come from the PEXELS_API_KEY environment variable. Either
 * way it is never written to a file, so it cannot be committed by accident.
 *
 * Options:
 *   --source pexels|openverse   default pexels
 *   --per 4                     images per query
 *   --size large|medium|original
 *   --out public/images/showcase
 *
 * Writes the images plus lib/showcase.json, which the drum reads. Re-running
 * skips files already on disk, so it is safe to run again after adding queries.
 */

import { writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
};

const SOURCE = arg("source", "pexels");
const PER = Number(arg("per", 4));
const SIZE = arg("size", "large");
const OUT = arg("out", "public/images/showcase");
const MANIFEST = "lib/showcase.json";

/**
 * Queries aimed at repurposed containers, not shipping logistics. Generic
 * "shipping container" returns port and crane stock, which is the wrong story:
 * Katiana sells what a container BECOMES.
 */
const QUERIES = [
  "shipping container home",
  "container house exterior",
  "container office building",
  "container cafe",
  "container workshop interior",
  "container architecture",
  "modular container building",
  "container cabin forest",
  "shipping container yard",
  "container truck delivery",
];

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);

async function fromPexels(query, key) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=${PER}&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`Pexels ${res.status} ${res.statusText}`);
  const json = await res.json();
  return (json.photos ?? []).map((p) => ({
    id: `pexels-${p.id}`,
    url: p.src[SIZE] ?? p.src.large,
    alt: p.alt || query,
    credit: `${p.photographer} / Pexels`,
    creditUrl: p.url,
    license: "Pexels licence — no attribution required",
  }));
}

async function fromOpenverse(query) {
  /*
   * Restricted to CC0 and public domain on purpose. Openverse also serves
   * CC BY-SA, which forces an attribution block into the page footer — the
   * exact problem the client's previous site ended up with.
   */
  const url =
    `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}` +
    `&page_size=${PER}&license=cc0,pdm&mature=false`;
  const res = await fetch(url, { headers: { "User-Agent": "katswebsite/1.0" } });
  if (!res.ok) throw new Error(`Openverse ${res.status} ${res.statusText}`);
  const json = await res.json();
  return (json.results ?? []).map((r) => ({
    id: `ov-${r.id}`,
    url: r.url,
    alt: r.title || query,
    credit: r.creator ? `${r.creator} / Openverse` : "Openverse",
    creditUrl: r.foreign_landing_url,
    license: r.license?.toUpperCase() ?? "CC0",
  }));
}

async function main() {
  const key = arg("key", process.env.PEXELS_API_KEY);
  if (SOURCE === "pexels" && !key) {
    console.error("\nNo Pexels key given.\n");
    console.error("Run it like this, with your key after --key:\n");
    console.error("   node scripts/fetch-stock.mjs --key YOUR_KEY_HERE\n");
    console.error("Get a free key at https://www.pexels.com/api/\n");
    process.exit(1);
  }

  console.log(`\nFetching from ${SOURCE}: ${QUERIES.length} searches, up to ${PER} images each.\n`);

  await mkdir(OUT, { recursive: true });
  const existing = new Set(existsSync(OUT) ? await readdir(OUT) : []);

  const manifest = [];
  const seen = new Set();

  for (const query of QUERIES) {
    let items = [];
    try {
      items = SOURCE === "pexels" ? await fromPexels(query, key) : await fromOpenverse(query);
    } catch (err) {
      console.warn(`  ! "${query}" failed: ${err.message}`);
      continue;
    }

    for (const item of items) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);

      const file = `${slug(query)}-${item.id}.jpg`;
      const dest = path.join(OUT, file);

      if (existing.has(file)) {
        console.log(`  = ${file} (already present)`);
      } else {
        try {
          const res = await fetch(item.url);
          if (!res.ok) throw new Error(`${res.status}`);
          await writeFile(dest, Buffer.from(await res.arrayBuffer()));
          console.log(`  + ${file}`);
        } catch (err) {
          console.warn(`  ! download failed for ${file}: ${err.message}`);
          continue;
        }
      }

      manifest.push({
        src: `/${path.posix.join(...OUT.split(path.sep).slice(1), file)}`,
        alt: item.alt,
        credit: item.credit,
        creditUrl: item.creditUrl,
        license: item.license,
      });
    }
  }

  await mkdir(path.dirname(MANIFEST), { recursive: true });
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`\nDone. ${manifest.length} images in ${OUT}`);
  console.log(`Manifest written to ${MANIFEST}`);
  if (manifest.length === 0) {
    console.log("\nNothing downloaded. The key is probably wrong — check it at");
    console.log("https://www.pexels.com/api/ and try again.");
  } else if (manifest.length < 12) {
    console.log("\nThe drum looks best with 12 or more images.");
    console.log("Add more searches to the QUERIES list near the top of this file, then run it again.");
  } else {
    console.log("\nNext: npm run dev   then open http://localhost:3000");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
