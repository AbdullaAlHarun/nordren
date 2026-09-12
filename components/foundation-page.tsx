import { getDictionary } from "@/content";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n/locales";
import type { PageId } from "@/lib/i18n/routes";

export function FoundationPage({ locale, page }: { locale: Locale; page: PageId }) {
  const content = getDictionary(locale);

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-5 sm:p-8">
      <LanguageSwitcher locale={locale} page={page} />
      <h1 className="text-3xl font-semibold">{content.pages[page].heading}</h1>
      <p>{content.placeholder}</p>
    </main>
  );
}
