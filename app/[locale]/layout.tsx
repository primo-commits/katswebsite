import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import Motion from "@/components/Motion";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const fr = locale === "fr";
  return {
    title: fr
      ? "Conteneurs Katiana — conteneurs maritimes en Outaouais"
      : "Conteneurs Katiana — shipping containers in the Outaouais",
    description: fr
      ? "Vente, modification et livraison de conteneurs maritimes de 10 à 40 pieds, neufs et usagés. Gatineau, Outaouais et partout au Québec."
      : "Sales, modification and delivery of 10 to 40 ft shipping containers, new and used. Gatineau, the Outaouais and anywhere in Quebec.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale === "fr" ? "fr-CA" : "en-CA"}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">
          {locale === "fr" ? "Aller au contenu principal" : "Skip to main content"}
        </a>
        {children}
        <Motion />
      </body>
    </html>
  );
}

export type LocaleParam = { locale: Locale };
