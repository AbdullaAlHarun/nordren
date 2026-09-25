import Image from "next/image";
import { getDictionary } from "@/content";
import { Navigation } from "@/components/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

export function Footer({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale).shell;

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="brand-link" href={routes.home[locale]} aria-label={content.homeLabel}>
          <Image
            src="/brand/vasky-logo.png"
            alt="Vasky"
            width={1774}
            height={887}
            sizes="(min-width: 70rem) 128px, 112px"
            className="brand-logo"
          />
        </a>
        <Navigation locale={locale} page={page} placement="footer" />
      </div>
    </footer>
  );
}
