import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-shell px-5 sm:px-8";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);
  const other = locale === "fr" ? "en" : "fr";

  return (
    <>
      <header className="border-b border-line">
        <div className={`${SHELL} flex min-h-[74px] flex-wrap items-center gap-4`}>
          <Link href={`/${locale}`} className="mr-auto flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-[15px] font-bold text-on-accent">
              K
            </span>
            <b className="font-display text-[17px] font-bold tracking-tight">Conteneurs Katiana</b>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#inventaire" className="text-[14.5px] font-medium text-muted hover:text-ink">{t.nav.inventory}</a>
            <a href="#modifications" className="text-[14.5px] font-medium text-muted hover:text-ink">{t.nav.mods}</a>
            <a href="#livraison" className="text-[14.5px] font-medium text-muted hover:text-ink">{t.nav.delivery}</a>
            <a href="#faq" className="text-[14.5px] font-medium text-muted hover:text-ink">{t.nav.faq}</a>
          </nav>
          <Link href={`/${other}`} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink">
            {other}
          </Link>
          <a href="tel:8736825954" className="inline-flex min-h-[46px] items-center rounded-lg bg-accent px-5 font-mono text-[15px] font-semibold text-on-accent">
            {t.contact.phone}
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className={`${SHELL} grid items-center gap-11 py-14 lg:grid-cols-2 lg:py-20`}>
          <div className="flex flex-col items-start gap-6">
            <span data-animate="load-slide-up" className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.13em] text-accent">
              {t.hero.eyebrow}
            </span>
            <h1 data-split className="font-display text-[clamp(34px,5vw,58px)] font-bold leading-[1.02] tracking-[-0.035em]">
              {t.hero.title}
            </h1>
            <p data-animate="load-slide-up" className="max-w-[46ch] text-lg leading-relaxed text-muted">
              {t.hero.lede}
            </p>
            <div data-animate="load-slide-up" className="flex flex-wrap gap-3">
              <a href="#inventaire" className="inline-flex min-h-[52px] items-center rounded-lg bg-accent px-6 font-semibold text-on-accent">
                {t.hero.ctaPrimary}
              </a>
              <a href="tel:8736825954" className="inline-flex min-h-[52px] items-center rounded-lg border border-line px-6 font-semibold text-ink">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div data-animate="slide-scale" className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="absolute inset-0 grid place-items-center p-6">
              <div className="relative h-1/2 w-[78%] overflow-hidden rounded border border-line bg-panel-2">
                <div className="absolute inset-0 opacity-70 [background:repeating-linear-gradient(90deg,transparent_0_9px,var(--line)_9px_10px)]" />
              </div>
            </div>
            <span className="absolute bottom-3 left-3 rounded-md border border-line bg-ground px-2.5 py-1.5 font-mono text-[11px] text-muted">
              {locale === "fr" ? "Photo — conteneur 20 pi" : "Photo — 20 ft container"}
            </span>
          </div>
        </section>

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
        <section className={`${SHELL} py-16`}>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h2 data-split className="font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-tight tracking-[-0.03em]">
              {t.about.title}
            </h2>
            <div data-animate="inview-slide-up" className="flex flex-col gap-3">
              <p className="text-[15.5px] leading-relaxed text-muted">{t.about.body}</p>
              <div className="flex items-baseline gap-2.5">
                <b className="font-display text-3xl font-bold text-accent">{t.about.statValue}</b>
                <span className="text-sm text-muted">{t.about.statLabel}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory */}
        <section id="inventaire" className={`${SHELL} py-16`}>
          <Eyebrow>{t.inventory.eyebrow}</Eyebrow>
          <div className="mb-7 mt-4 flex flex-wrap items-baseline gap-4">
            <h2 data-animate="inview-slide-up" className="font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.03em]">
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
                className="flex flex-col gap-3 overflow-hidden rounded-xl border border-line bg-panel p-5"
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
                <p className="flex-grow text-[14.5px] leading-relaxed text-muted">{c.blurb}</p>
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
        <section className={`${SHELL} py-16`}>
          <Eyebrow>{t.useCases.eyebrow}</Eyebrow>
          <h2 data-split className="mb-7 mt-4 font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.03em]">
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
                  <p className="text-sm leading-relaxed text-muted">{u.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modifications */}
        <section id="modifications" className={`${SHELL} py-16`}>
          <Eyebrow>{t.mods.eyebrow}</Eyebrow>
          <h2 data-animate="inview-slide-up" className="mb-7 mt-4 font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.03em]">
            {t.mods.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.mods.items.map((m) => (
              <div key={m.id} data-animate="stagger-item" className="flex flex-col gap-2 rounded-xl border border-line bg-panel p-5">
                <h3 className="font-display text-[17px] font-semibold">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{m.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className={`${SHELL} py-16`}>
          <Eyebrow>{t.steps.eyebrow}</Eyebrow>
          <h2 data-animate="inview-slide-up" className="mb-7 mt-4 font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.03em]">
            {t.steps.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 md:grid-cols-3">
            {t.steps.items.map((s) => (
              <div key={s.n} data-animate="stagger-item" className="flex flex-col gap-2.5 rounded-xl border border-line bg-panel p-6">
                <span className="font-mono text-xs tracking-[0.1em] text-accent">{s.n}</span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery */}
        <section id="livraison" className={`${SHELL} py-16`}>
          <Eyebrow>{t.delivery.eyebrow}</Eyebrow>
          <h2 data-animate="inview-slide-up" className="mb-7 mt-4 font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.03em]">
            {t.delivery.title}
          </h2>
          <div data-animate="stagger-container" className="grid gap-4 md:grid-cols-3">
            {[t.delivery.zones, t.delivery.elsewhere, t.delivery.requirements].map((text, i) => (
              <p key={i} data-animate="stagger-item" className="rounded-xl border border-line bg-panel p-5 text-[14.5px] leading-relaxed text-muted">
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className={`${SHELL} py-16`}>
          <Eyebrow>{t.testimonial.eyebrow}</Eyebrow>
          <blockquote data-animate="scale-rotate" className="mt-4 rounded-2xl border border-line bg-panel p-8">
            <p className="font-display text-[clamp(20px,2.6vw,28px)] font-semibold leading-snug tracking-[-0.02em]">
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
        <section id="faq" className={`${SHELL} py-16`}>
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 data-split className="mb-7 mt-4 font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.03em]">
            {t.faq.title}
          </h2>
          <div data-animate="stagger-container" className="flex flex-col gap-3">
            {t.faq.items.map((f) => (
              <details key={f.q} data-animate="stagger-item" className="group rounded-xl border border-line bg-panel p-5">
                <summary className="cursor-pointer list-none font-display text-[16.5px] font-semibold marker:content-none">
                  {f.q}
                </summary>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${SHELL} pb-20`}>
          <div data-animate="inview-slide-up" className="flex flex-wrap items-center gap-7 rounded-2xl border border-line bg-panel p-8">
            <div className="flex min-w-[280px] flex-1 flex-col gap-2">
              <h2 className="font-display text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.03em]">{t.contact.title}</h2>
              <p className="text-[15.5px] leading-relaxed text-muted">{t.contact.body}</p>
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
