import { getDictionary } from "@/content";
import { ButtonLink } from "@/components/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Navigation } from "@/components/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

export function Header({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale).shell;
  const quoteLink = (
    <ButtonLink href={routes.quote[locale]} aria-current={page === "quote" ? "page" : undefined}>
      {content.navigation.quote}
    </ButtonLink>
  );

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          <a className="wordmark" href={routes.home[locale]} aria-label={content.homeLabel}>
            Nordren
          </a>
          <div className="desktop-navigation">
            <Navigation locale={locale} page={page} />
          </div>
          <LanguageSwitcher locale={locale} page={page} />
          <div className="desktop-quote">{quoteLink}</div>
        </div>
        <MobileNavigation label={content.menu}>
          <Navigation locale={locale} page={page} />
          {quoteLink}
        </MobileNavigation>
      </div>
    </header>
  );
}
