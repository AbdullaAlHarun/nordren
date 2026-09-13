import { ButtonLink } from "@/components/button";
import { QuoteCTA } from "@/components/home/quote-cta";
import sharedStyles from "@/components/home/home.module.css";
import editorialStyles from "@/components/about/about.module.css";
import { SiteShell } from "@/components/site-shell";
import { getDictionary } from "@/content";
import type { ContactContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./contact.module.css";

export function ContactPage({ locale }: { locale: Locale }) {
  const content: ContactContent = getDictionary(locale).contact;

  return (
    <SiteShell locale={locale} page="contact">
      <div className={sharedStyles.home}>
        <section className={editorialStyles.intro} aria-labelledby="contact-heading">
          <p className={sharedStyles.eyebrow}>{content.intro.eyebrow}</p>
          <h1 id="contact-heading" className={editorialStyles.heading}>{content.intro.heading}</h1>
          <p className={editorialStyles.introText}>{content.intro.description}</p>
          <div className={editorialStyles.actions}>
            <ButtonLink href={routes.quote[locale]}>{content.intro.primaryAction}</ButtonLink>
          </div>
        </section>

        <section className={editorialStyles.editorial} aria-labelledby="options-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.options.eyebrow}</p>
            <h2 id="options-heading">{content.options.heading}</h2>
          </div>
          <div className={styles.options}>
            <div>
              <h3>{content.options.quote.heading}</h3>
              <p>{content.options.quote.description}</p>
              <ButtonLink href={routes.quote[locale]} variant="text">{content.options.quote.action}</ButtonLink>
            </div>
            <div>
              <h3>{content.options.enquiry.heading}</h3>
              <p>{content.options.enquiry.description}</p>
              <ButtonLink href={`${routes.contact[locale]}#contact-details`} variant="text">{content.options.enquiry.action}</ButtonLink>
            </div>
          </div>
        </section>

        <section className={editorialStyles.editorial} aria-labelledby="guidance-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.guidance.eyebrow}</p>
            <h2 id="guidance-heading">{content.guidance.heading}</h2>
            <p className={sharedStyles.description}>{content.guidance.description}</p>
          </div>
          <dl className={editorialStyles.principles}>
            {content.guidance.items.map((item) => (
              <div key={item.id}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact-details" tabIndex={-1} className={editorialStyles.transparency} aria-labelledby="business-heading">
          <p className={sharedStyles.eyebrow}>{content.business.eyebrow}</p>
          <h2 id="business-heading">{content.business.heading}</h2>
          {content.business.details.length > 0 ? (
            <dl className={editorialStyles.principles}>
              {content.business.details.map((detail) => (
                <div key={detail.id}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          ) : <p className={editorialStyles.details}>{content.business.pending}</p>}
        </section>

        <QuoteCTA content={content.quote} locale={locale} secondaryPage="services" />
      </div>
    </SiteShell>
  );
}
