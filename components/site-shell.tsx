import type { ReactNode } from "react";
import { getDictionary } from "@/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Locale } from "@/lib/i18n/locales";
import type { PageId } from "@/lib/i18n/routes";

export function SiteShell({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: PageId;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        {getDictionary(locale).shell.skipToContent}
      </a>
      <Header locale={locale} page={page} />
      <main id="main-content" tabIndex={-1} className="site-main container">
        {children}
      </main>
      <Footer locale={locale} page={page} />
    </div>
  );
}
