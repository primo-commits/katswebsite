import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { HERO_VIDEO, HERO_POSTER, ABOUT_IMAGES, CONVERTED, PEXELS } from "@/lib/media";
import ShowcaseDrum from "@/components/ShowcaseDrum";

const SHELL = "mx-auto w-full max-w-shell px-5 sm:px-8";

/** Use-case id -> the conversion photographs that actually show it. */
const CASE_IMAGES: Record<string, string[]> = {
  bureau: CONVERTED.office,
  chalet: CONVERTED.dwelling,
  kiosque: CONVERTED.kiosk,
  entreposage: CONVERTED.storage,
  modulaire: CONVERTED.modular,
  atelier: CONVERTED.workshop,
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);
  const other = locale === "fr" ? "en" : "fr";
  const fr = locale === "fr";

  return (
    <main id="main">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="bg-ground px-3 pt-3 sm:px-5 sm:pt-5">
        <section className="relative overflow-hidden rounded-xl bg-dark text-on-dark">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO}
            poster={HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
          <div aria-hidden className="absolute inset-0 bg-dark/70" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/80 via-black/40 to-black/25" />

          <div className="relative">
            {/* Light bar so the links can be black, large and pushed to the edges */}
            <header className="flex items-center gap-4 bg-ground px-5 py-5 sm:px-10">
              <nav className="hidden flex-1 items-center justify-start gap-8 md:flex lg:gap-14">
                <a href="#inventaire" className="text-[17px] font-medium text-ink hover:text-accent">{t.nav.inventory}</a>
                <a href="#applications" className="text-[17px] font-medium text-ink hover:text-accent">{t.nav.mods}</a>
              </nav>
              <Link href={`/${locale}`} className="shrink-0 font-display text-[19px] font-semibold tracking-tight text-ink sm:text-[22px]">
                Conteneurs Katiana
              </Link>
              <nav className="flex flex-1 items-center justify-end gap-8 lg:gap-14">
                <a href="#livraison" className="hidden text-[17px] font-medium text-ink hover:text-accent md:inline">{t.nav.delivery}</a>
                <a href="#faq" className="hidden text-[17px] font-medium text-ink hover:text-accent md:inline">{t.nav.faq}</a>
                <Link href={`/${other}`} className="font-mono text-[13px] uppercase tracking-widest text-muted hover:text-ink">
                  {other}
                </Link>
              </nav>
            </header>

            <div className="flex flex-col items-center gap-6 px-5 pb-2 pt-12 text-center sm:px-8 md:pt-16">
              <h1 data-split className="max-w-[16ch] font-display text-d-8xl font-light text-on-dark">
                {t.hero.title}
              </h1>
              <p data-animate="load-slide-up" className="max-w-[46ch] text-t-l text-on-dark/85">{t.hero.lede}</p>
              <div data-animate="load-slide-up" className="flex items-center gap-2">
                <a href="#inventaire" className="inline-flex min-h-[52px] items-center rounded-full bg-ground px-7 font-semibold text-ink">
                  {t.hero.ctaPrimary}
                </a>
                <a href="tel:8736825954" aria-label={t.hero.ctaSecondary}
                   className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-ground text-ink">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M3.375 14.625L14.625 3.375M14.625 11.8125V3.375H6.1875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <ShowcaseDrum label={fr ? "Réalisations en conteneurs" : "Completed container projects"} />
          </div>
        </section>
      </div>

      {/* ── ABOUT: claim left, photos centre, promise right ──── */}
      <section className="bg-ground">
        <div className={`${SHELL} grid gap-10 py-section lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-center`}>
          <div data-animate="inview-slide-up" className="flex flex-col gap-4">
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="font-display text-d-4xl font-light">{t.about.title}</h2>
            <div className="flex items-baseline gap-2.5">
              <b className="font-display text-d-3xl font-light text-accent">{t.about.statValue}</b>
              <span className="text-t-s text-muted">{t.about.statLabel}</span>
            </div>
          </div>

          <div data-animate="stagger-container" className="grid grid-cols-2 gap-3">
            {ABOUT_IMAGES.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={fr ? "Conteneur converti" : "Converted container"} loading="lazy"
                   data-animate="stagger-item"
                   className={`h-56 w-full rounded-l border border-line object-cover md:h-72 ${i === 1 ? "mt-8" : ""}`} />
            ))}
          </div>

          <p data-animate="inview-slide-up" className="text-t-m text-muted lg:border-l lg:border-line lg:pl-8">
            {t.about.body}
          </p>
        </div>
      </section>

      {/* ── INVENTORY ────────────────────────────────────────── */}
      <section id="inventaire" className="bg-panel">
        <div className={`${SHELL} py-section`}>
          <div className="mb-9 flex flex-col gap-3">
            <Eyebrow>{t.inventory.eyebrow}</Eyebrow>
            <h2 data-split className="font-display text-d-4xl font-light">{t.inventory.title}</h2>
            <span className="font-mono text-xs text-muted">{t.inventory.updated}</span>
          </div>
          <div data-animate="stagger-container" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.containers.map((c, i) => (
              <article key={c.id} data-animate="stagger-item" data-hover-trigger
                       className="flex flex-col gap-3 overflow-hidden rounded-l border border-line bg-ground p-card">
                <div className="overflow-hidden rounded-m border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img data-hover-target src={PEXELS[i % PEXELS.length]} alt={c.size} loading="lazy"
                       className="h-36 w-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-s px-2 py-1 font-mono text-[10.5px] tracking-wider ${c.isNew ? "bg-accent text-on-accent" : "bg-panel-2 text-muted"}`}>
                    {c.condition.toUpperCase()}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{c.size}</h3>
                </div>
                <div className="flex gap-6 border-y border-line py-3 font-mono text-[12.5px]">
                  <span className="flex flex-col gap-0.5"><em className="not-italic text-muted">{fr ? "Dimensions" : "Dimensions"}</em>{c.dimensions}</span>
                  <span className="flex flex-col gap-0.5 border-l border-line pl-6"><em className="not-italic text-muted">{fr ? "Disponibilité" : "Availability"}</em>{c.availability}</span>
                </div>
                <p className="flex-grow text-t-s text-muted">{c.blurb}</p>
                <a href="#contact" className="mt-1 inline-flex items-center gap-1.5 self-start border-b border-ink pb-0.5 text-sm font-semibold text-ink">
                  {t.inventory.cta}
                  <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M3.375 14.625L14.625 3.375M14.625 11.8125V3.375H6.1875" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS: alternating text / images ──────────── */}
      <section id="applications" className="bg-panel-2">
        <div className={`${SHELL} pt-section`}>
          <div className="mb-4 flex flex-col gap-3">
            <Eyebrow>{t.useCases.eyebrow}</Eyebrow>
            <h2 data-split className="font-display text-d-4xl font-light">{t.useCases.title}</h2>
          </div>
        </div>
        {t.useCases.items.map((u, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={u.id} className={i % 2 === 1 ? "bg-ground" : "bg-panel-2"}>
              <div className={`${SHELL} grid items-center gap-9 py-14 lg:grid-cols-2`}>
                <div data-animate="inview-slide-up" className={`flex flex-col gap-4 ${flip ? "lg:order-2" : ""}`}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.13em] text-accent-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-d-3xl font-light">{u.title}</h3>
                  <p className="text-t-m text-muted">{u.detail}</p>
                  <ul className="flex flex-wrap gap-2">
                    {u.fits.map((f) => (
                      <li key={f} className="rounded-s border border-line px-2.5 py-1 text-[13px] text-muted">{f}</li>
                    ))}
                  </ul>
                  <p className="font-mono text-[12.5px] text-ink">
                    <span className="text-muted">{fr ? "Formats : " : "Sizes: "}</span>{u.sizes}
                  </p>
                </div>
                <div data-animate="stagger-container" className={`grid gap-3 ${(CASE_IMAGES[u.id] ?? []).length > 1 ? "grid-cols-2" : "grid-cols-1"} ${flip ? "lg:order-1" : ""}`}>
                  {(CASE_IMAGES[u.id] ?? []).slice(0, 2).map((src, k) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={src} src={src} alt={u.title} loading="lazy" data-animate="stagger-item"
                         className={`h-52 w-full rounded-l border border-line object-cover md:h-64 ${k === 1 ? "mt-6" : ""}`} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── PROCESS (dark) ───────────────────────────────────── */}
      <section className="bg-dark text-on-dark">
        <div className={`${SHELL} py-section`}>
          <div className="mb-9 flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.13em] text-dark-muted">({t.steps.eyebrow})</span>
            <h2 data-split className="font-display text-d-4xl font-light text-on-dark">{t.steps.title}</h2>
          </div>
          <div data-animate="stagger-container" className="grid gap-4 md:grid-cols-3">
            {t.steps.items.map((s) => (
              <div key={s.n} data-animate="stagger-item" className="flex flex-col gap-2.5 rounded-l border border-white/12 bg-white/[0.04] p-card">
                <span className="font-mono text-xs tracking-[0.1em] text-dark-muted">{s.n}</span>
                <h3 className="font-display text-lg font-semibold text-on-dark">{s.title}</h3>
                <p className="text-t-s text-dark-muted">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY + TESTIMONIAL ───────────────────────────── */}
      <section id="livraison" className="bg-ground">
        <div className={`${SHELL} py-section`}>
          <div className="mb-9 flex flex-col gap-3">
            <Eyebrow>{t.delivery.eyebrow}</Eyebrow>
            <h2 data-split className="font-display text-d-4xl font-light">{t.delivery.title}</h2>
          </div>
          <div data-animate="stagger-container" className="grid gap-4 md:grid-cols-3">
            {[t.delivery.zones, t.delivery.elsewhere, t.delivery.requirements].map((text, i) => (
              <p key={i} data-animate="stagger-item" className="rounded-l border border-line bg-panel p-card text-t-s text-muted">{text}</p>
            ))}
          </div>
          <blockquote data-animate="scale-rotate" className="mt-12 rounded-xl border border-line bg-panel p-card">
            <p className="font-display text-d-3xl font-light leading-snug">“{t.testimonial.quote}”</p>
            <footer className="mt-5 flex flex-wrap items-center gap-3 text-t-s text-muted">
              <b className="text-ink">{t.testimonial.author}</b>
              <span>{t.testimonial.role}</span>
              <span className="font-mono text-accent-2">★★★★★ {t.testimonial.rating}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="bg-panel">
        <div className={`${SHELL} py-section`}>
          <div className="mb-9 flex flex-col gap-3">
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
            <h2 data-split className="font-display text-d-4xl font-light">{t.faq.title}</h2>
          </div>
          <div data-animate="stagger-container" className="flex flex-col gap-3">
            {t.faq.items.map((f) => (
              <details key={f.q} data-animate="stagger-item" className="rounded-l border border-line bg-ground p-card">
                <summary className="cursor-pointer list-none font-display text-[16.5px] font-semibold marker:content-none">{f.q}</summary>
                <p className="mt-3 text-t-s text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT + FOOTER (dark) ──────────────────────────── */}
      <section id="contact" className="bg-dark text-on-dark">
        <div className={`${SHELL} py-section`}>
          <div data-animate="inview-slide-up" className="flex flex-wrap items-center gap-8">
            <div className="flex min-w-[280px] flex-1 flex-col gap-3">
              <h2 className="font-display text-d-4xl font-light text-on-dark">{t.contact.title}</h2>
              <p className="text-t-m text-dark-muted">{t.contact.body}</p>
            </div>
            <a href="tel:8736825954" className="inline-flex min-h-[56px] items-center rounded-full bg-ground px-8 font-mono font-semibold text-ink">
              {t.contact.phone}
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 border-t border-white/12 pt-8 text-t-s text-dark-muted">
            <div className="mr-auto flex flex-col gap-1">
              {t.contact.hours.map((h) => <span key={h}>{h}</span>)}
            </div>
            <span>© 2026 Conteneurs Katiana</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span data-animate="fade" className="font-mono text-[11px] uppercase tracking-[0.13em] text-accent-2">
      ({children})
    </span>
  );
}
