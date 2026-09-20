import type { Locale } from "../i18n";
import type { Content } from "./types";
import { fr } from "./fr";
import { en } from "./en";

const content: Record<Locale, Content> = { fr, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}
export type { Content };
