import { ButtonLink } from "@/components/button";
import { Process } from "@/components/home/process";
import { QuoteCTA } from "@/components/home/quote-cta";
import sharedStyles from "@/components/home/home.module.css";
import editorialStyles from "@/components/about/about.module.css";
import { SiteShell } from "@/components/site-shell";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./pricing.module.css";

export function PricingPage({ locale }: { locale: Locale }) {
  const content = getDictionary(locale).pricing;

  return (
    <SiteShell locale={locale} page="pricing">
      <div className={sharedStyles.home}>
        <section className={editorialStyles.intro} aria-labelledby="pricing-heading">
          <p className={sharedStyles.eyebrow}>{content.intro.eyebrow}</p>
          <h1 id="pricing-heading" className={editorialStyles.heading}>{content.intro.heading}</h1>
          <p className={editorialStyles.introText}>{content.intro.description}</p>
          <div className={editorialStyles.actions}>
            <ButtonLink href={routes.quote[locale]}>{content.intro.primaryAction}</ButtonLink>
            <ButtonLink href={routes.contact[locale]} variant="text">{content.intro.secondaryAction}</ButtonLink>
          </div>
        </section>

        <section className={editorialStyles.editorial} aria-labelledby="factors-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.factors.eyebrow}</p>
            <h2 id="factors-heading">{content.factors.heading}</h2>
            <p className={sharedStyles.description}>{content.factors.description}</p>
          </div>
          <dl className={editorialStyles.principles}>
            {content.factors.items.map((item) => (
              <div key={item.id}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Process content={content.process} />

        <section className={editorialStyles.transparency} aria-labelledby="transparency-heading">
          <p className={sharedStyles.eyebrow}>{content.transparency.eyebrow}</p>
          <h2 id="transparency-heading">{content.transparency.heading}</h2>
          <p className={editorialStyles.notice}>{content.transparency.description}</p>
          <p className={editorialStyles.details}>{content.transparency.details}</p>
        </section>

        <section className={editorialStyles.editorial} aria-labelledby="faq-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.faq.eyebrow}</p>
            <h2 id="faq-heading">{content.faq.heading}</h2>
          </div>
          <div className={styles.faq}>
            {content.faq.items.map((item) => (
              <details key={item.id}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <QuoteCTA content={content.quote} locale={locale} />
      </div>
    </SiteShell>
  );
}
