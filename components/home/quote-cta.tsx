import { ButtonLink } from "@/components/button";
import type { HomeContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";
import styles from "./home.module.css";

export function QuoteCTA({ content, locale, secondaryPage = "contact" }: {
  content: HomeContent["quote"];
  locale: Locale;
  secondaryPage?: PageId;
}) {
  return (
    <section className={styles.quote} aria-labelledby="quote-heading">
      <div>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="quote-heading">{content.heading}</h2>
        <p className={styles.description}>{content.description}</p>
      </div>
      <div className={styles.actions}>
        <ButtonLink href={routes.quote[locale]} className={styles.quoteButton}>{content.primaryAction}</ButtonLink>
        <ButtonLink href={routes[secondaryPage][locale]} variant="text">{content.secondaryAction}</ButtonLink>
      </div>
    </section>
  );
}
