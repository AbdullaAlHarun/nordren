import { ButtonLink } from "@/components/button";
import { Process } from "@/components/home/process";
import { QuoteCTA } from "@/components/home/quote-cta";
import sharedStyles from "@/components/home/home.module.css";
import { SiteShell } from "@/components/site-shell";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./services.module.css";

export function ServicesPage({ locale }: { locale: Locale }) {
  const content = getDictionary(locale).services;

  return (
    <SiteShell locale={locale} page="services">
      <div className={sharedStyles.home}>
        <section className={styles.intro} aria-labelledby="services-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.intro.eyebrow}</p>
            <h1 id="services-heading" className={styles.heading}>{content.intro.heading}</h1>
          </div>
          <div>
            <p className={styles.lead}>{content.intro.description}</p>
            <div className={styles.actions}>
              <ButtonLink href={routes.quote[locale]}>{content.intro.primaryAction}</ButtonLink>
              <ButtonLink href={routes.contact[locale]} variant="text">{content.intro.secondaryAction}</ButtonLink>
            </div>
          </div>
        </section>

        <div className={styles.overview}>
          {content.items.map((service, index) => (
            <section key={service.id} className={styles.service} aria-labelledby={`service-${service.id}`}>
              <div>
                <p className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
                <h2 id={`service-${service.id}`}>{service.title}</h2>
              </div>
              <div className={styles.details}>
                <p>{service.description}</p>
                <ul className={styles.scope}>
                  {service.scope.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className={styles.suitability}><strong>{content.suitabilityLabel}</strong>{" "}{service.suitability}</p>
                <div className={styles.actions}>
                  <ButtonLink href={routes.quote[locale]} variant="text">{service.action}</ButtonLink>
                  <ButtonLink href={`${routes.pricing[locale]}#${service.id}`} variant="text">{content.pricingAction}</ButtonLink>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className={styles.choosing} aria-labelledby="choosing-heading">
          <h2 id="choosing-heading">{content.choosing.heading}</h2>
          <div>
            <p className={styles.lead}>{content.choosing.description}</p>
            <div className={styles.actions}>
              <ButtonLink href={routes.quote[locale]} variant="secondary">{content.choosing.action}</ButtonLink>
            </div>
          </div>
        </section>
        <Process content={content.process} />
        <QuoteCTA content={content.quote} locale={locale} />
      </div>
    </SiteShell>
  );
}
