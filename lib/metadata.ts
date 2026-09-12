import type { Metadata } from "next";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

function getSiteUrl(): URL | undefined {
  const value = process.env.SITE_URL;
  if (!value) return undefined;

  const url = new URL(value);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username || url.password ||
    url.pathname !== "/" || url.search || url.hash
  ) {
    throw new Error("SITE_URL must be an HTTP(S) origin without credentials, a path, query, or fragment.");
  }
  return url;
}

export function getPageMetadata(page: PageId, locale: Locale): Metadata {
  const { title, description } = getDictionary(locale).pages[page];
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    // Placeholder content is not ready for search indexing.
    robots: { index: false, follow: true },
    // Never let Next.js infer localhost or a preview host as the canonical domain.
    ...(siteUrl ? {
      metadataBase: siteUrl,
      alternates: {
        canonical: new URL(routes[page][locale], siteUrl).href,
        languages: {
          nb: new URL(routes[page].nb, siteUrl).href,
          en: new URL(routes[page].en, siteUrl).href,
        },
      },
    } : {}),
  };
}
