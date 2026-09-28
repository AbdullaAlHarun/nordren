import { ButtonLink } from "@/components/button";
import sharedStyles from "@/components/home/home.module.css";
import editorialStyles from "@/components/about/about.module.css";
import { SiteShell } from "@/components/site-shell";
import { getDictionary } from "@/content";
import { publicEmail } from "@/content/business";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./contact.module.css";

export function ContactPage({ locale }: { locale: Locale }) {
  const { contact: content, business } = getDictionary(locale);

  return (
    <SiteShell locale={locale} page="contact">
      <div className={sharedStyles.home}>
        <section className={editorialStyles.intro} aria-labelledby="contact-heading">
          <p className={sharedStyles.eyebrow}>{content.intro.eyebrow}</p>
          <h1 id="contact-heading" className={editorialStyles.heading}>{content.intro.heading}</h1>
          <p className={editorialStyles.introText}>{content.intro.description}</p>
          <dl className={styles.contactDetails}>
            <div>
              <dt>{business.emailLabel}</dt>
              <dd><a className={styles.email} href={`mailto:${publicEmail}`}>{publicEmail}</a></dd>
            </div>
            <div>
              <dt>{business.areaLabel}</dt>
              <dd>{business.serviceArea}</dd>
            </div>
          </dl>
        </section>

        <section className={editorialStyles.editorial} aria-labelledby="contact-quote-heading">
          <h2 id="contact-quote-heading">{content.quote.heading}</h2>
          <div>
            <p className={sharedStyles.description}>{content.quote.description}</p>
            <div className={editorialStyles.actions}>
              <ButtonLink href={routes.quote[locale]}>{content.quote.action}</ButtonLink>
            </div>
          </div>
        </section>

        <section className={editorialStyles.editorial} aria-labelledby="commercial-heading">
          <h2 id="commercial-heading">{business.commercial.heading}</h2>
          <div>
            <p className={sharedStyles.description}>{business.commercial.description}</p>
            <div className={editorialStyles.actions}>
              <ButtonLink href={`mailto:${publicEmail}`} variant="text">{business.commercial.action}</ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
