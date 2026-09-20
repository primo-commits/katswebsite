import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const OUT = "/home/user/katswebsite/public/images/showcase";
const COUNT = 18;

const CAPTIONS_FR = [
  "Conteneur 20 pieds livré sur terrain", "Bureau de chantier en conteneur",
  "Conteneur 40 pieds, porte roll-up", "Atelier aménagé en conteneur",
  "Conteneur modifié avec fenêtres", "Conteneur d'entreposage verrouillable",
  "Deux conteneurs assemblés", "Conteneur 40 pieds High Cube",
  "Conteneur peint aux couleurs du client", "Conteneur avec porte piétonne",
  "Conteneur de chantier isolé", "Conteneur 20 pieds neuf",
  "Conteneur usagé inspecté", "Kiosque en conteneur",
  "Conteneur pour garage", "Conteneur en cour avant livraison",
  "Conteneur modulaire", "Conteneur prêt à livrer",
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--use-gl=swiftshader", "--enable-unsafe-swiftshader", "--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 900, height: 675 }, deviceScaleFactor: 1 });

const manifest = [];
for (let i = 0; i < COUNT; i++) {
  await page.goto(`http://localhost:8777/render.html?i=${i}`, { waitUntil: "load" });
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 20000 });
  const file = `container-${String(i + 1).padStart(2, "0")}.jpg`;
  await page.screenshot({ path: `${OUT}/${file}`, type: "jpeg", quality: 82 });
  manifest.push({
    src: `/images/showcase/${file}`,
    alt: CAPTIONS_FR[i % CAPTIONS_FR.length],
    credit: "Rendu 3D — Conteneurs Katiana",
    license: "Generated for this project",
  });
  process.stdout.write(`  + ${file}\n`);
}

await browser.close();
await writeFile("/home/user/katswebsite/lib/showcase.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${manifest.length} renders written to ${OUT}`);
