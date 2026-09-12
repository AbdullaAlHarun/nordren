import { getDictionary } from "@/content";
import { locales, type Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

export function LanguageSwitcher({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale).languageSwitcher;

  return (
    <nav aria-label={content.label}>
      <ul className="flex items-center gap-2">
        {locales.map((language, index) => (
          <li key={language} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">|</span>}
            <a
              href={routes[page][language]}
              hrefLang={language}
              lang={language}
              aria-label={content.languages[language].accessibleLabel}
              aria-current={language === locale ? "page" : undefined}
              className="inline-flex min-h-11 min-w-11 items-center justify-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 aria-[current=page]:font-bold"
            >
              {content.languages[language].shortLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
