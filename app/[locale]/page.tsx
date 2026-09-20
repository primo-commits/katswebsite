import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import ShowcaseDrum from "@/components/ShowcaseDrum";

const SHELL = "mx-auto w-full max-w-shell px-5 sm:px-8";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);
  const other = locale === "fr" ? "en" : "fr";

  return (
    <>
      <main id="main">
      <div className="px-3 pt-3 sm:px-5 sm:pt-5">
        <section className="relative overflow-hidden rounded-xl bg-dark text-on-dark">
          {/* Placeholder ground until a real yard photo exists. */}
          <div aria-hidden className="absolute inset-0 bg-dark" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{ background: "repeating-linear-gradient(90deg, #fff 0 2px, transparent 2px 14px)" }}
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 to-transparent" />

          <div className="relative">
            <header className="flex flex-wrap items-center gap-4 px-5 py-5 sm:px-8">
              <Link href={`/${locale}`} className="font-display text-[17px] font-semibold tracking-tight text-on-dark md:hidden">
                Conteneurs Katiana
              </Link>
              <nav className="hidden flex-1 items-center justify-start gap-7 md:flex">
                <a href="#inventaire" className="text-t-s font-medium text-on-dark/75 hover:text-on-dark">{t.nav.inventory}</a>
                <a href="#modifications" className="text-t-s font-medium text-on-dark/75 hover:text-on-dark">{t.nav.mods}</a>
              </nav>
              <Link
                href={`/${locale}`}
                className="hidden shrink-0 rounded-b-xl bg-ground px-6 py-3 font-display text-[15px] font-semibold tracking-tight text-ink md:-mt-5 md:block"
              >
                Conteneurs Katiana
              </Link>
              <nav className="hidden flex-1 items-center justify-end gap-7 md:flex">
                <a href="#livraison" className="text-t-s font-medium text-on-dark/75 hover:text-on-dark">{t.nav.delivery}</a>
                <a href="#faq" className="text-t-s font-medium text-on-dark/75 hover:text-on-dark">{t.nav.faq}</a>
              </nav>
              <Link href={`/${other}`} className="ml-auto font-mono text-xs uppercase tracking-widest text-on-dark/70 hover:text-on-dark md:ml-0">
                {other}
              </Link>
            </header>

            <div className="flex flex-col items-center gap-6 px-5 pb-2 pt-10 text-center sm:px-8 md:pt-16">
              <h1 data-split className="max-w-[16ch] font-display text-d-8xl font-light text-on-dark">
                {t.hero.title}
              </h1>
              <p data-animate="load-slide-up" className="max-w-[46ch] text-t-l text-on-dark/80">
                {t.hero.lede}
              </p>
              <div data-animate="load-slide-up" className="flex items-center gap-2">
                <a href="#inventaire" className="inline-flex min-h-[52px] items-center rounded-full bg-ground px-7 font-semibold text-ink">
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="tel:8736825954"
                  aria-label={t.hero.ctaSecondary}
                  className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-ground text-ink"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M3.375 14.625L14.625 3.375M14.625 11.8125V3.375H6.1875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <ShowcaseDrum label={locale === "fr" ? "Réalisations en conteneurs" : "Completed container projects"} />
          </div>
        </section>
      </div>

        {/* Spec strip */}
        <div data-animate="stagger-container" className="grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4">
          {["10 pi · 10 × 8 × 8,5", "20 pi · 20 × 8 × 8,5", "40 pi · 40 × 8 × 8,5", "40 HC · 40 × 8 × 9,5"].map((s) => {
            const [size, dim] = s.split(" · ");
            return (
              <div key={s} data-animate="stagger-item" className="flex flex-col gap-1 bg-ground px-5 py-6">
                <b className="font-display text-[25px] font-bold tracking-tight">{size}</b>
                <span className="font-mono text-[12.5px] text-muted">{dim}</span>
              </div>
            );
          })}
        </div>

        {/* About */}
        <section className={`${SHELL} py-section`}>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h2 data-split className="font-display text-d-4xl font-light">
              {t.about.title}
            </h2>
            <div data-animate="inview-slide-up" className="flex flex-col gap-3">
              <p className="text-t-m text-muted">{t.about.body}</p>
              <div className="flex items-baseline gap-2.5">
                <b className="font-display text-3xl font-bold text-accent">{t.about.statValue}</b>
                <span className="text-sm text-muted">{t.about.statLabel}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory */}
        <section id="inventaire" className={`${SHELL} py-section`}>
          <Eyebrow>{t.inventory.eyebrow}</Eyebrow>
          <div className="mb-7 mt-4 flex flex-wrap items-baseline gap-4">
            <h2 data-animate="inview-slide-up" className="font-display text-d-4xl font-light">
              {t.inventory.title}
            </h2>
            <span className="font-mono text-xs text-muted">{t.inventory.updated}</span>
          </div>
          <div data-animate="stagger-container" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.containers.map((c) => (
              <article
                key={c.id}
                data-animate="stagger-item"
                data-hover-trigger
                className="flex flex-col gap-3 overflow-hidden rounded-l border border-line bg-panel p-card"
              >
                <div data-hover-target className="grid h-32 place-items-center rounded-lg border border-line bg-panel-2">
                  <span className="font-mono text-[11px] text-muted">Photo — {c.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded px-2 py-1 font-mono text-[10.5px] tracking-wider ${c.isNew ? "bg-accent text-on-accent" : "bg-panel-2 text-muted"}`}>
                    {c.condition.toUpperCase()}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{c.size}</h3>
                </div>
                <div className="rounded-lg bg-panel-2 px-3 py-2 font-mono text-[13px]">{c.dimensions}</div>
                <p className="flex-grow text-t-s text-muted">{c.blurb}</p>
                <div className="flex items-baseline gap-1.5">
                  <b className="font-display text-xl font-bold text-accent">{t.inventory.priceTba}</b>
                  <span className="text-[13px] text-muted">{t.inventory.perDelivery}</span>
                </div>
                <a href="#contact" className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-line bg-panel-2 text-sm font-semibold text-ink">
                  {t.inventory.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className={`${SHELL} py-section`}>
          <Eyebrow>{t.useCases.eyebrow}</Eyebrow>
          <h2 data-split className="mb-7 mt-4 font-display text-d-4xl font-light">
            {t.useCases.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.useCases.items.map((u) => (
              <div key={u.id} data-animate="stagger-item" data-hover-trigger className="overflow-hidden rounded-xl border border-line bg-panel">
                <div data-hover-target className="grid h-36 place-items-center border-b border-line bg-panel-2">
                  <span className="font-mono text-[11px] text-muted">Photo — {u.title}</span>
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-display text-[17px] font-semibold">{u.title}</h3>
                  <p className="text-t-s text-muted">{u.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modifications */}
        <section id="modifications" className={`${SHELL} py-section`}>
          <Eyebrow>{t.mods.eyebrow}</Eyebrow>
          <h2 data-animate="inview-slide-up" className="mb-7 mt-4 font-display text-d-4xl font-light">
            {t.mods.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.mods.items.map((m) => (
              <div key={m.id} data-animate="stagger-item" className="flex flex-col gap-2 rounded-l border border-line bg-panel p-card">
                <h3 className="font-display text-[17px] font-semibold">{m.title}</h3>
                <p className="text-t-s text-muted">{m.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className={`${SHELL} py-section`}>
          <Eyebrow>{t.steps.eyebrow}</Eyebrow>
          <h2 data-animate="inview-slide-up" className="mb-7 mt-4 font-display text-d-4xl font-light">
            {t.steps.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 md:grid-cols-3">
            {t.steps.items.map((s) => (
              <div key={s.n} data-animate="stagger-item" className="flex flex-col gap-2.5 rounded-l border border-line bg-panel p-card">
                <span className="font-mono text-xs tracking-[0.1em] text-accent">{s.n}</span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="text-t-s text-muted">{s.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery */}
        <section id="livraison" className={`${SHELL} py-section`}>
          <Eyebrow>{t.delivery.eyebrow}</Eyebrow>
          <h2 data-animate="inview-slide-up" className="mb-7 mt-4 font-display text-d-4xl font-light">
            {t.delivery.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 md:grid-cols-3">
            {[t.delivery.zones, t.delivery.elsewhere, t.delivery.requirements].map((text, i) => (
              <p key={i} data-animate="stagger-item" className="rounded-l border border-line bg-panel p-card text-[14.5px] leading-relaxed text-muted">
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className={`${SHELL} py-section`}>
          <Eyebrow>{t.testimonial.eyebrow}</Eyebrow>
          <blockquote data-animate="scale-rotate" className="mt-4 rounded-xl border border-line bg-panel p-card">
            <p className="font-display text-d-3xl font-light">
              “{t.testimonial.quote}”
            </p>
            <footer className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted">
              <b className="text-ink">{t.testimonial.author}</b>
              <span>{t.testimonial.role}</span>
              <span className="font-mono text-accent">★★★★★ {t.testimonial.rating}</span>
            </footer>
          </blockquote>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${SHELL} py-section`}>
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 data-split className="mb-7 mt-4 font-display text-d-4xl font-light">
            {t.faq.title}
          </h2>
          <div data-animate="stagger-container" className="flex flex-col gap-3">
            {t.faq.items.map((f) => (
              <details key={f.q} data-animate="stagger-item" className="group rounded-l border border-line bg-panel p-card">
                <summary className="cursor-pointer list-none font-display text-[16.5px] font-semibold marker:content-none">
                  {f.q}
                </summary>
                <p className="mt-3 text-t-s text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${SHELL} pb-20`}>
          <div data-animate="inview-slide-up" className="flex flex-wrap items-center gap-7 rounded-xl border border-line bg-panel p-card">
            <div className="flex min-w-[280px] flex-1 flex-col gap-2">
              <h2 className="font-display text-d-3xl font-normal">{t.contact.title}</h2>
              <p className="text-t-m text-muted">{t.contact.body}</p>
            </div>
            <a href="tel:8736825954" className="inline-flex min-h-[54px] items-center rounded-lg bg-accent px-7 font-semibold text-on-accent">
              {t.contact.phone}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className={`${SHELL} flex flex-wrap gap-5 py-8 text-sm text-muted`}>
          <div className="mr-auto flex flex-col gap-1">
            {t.contact.hours.map((h) => <span key={h}>{h}</span>)}
          </div>
          <span>© 2026 Conteneurs Katiana</span>
        </div>
      </footer>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span data-animate="fade" className="font-mono text-[11px] uppercase tracking-[0.13em] text-accent">
      ({children})
    </span>
  );
}
