import { getDictionary } from "@/content";
import { SiteShell } from "@/components/site-shell";
import type { Locale } from "@/lib/i18n/locales";
import type { PageId } from "@/lib/i18n/routes";

export function FoundationPage({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale);

  return (
    <SiteShell locale={locale} page={page}>
      <div className="placeholder-content">
        <h1>{content.pages[page].heading}</h1>
        <p>{content.placeholder}</p>
      </div>
    </SiteShell>
  );
}
