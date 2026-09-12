import type { Locale } from "@/lib/i18n/locales";
import { en } from "./en";
import { nb } from "./nb";
import type { Dictionary } from "./types";

const dictionaries = { nb, en } satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
