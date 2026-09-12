import { getDictionary } from "@/content";
import { Navigation } from "@/components/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

export function Footer({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale).shell;

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="wordmark" href={routes.home[locale]} aria-label={content.homeLabel}>
          Nordren
        </a>
        <Navigation locale={locale} page={page} placement="footer" />
      </div>
    </footer>
  );
}
