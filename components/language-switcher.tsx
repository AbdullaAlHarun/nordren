import { getDictionary } from "@/content";
import { locales, type Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

export function LanguageSwitcher({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale).languageSwitcher;

  return (
    <nav aria-label={content.label} className="language-switcher">
      <ul className="language-list">
        {locales.map((language, index) => (
          <li key={language} className="language-item">
            {index > 0 && <span className="language-separator" aria-hidden="true">|</span>}
            <a
              href={routes[page][language]}
              hrefLang={language}
              lang={language}
              aria-label={content.languages[language].accessibleLabel}
              aria-current={language === locale ? "page" : undefined}
              className="language-link"
            >
              {content.languages[language].shortLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
