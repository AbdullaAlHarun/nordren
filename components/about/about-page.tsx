import { ButtonLink } from "@/components/button";
import { QuoteCTA } from "@/components/home/quote-cta";
import sharedStyles from "@/components/home/home.module.css";
import { SiteShell } from "@/components/site-shell";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./about.module.css";

export function AboutPage({ locale }: { locale: Locale }) {
  const content = getDictionary(locale).about;

  return (
    <SiteShell locale={locale} page="about">
      <div className={sharedStyles.home}>
        <section className={styles.intro} aria-labelledby="about-heading">
          <p className={sharedStyles.eyebrow}>{content.intro.eyebrow}</p>
          <h1 id="about-heading" className={styles.heading}>{content.intro.heading}</h1>
          <p className={styles.introText}>{content.intro.description}</p>
          <div className={styles.actions}>
            <ButtonLink href={routes.quote[locale]}>{content.intro.primaryAction}</ButtonLink>
            <ButtonLink href={routes.services[locale]} variant="text">{content.intro.secondaryAction}</ButtonLink>
          </div>
        </section>

        <section className={styles.editorial} aria-labelledby="principles-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.principles.eyebrow}</p>
            <h2 id="principles-heading">{content.principles.heading}</h2>
            <p className={sharedStyles.description}>{content.principles.description}</p>
          </div>
          <dl className={styles.principles}>
            {content.principles.items.map((item) => (
              <div key={item.id}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.editorial} aria-labelledby="expectations-heading">
          <div>
            <p className={sharedStyles.eyebrow}>{content.expectations.eyebrow}</p>
            <h2 id="expectations-heading">{content.expectations.heading}</h2>
          </div>
          <ol className={styles.steps} role="list">
            {content.expectations.steps.map((step, index) => (
              <li key={step.id}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.transparency} aria-labelledby="transparency-heading">
          <p className={sharedStyles.eyebrow}>{content.transparency.eyebrow}</p>
          <h2 id="transparency-heading">{content.transparency.heading}</h2>
          <p className={styles.notice}>{content.transparency.description}</p>
          <p className={styles.details}>{content.transparency.details}</p>
        </section>

        <QuoteCTA content={content.quote} locale={locale} />
      </div>
    </SiteShell>
  );
}
